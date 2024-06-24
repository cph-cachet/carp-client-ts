import { ParticipantGroups, ParticipantWithRoles } from "@/shared/models";
import Endpoint from "../endpoint";
import {
  ArrayList,
  AssignParticipantRoles,
  ListSerializer,
  ParticipantGroupStatus,
  RecruitmentServiceRequest,
  Roles,
  StudyServiceRequest,
  UUID,
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
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedInviteParticipantGroup,
    );

    const participantGroupStatus = deserialize({
      response,
      serializer: ParticipantGroupStatus,
    });

    return participantGroupStatus;
  }

  /**
   * Get participant group status
   * @param studyId The ID of the study
   */
  async getParticipantGroupStatus({ studyId }: { studyId: string }) {
    const getParticipantGroupStatus =
      new RecruitmentServiceRequest.GetParticipantGroupStatusList(
        new UUID(studyId),
      );

    const serializedGetParticipantGroupStatus = serialize({
      request: getParticipantGroupStatus,
      serializer: StudyServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedGetParticipantGroupStatus,
    );

    const participantGroupStatus: ArrayList<ParticipantGroupStatus> =
      deserialize({
        data: response.data,
        serializer: ListSerializer(getSerializer(ParticipantGroupStatus)),
      });

    return participantGroupStatus.toArray();
  }

  /**
   * Get participant group accounts and status
   * @param studyId The ID of the study
   */
  async getParticipantGroupAccountsAndStatus({ studyId }: { studyId: string }) {
    const response = await this.actions.get<ParticipantGroups>(
      `${this.coreEndpoint}/${studyId}/participantGroup/status`,
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
      serializer: StudyServiceRequest.Serializer,
    });

    const response = this.actions.post(
      this.coreEndpoint,
      serializedStopParticipantGroup,
    );

    const participantGroupStatus = deserialize({
      response,
      serializer: ParticipantGroupStatus,
    });

    return participantGroupStatus;
  }
}

export default Recruitment;
