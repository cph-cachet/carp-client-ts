export interface ParticipantGroups {
  groups: ParticipantGroup[];
  groupStatuses: any[];
}

export interface ParticipantGroup {
  participantGroupId: string;
  deploymentStatus: DeploymentStatus;
  participants: ParticipantData[];
}

export interface DeploymentStatus {
  createdOn: string;
  startedOn: string;
  stoppedOn: string;
  studyDeploymentId: string;
  deviceStatusList: DeviceStatus[];
  participantStatusList: ParticipantStatus[];
  __type: string;
}

export interface DeviceStatus {
  canBeDeployed: boolean;
  device: Device;
  remainingDevicesToRegisterToObtainDeployment: string[];
  remainingDevicesToRegisterBeforeDeployment: string[];
  lastDataUploadDate: Date;
  lastDataUploadStatus: string;
  __type: string;
}

export interface Device {
  isPrimaryDevice: boolean;
  roleName: string;
  __type: string;
}

export interface ParticipantData {
  participantId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  dateOfLastDataUpload: {
    epocSeconds: number;
    'value$kotlinx_datetime': Date;
    nanosecondsOfSecond: number;
  };
}

export interface ParticipantStatus {
  participantId: string;
  assignedParticipantRoles: {
    roleNames: string[];
  };
  assignedPrimaryDeviceRoleNames: string[];
}
