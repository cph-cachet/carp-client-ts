import {
  DefaultDeviceRegistration,
  DeploymentServiceRequest,
  Instant,
  MasterDeviceDeployment,
  StudyDeploymentStatus,
  UUID,
  deserialize,
  serialize,
} from "@/shared";
import Endpoint from "../endpoint";
import { Statistics } from "@/shared/models";

class Deployments extends Endpoint {
  coreEndpoint: string = "/api/deployment-service";

  wsEndpoint: string = "/api/studies";

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
      serializer: StudyDeploymentStatus,
    }) as unknown as StudyDeploymentStatus;

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
      serializer: StudyDeploymentStatus,
    }) as unknown as StudyDeploymentStatus;

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

  /**
   * Get device deployments
   * @param studyDeploymentId The ID of the study deployment
   */
  async getDeploymentStatistics({
    deploymentIds,
  }: {
    deploymentIds: string[];
  }) {
    const response = await this.actions.post<{ statistics: any }>(
      `${this.coreEndpoint}/statistic`,
      {
        deploymentIds,
      },
    ); // add deployment ID to URL
    const responseData: {
      deployments: { deploymentId: string; uploads: any }[];
    }[] = [];
    const res: { deploymentId: string; uploads: any }[] = [];

    const DeploymentIdArray: string[] = [];
    const { statistics } = response.data;
    Object.keys(statistics).forEach((id) => {
      DeploymentIdArray.push(id);
    });

    DeploymentIdArray.forEach((id) => {
      const value = statistics[id];

      const dataTypes: string[] = [];
      Object.keys(value).forEach((dataType) => {
        dataTypes.push(dataType);
      });

      const uploads: any[] = [];
      dataTypes.forEach((element) => {
        const obj: {
          dataType: string;
          uploads: { count: number; uploads: {} };
        } = {
          dataType: element,
          uploads: value[element],
        };
        uploads.push(obj);
      });

      const obj: { deploymentId: string; uploads: any[] } = {
        deploymentId: id,
        uploads,
      };
      res.push(obj);
      responseData.push({
        deployments: res,
      });
    });

    return responseData as Statistics[];
  }
}

export default Deployments;
