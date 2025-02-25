import {
  ActiveParticipationInvitation,
  ExpectedParticipantData,
  InputDataType,
  ParticipantData,
  ParticipationServiceRequest,
  RoleData,
  Set,
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

    const responseData = response.data as ParticipantData;

    const data = new ExpectedParticipantData();
    data.studyDeploymentId =
      responseData.studyDeploymentId as unknown as string;
    Object.entries(responseData.common).forEach(([key, value]) => {
      data.common[key] = value;
    });
    (responseData.roles as unknown as RoleData[]).forEach((value) => {
      Object.entries(value.data).forEach(([key1, value1]) => {
        data.roles[value.roleName] = {};
        data.roles[value.roleName][key1] = value1;
      });
    });

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

    const responseData = response.data as Array<ParticipantData>;

    const data = responseData.map((rd) => {
      const d = new ExpectedParticipantData();
      d.studyDeploymentId = rd.studyDeploymentId as unknown as string;
      Object.entries(rd.common).forEach(([key, value]) => {
        d.common[key] = value;
      });
      (rd.roles as unknown as RoleData[]).forEach((value) => {
        Object.entries(value.data).forEach(([key1, value1]) => {
          d.roles[value.roleName] = {};
          d.roles[value.roleName][key1] = value1;
        });
      });
      return d;
    });

    return data as ExpectedParticipantData[];
  }

  /**
   * Set participant data
   * @param studyDeploymentId The ID of the study deployment
   * @param data The data to set
   * @param inputRoleName The role name of the input
   */
  async setParticipantData({
    studyDeploymentId,
    data,
    inputRoleName,
  }: {
    studyDeploymentId: string;
    data: { [key: string]: InputDataType };
    inputRoleName: string;
  }) {
    const participantDataRequest =
      new ParticipationServiceRequest.SetParticipantData(
        new UUID(studyDeploymentId),
        toMap([]),
        inputRoleName,
      );
    let request = serialize({
      request: participantDataRequest,
      serializer: ParticipationServiceRequest.Serializer,
    });
    request = request.replaceAll('"data":{}', `"data":${JSON.stringify(data)}`);

    await this.actions.post(this.endpoint, request);
  }
}

export default Participation;
