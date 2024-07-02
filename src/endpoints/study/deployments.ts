import {
  ArrayList,
  DefaultDeviceRegistration,
  DeploymentServiceRequest,
  Instant,
  ListSerializer,
  MasterDeviceDeployment,
  ParticipantGroupStatus,
  RecruitmentServiceRequest,
  StudyDeploymentStatus,
  UUID,
  deserialize,
  getSerializer,
  serialize,
} from "@/shared";
import Endpoint from "../endpoint";
import { ParticipantGroups } from "@/shared/models";

class Deployments extends Endpoint {
  coreEndpoint: string = "/api/deployment-service";

  wsEndpoint: string = "/api/studies";

  /**
   * Get deployment statuses for a study
   * @param studyId The ID of the study
   */
  async getDeploymentStatuses({ studyId }) {
    const getDeploymentStatuses =
      new RecruitmentServiceRequest.GetParticipantGroupStatusList(
        new UUID(studyId),
      );

    const serializedGetDeploymentStatuses = serialize({
      request: getDeploymentStatuses,
      serializer: RecruitmentServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedGetDeploymentStatuses,
    );

    const deploymentStatuses = deserialize({
      data: response.data,
      serializer: ListSerializer(getSerializer(ParticipantGroupStatus)),
      shouldGetSerializer: false,
    }) as unknown as ArrayList<ParticipantGroupStatus>;

    return deploymentStatuses.toArray();
  }

  /**
   * Get all deployments, with accounts and their statuses for a study
   * @param studyId The ID of the study
   */
  async getDeploymentAccountsAndStatus({ studyId }) {
    const response = await this.actions.get<ParticipantGroups>(
      `${this.coreEndpoint}/${studyId}/participantGroup/status`,
    );

    return response.data;
  }

  /**
   * Register a device for a study deployment
   * @param studyDeploymentId The ID of the study deployment
   * @param primaryDeviceRoleName: The name of the primary device role (from the protocol)
   * @param deviceId also from the protocol
   */
  async registerDevice({
    studyDeploymentId,
    primaryDeviceRoleName,
    deviceId,
  }: {
    studyDeploymentId: string;
    primaryDeviceRoleName: string;
    deviceId: string;
  }) {
    const registerDevice = new DeploymentServiceRequest.RegisterDevice(
      new UUID(studyDeploymentId),
      primaryDeviceRoleName,
      new DefaultDeviceRegistration(deviceId),
    );

    const serializedRegisterDevice = serialize({
      request: registerDevice,
      serializer: DeploymentServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedRegisterDevice,
    );

    const deploymentStatus = deserialize({
      data: response.data,
      serializer: StudyDeploymentStatus.Running,
    }) as unknown as StudyDeploymentStatus.Running;

    return deploymentStatus;
  }

  /**
   * Update device registration
   * @param studyDeploymentId The ID of the study deployment
   * @param primaryDeviceRoleName The name of the primary device role
   * @param lastUpdated The last updated timestamp
   */
  async updateDeviceRegistration({
    studyDeploymentId,
    primaryDeviceRoleName,
    lastUpdated,
  }: {
    studyDeploymentId: string;
    primaryDeviceRoleName: string;
    lastUpdated: Instant;
  }) {
    const updateDeviceRegistration =
      new DeploymentServiceRequest.DeviceDeployed(
        new UUID(studyDeploymentId),
        primaryDeviceRoleName,
        lastUpdated,
      );

    const serializedUpdateDeviceRegistration = serialize({
      request: updateDeviceRegistration,
      serializer: DeploymentServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedUpdateDeviceRegistration,
    );

    const deploymentStatus = deserialize({
      data: response.data,
      serializer: StudyDeploymentStatus.Running,
    }) as unknown as StudyDeploymentStatus.Running;

    return deploymentStatus;
  }

  /**
   * Get device deployment
   * @param studyDeploymentId The ID of the study deployment
   * @param primaryDeviceRoleName The name of the device role
   */
  async getDeviceDeploymentFor({
    studyDeploymentId,
    primaryDeviceRoleName,
  }: {
    studyDeploymentId: string;
    primaryDeviceRoleName: string;
  }) {
    const getDeviceDeployment =
      new DeploymentServiceRequest.GetDeviceDeploymentFor(
        new UUID(studyDeploymentId),
        primaryDeviceRoleName,
      );

    const serializedGetDeviceDeployment = serialize({
      request: getDeviceDeployment,
      serializer: DeploymentServiceRequest.Serializer,
    });

    const response = await this.actions.post(
      this.coreEndpoint,
      serializedGetDeviceDeployment,
    );

    const deviceDeployment = deserialize({
      data: response.data,
      serializer: MasterDeviceDeployment,
    }) as unknown as MasterDeviceDeployment;

    return deviceDeployment;
  }
}

export default Deployments;
