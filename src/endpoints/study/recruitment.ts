import {
  AnonymousLinksRequest,
  AnonymousLinksResponse,
  InactiveDeployment,
  PaginatedParticipantAccounts,
  PaginatedResponseDto,
  ParticipantAccount,
  ParticipantAccountsRequestDto,
  ParticipantAccountSummaryDto,
  ParticipantGroups,
  ParticipantInfo,
  ParticipantWithRoles,
} from "@/shared/models";
import Endpoint from "../endpoint";
import {
  ArrayList,
  AssignParticipantRoles,
  EmailAddress,
  ListSerializer,
  Participant,
  ParticipantGroupRepresentation,
  ParticipantGroupStatus,
  RecruitmentServiceRequest,
  Roles,
  UUID,
  Username,
  deserialize,
  getSerializer,
  serialize,
  toSet,
} from "@/shared";

class Recruitment extends Endpoint {
  coreEndpoint: string = "/api/recruitment-service";

  wsEndpoint: string = "/api/studies";

  private static buildAssignParticipantRoles(
    participantsWithRoles: ParticipantWithRoles[],
  ) {
    return participantsWithRoles.map(
      (participantWithRoles: ParticipantWithRoles) =>
        new AssignParticipantRoles(
          new UUID(participantWithRoles.id),
          new Roles(
            toSet(
              participantWithRoles.assignedRoles,
            ) as unknown as ConstructorParameters<typeof Roles>[0],
          ),
        ),
    );
  }

  /**
   * Invite new participant group
   * @param studyId The ID of the study
   * @param participantsWithRoles The participants to invite, and the roles to assign them
   */
  async inviteNewParticipantGroup({
    studyId,
    participantsWithRoles,
  }: {
    studyId: string;
    participantsWithRoles: ParticipantWithRoles[];
  }) {
    const assignParticipantRoles = Recruitment.buildAssignParticipantRoles(
      participantsWithRoles,
    );

    const inviteParticipantGroup =
      new RecruitmentServiceRequest.InviteNewParticipantGroup(
        new UUID(studyId),
        toSet(assignParticipantRoles) as unknown as ConstructorParameters<
          typeof RecruitmentServiceRequest.InviteNewParticipantGroup
        >[1],
      );

    const serializedInviteParticipantGroup = serialize({
      request: inviteParticipantGroup,
      serializer: RecruitmentServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedInviteParticipantGroup,
    );

    const participantGroupStatus = deserialize({
      data: response.data,
      serializer: ParticipantGroupStatus,
    }) as unknown as ParticipantGroupStatus;

    return participantGroupStatus;
  }

  /**
   * @deprecated use `queryParticipantAccounts` method instead
   */
  async getParticipantAccounts({
    studyId,
    limit,
    offset,
    search,
    response_as_dto,
    is_descending,
  }: {
    studyId: string;
    limit?: number | null;
    offset?: number | null;
    search?: string | null;
    response_as_dto?: boolean | null;
    is_descending?: boolean | null;
  }) {
    const response = await this.actions.get<
      ParticipantAccount[] | PaginatedParticipantAccounts
    >(`${this.wsEndpoint}/${studyId}/participants/accounts`, {
      params: {
        limit,
        offset,
        search,
        response_as_dto,
        is_descending,
      },
    });

    return response.data;
  }

  /**
   * Create a new participant group without immediately inviting it. Use
   * `inviteParticipantGroup` afterwards to send out invitations.
   * @param studyId The ID of the study
   * @param participantsWithRoles The participants to assign to the group, and the roles to assign them
   * @param groupId The ID to assign to the new group. A random ID is generated if omitted.
   * @param representationName An optional human-readable name for the group.
   */
  async createParticipantGroup({
    studyId,
    participantsWithRoles,
    groupId = UUID.Companion.randomUUID().stringRepresentation,
    representationName,
  }: {
    studyId: string;
    participantsWithRoles: ParticipantWithRoles[];
    groupId?: string;
    representationName?: string;
  }) {
    const assignParticipantRoles = Recruitment.buildAssignParticipantRoles(
      participantsWithRoles,
    );

    const createParticipantGroup =
      new RecruitmentServiceRequest.CreateParticipantGroup(
        new UUID(groupId),
        toSet(assignParticipantRoles) as unknown as ConstructorParameters<
          typeof RecruitmentServiceRequest.CreateParticipantGroup
        >[1],
        new UUID(studyId),
        representationName === undefined
          ? undefined
          : new ParticipantGroupRepresentation(representationName),
      );

    const request = serialize({
      request: createParticipantGroup,
      serializer: RecruitmentServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.coreEndpoint, request);

    const participantGroupStatus = deserialize({
      data: response.data,
      serializer: ParticipantGroupStatus,
    }) as unknown as ParticipantGroupStatus;

    return participantGroupStatus;
  }

  /**
   * Update the role assignments and/or representation of a participant group.
   * Assignments can't be changed after the group has been invited.
   * @param groupId The ID of the participant group to update
   * @param participantsWithRoles If set, role assignments are updated; unchanged otherwise.
   * @param representationName If set, the group representation is updated; unchanged otherwise.
   */
  async updateParticipantGroup({
    groupId,
    participantsWithRoles,
    representationName,
  }: {
    groupId: string;
    participantsWithRoles?: ParticipantWithRoles[];
    representationName?: string;
  }) {
    const assignParticipantRoles = participantsWithRoles
      ? Recruitment.buildAssignParticipantRoles(participantsWithRoles)
      : undefined;

    const updateParticipantGroup =
      new RecruitmentServiceRequest.UpdateParticipantGroup(
        new UUID(groupId),
        assignParticipantRoles === undefined
          ? undefined
          : (toSet(assignParticipantRoles) as unknown as NonNullable<
              ConstructorParameters<
                typeof RecruitmentServiceRequest.UpdateParticipantGroup
              >[1]
            >),
        representationName === undefined
          ? undefined
          : new ParticipantGroupRepresentation(representationName),
      );

    const request = serialize({
      request: updateParticipantGroup,
      serializer: RecruitmentServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.coreEndpoint, request);

    const participantGroupStatus = deserialize({
      data: response.data,
      serializer: ParticipantGroupStatus,
    }) as unknown as ParticipantGroupStatus;

    return participantGroupStatus;
  }

  /**
   * Invite the participant group with the specified groupId to start participating in its study.
   * @param groupId The ID of the participant group to invite
   */
  async inviteParticipantGroup({ groupId }: { groupId: string }) {
    const inviteParticipantGroup =
      new RecruitmentServiceRequest.InviteParticipantGroup(new UUID(groupId));

    const request = serialize({
      request: inviteParticipantGroup,
      serializer: RecruitmentServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.coreEndpoint, request);

    const participantGroupStatus = deserialize({
      data: response.data,
      serializer: ParticipantGroupStatus,
    }) as unknown as ParticipantGroupStatus;

    return participantGroupStatus;
  }

  /**
   *
   * @param studyId The ID of the study
   * @param request ParticipantAccountRequest for pagination, filtering and searching
   * @returns Paginated object for participant accounts
   */
  async queryParticipantAccounts({
    studyId,
    request,
  }: {
    studyId: string;
    request: ParticipantAccountsRequestDto;
  }) {
    return (
      await this.actions.post<
        PaginatedResponseDto<ParticipantAccountSummaryDto>
      >(`${this.wsEndpoint}/${studyId}/participants/accounts`, request)
    ).data;
  }

  /**
   * Get participant group status
   * @param studyId The ID of the study
   */
  async getParticipantGroupStatusList({ studyId }: { studyId: string }) {
    const getParticipantGroupStatus =
      new RecruitmentServiceRequest.GetParticipantGroupStatusList(
        new UUID(studyId),
      );

    const serializedGetParticipantGroupStatus = serialize({
      request: getParticipantGroupStatus,
      serializer: RecruitmentServiceRequest.Serializer,
    });

    const response = await this.actions.post<ParticipantGroupStatus[]>(
      this.coreEndpoint,
      serializedGetParticipantGroupStatus,
    );

    const data = deserialize({
      data: response.data,
      serializer: ListSerializer(getSerializer(ParticipantGroupStatus)),
      shouldGetSerializer: false,
    }) as unknown as ArrayList<ParticipantGroupStatus>;

    return data;
  }

  /**
   * Get participant group accounts and status
   * @param studyId The ID of the study
   */
  async getParticipantGroupAccountsAndStatus({ studyId }: { studyId: string }) {
    const response = await this.actions.get<ParticipantGroups>(
      `${this.wsEndpoint}/${studyId}/participantGroup/status`,
    );

    return response.data;
  }

  /**
   * Stop a participant group
   * @param studyId The ID of the study
   * @param studyDeploymentId The ID of the participant group
   */
  async stopParticipantGroup({
    studyId,
    studyDeploymentId,
  }: {
    studyId: string;
    studyDeploymentId: string;
  }) {
    const stopParticipantGroup =
      new RecruitmentServiceRequest.StopParticipantGroup(
        new UUID(studyId),
        new UUID(studyDeploymentId),
      );

    const serializedStopParticipantGroup = serialize({
      request: stopParticipantGroup,
      serializer: RecruitmentServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedStopParticipantGroup,
    );

    const participantGroupStatus = deserialize({
      data: response.data,
      serializer: ParticipantGroupStatus,
    }) as unknown as ParticipantGroupStatus;

    return participantGroupStatus;
  }

  /**
   * Get participant info
   * @param studyId The ID of the study
   */
  async getParticipantInfo({ studyId }: { studyId: string }) {
    const response = await this.actions.get<ParticipantInfo[]>(
      `${this.wsEndpoint}/${studyId}/participants`,
    );

    return response.data;
  }

  /**
   * Add participants to a study
   * @param studyId The ID of the study
   * @param emails The emails of the participants to add
   */
  async addMultipleByEmail({
    studyId,
    emails,
  }: {
    studyId: string;
    emails: string[];
  }) {
    await this.actions.post(`${this.wsEndpoint}/${studyId}/participants/add`, {
      emails,
    });
  }

  /**
   * Add a participant to a study by email (CORE)
   * @param studyId The ID of the study
   * @param email The ID of the participant
   */
  async addOneByEmail({ studyId, email }: { studyId: string; email: string }) {
    const addParticipant =
      new RecruitmentServiceRequest.AddParticipantByEmailAddress(
        new UUID(studyId),
        new EmailAddress(email),
      );

    const request = serialize({
      request: addParticipant,
      serializer: RecruitmentServiceRequest.Serializer,
    });
    const response = await this.actions.post(this.coreEndpoint, request);
    const decodedResponse = deserialize({
      data: response.data,
      serializer: Participant,
    }) as unknown as Participant;

    return decodedResponse;
  }

  /**
   * Add a participant to a study by username (CORE)
   * @param studyId The ID of the study
   * @param username The username of the participant
   */
  async addOneByUsername({
    studyId,
    username,
  }: {
    studyId: string;
    username: string;
  }) {
    const addParticipant =
      new RecruitmentServiceRequest.AddParticipantByUsername(
        new UUID(studyId),
        new Username(username),
      );

    const request = serialize({
      request: addParticipant,
      serializer: RecruitmentServiceRequest.Serializer,
    });
    const response = await this.actions.post(this.coreEndpoint, request);
    const decodedResponse = deserialize({
      data: response.data,
      serializer: Participant,
    }) as unknown as Participant;

    return decodedResponse;
  }

  /**
   * Generate anonymous accounts
   * @param studyId The ID of the study
   * @param amountOfAccounts The number of accounts to generate
   * @param expirationSeconds The number of seconds until the accounts expire
   * @param redirectUri The URL to redirect participants to
   * @param participantRoleName What role to assign participants to when they are deployed to the study
   */
  async generateAnonymousAccounts({
    studyId,
    amountOfAccounts,
    expirationSeconds,
    clientId,
    redirectUri,
    subdomain,
    participantRoleName,
    useFastPipeline,
  }: AnonymousLinksRequest) {
    const response = await this.actions.post<AnonymousLinksResponse>(
      `${this.wsEndpoint}/${studyId}/exports/anonymous-participants`,
      {
        amountOfAccounts,
        expirationSeconds,
        clientId,
        redirectUri,
        subdomain,
        participantRoleName,
        useFastPipeline,
      },
    );

    const header = response.headers["content-disposition"] as string;
    const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = regex.exec(header);
    const filename = matches?.[1]
      ? matches[1].replace(/['"]/g, "")
      : "accounts.csv";

    return {
      filename,
      data: response.data.data,
    } as AnonymousLinksResponse;
  }

  /**
   * Get participants in a study
   * @param studyId The ID of the study
   */
  async getParticipants({ studyId }: { studyId: string }) {
    const getParticipants = new RecruitmentServiceRequest.GetParticipants(
      new UUID(studyId),
    );

    const request = serialize({
      request: getParticipants,
      serializer: RecruitmentServiceRequest.Serializer,
    });
    const response = await this.actions.post(this.coreEndpoint, request);
    const decodedResponse = deserialize({
      data: response.data,
      serializer: ListSerializer(getSerializer(Participant)),
      shouldGetSerializer: false,
    }) as ArrayList<Participant>;

    return decodedResponse.toArray();
  }

  /**
   *
   * @param studyId The ID of the study
   * @param lastUpdate Filter deployments that have been last updated longer than this in hours
   */
  async getInactiveDeployments({
    studyId,
    lastUpdate,
  }: {
    studyId: string;
    lastUpdate: number;
  }) {
    const response = await this.actions.get<InactiveDeployment[]>(
      `${this.wsEndpoint}/${studyId}/inactive_deployments?last_update=${lastUpdate}`,
    );
    return response.data;
  }
}

export default Recruitment;
