import {
  AnonymousLinksRequest,
  AnonymousLinksResponse,
  InactiveDeployment,
  ParticipantAccount,
  ParticipantGroups,
  ParticipantWithRoles,
} from "@/shared/models";
import Endpoint from "../endpoint";
import {
  ArrayList,
  AssignParticipantRoles,
  EmailAddress,
  ListSerializer,
  Participant,
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
    const assignParticipantRoles = participantsWithRoles.map(
      (participantWithRoles: ParticipantWithRoles) =>
        new AssignParticipantRoles(
          new UUID(participantWithRoles.id),
          new Roles(toSet(participantWithRoles.assignedRoles)),
        ),
    );

    const inviteParticipantGroup =
      new RecruitmentServiceRequest.InviteNewParticipantGroup(
        new UUID(studyId),
        toSet(assignParticipantRoles),
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

  async getParticipantAccounts({ studyId }: { studyId: string }) {
    const response = await this.actions.get<ParticipantAccount[]>(
      `${this.wsEndpoint}/${studyId}/participantGroup/status`,
    );

    return response.data;
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

    return response.data;
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
    redirectUri,
    participantRoleName,
  }: AnonymousLinksRequest) {
    const response = await this.actions.post<AnonymousLinksResponse>(
      `${this.wsEndpoint}/${studyId}/participants/generate-anonymous-accounts`,
      {
        amountOfAccounts,
        expirationSeconds,
        redirectUri,
        participantRoleName,
      },
    );

    const header = response.headers["content-disposition"] as string;
    const regex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = regex.exec(header);
    const filename =
      matches != null && matches[1]
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
