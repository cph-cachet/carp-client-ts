import {
  ActiveParticipationInvitation,
  ArrayList,
  Data,
  HashMap,
  ListSerializer,
  NamespacedId,
  Nullable,
  ParticipantData,
  ParticipationServiceRequest,
  Set,
  SetSerializer,
  UUID,
  deserialize,
  getSerializer,
  serialize,
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
      shouldGetSerializer: false,
    }) as unknown as Set<ActiveParticipationInvitation>;

    return decodedResponse.toArray();
  }

  /**
   * Get participant data for a study deployment
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

    const data = deserialize({
      data: response.data,
      serializer: ParticipantData,
    }) as unknown as ParticipantData;

    return data;
  }

  /**
   * Get participant data for multiple study deployments
   * @param studyIds The IDs of the studies
   */
  async getParticipantDataList({
    studyDeploymentIds,
  }: {
    studyDeploymentIds: string[];
  }) {
    const ids: UUID[] = studyDeploymentIds.map((id) => new UUID(id));
    const studyIdsSet = toSet(ids);

    const request = new ParticipationServiceRequest.GetParticipantDataList(
      studyIdsSet,
    );
    const serializedRequest = serialize({
      request,
      serializer: ParticipationServiceRequest.Serializer,
    });

    const response = await this.actions.post(this.endpoint, serializedRequest);

    const data = deserialize({
      data: response.data,
      serializer: ListSerializer(getSerializer(ParticipantData)),
      shouldGetSerializer: false,
    }) as unknown as ArrayList<ParticipantData>;

    return data.toArray();
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
