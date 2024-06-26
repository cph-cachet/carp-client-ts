import {
  ActiveParticipationInvitation,
  Data,
  HashMap,
  NamespacedId,
  Nullable,
  Pair,
  ParticipantData,
  ParticipationServiceRequest,
  SetSerializer,
  UUID,
  deserialize,
  getSerializer,
  serialize,
  toMap,
  toSet,
} from "@/shared";
import Endpoint from "./endpoint";

class Participation extends Endpoint {
  endpoint: string = "/api/participation-service";

  /**
   * Get invitations that this participant has received
   * @param participantId The account ID of the participant
   */
  async getInvitations({ participantId }: { participantId: string }) {
    const request =
      new ParticipationServiceRequest.GetActiveParticipationInvitations(
        new UUID(participantId),
      );

    const serializedRequest = serialize({
      request,
      serializer: ParticipationServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.endpoint, serializedRequest);
    const decodedResponse = deserialize({
      data: response.data,
      serializer: SetSerializer(getSerializer(ActiveParticipationInvitation)),
      shouldGetSerializer: true,
    });
    const invitations = decodedResponse as ActiveParticipationInvitation[];

    return invitations;
  }

  /**
   * Get participant data
   * @param studyDeploymentId The ID of the study deployment
   */
  async getParticipantData({
    studyDeploymentId,
  }: {
    studyDeploymentId: string;
  }) {
    const participantDataRequest =
      new ParticipationServiceRequest.GetParticipantData(
        new UUID(studyDeploymentId),
      );
    const request = serialize({
      request: participantDataRequest,
      serializer: ParticipationServiceRequest.Serializer,
    });
    const response = await this.actions.post(
      "/api/participation-service",
      request,
    );

    const data = response.data as any;
    // TODO: is this necessary???
    if (data.common) {
      data.common = toMap(
        Object.entries(data.common).map(([key, value]) => new Pair(key, value)),
      );
    }

    return data as ParticipantData;
  }

  /**
   * Get participant data for multiple studies
   * @param studyIds The IDs of the studies
   */
  async getParticipantDataList({ studyIds }: { studyIds: string[] }) {
    const ids: UUID[] = studyIds.map((id) => new UUID(id));
    const studyIdsSet = toSet(ids);
    const request = new ParticipationServiceRequest.GetParticipantDataList(
      studyIdsSet,
    );
    const serializedRequest = serialize({
      request,
      serializer: ParticipationServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.endpoint, serializedRequest);
    const data = response.data as any;

    // TODO: is this necessary???
    if (data.common) {
      data.common = toMap(
        Object.entries(data.common).map(([key, value]) => new Pair(key, value)),
      );
    }

    return data as ParticipantData[];
  }

  /**
   * Set participant data
   * @param studyDeploymentId The ID of the study deployment
   * @param data The data to set
   * @param inputType The input type
   */
  async setParticipantData({
    studyDeploymentId,
    data,
    inputType,
  }: {
    studyDeploymentId: string;
    data: HashMap<NamespacedId, Nullable<Data>>;
    inputType: string;
  }) {
    const participantDataRequest =
      new ParticipationServiceRequest.SetParticipantData(
        new UUID(studyDeploymentId),
        data,
        inputType,
      );
    const request = serialize({
      request: participantDataRequest,
      serializer: ParticipationServiceRequest.Serializer,
    });

    await this.actions.post(this.endpoint, request);
  }
}

export default Participation;
