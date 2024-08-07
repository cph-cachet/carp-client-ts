import { UUID } from "../coreTypes";

export type StudyOverview = {
  studyId: string;
  name: string;
  createdOn: {
    epocSeconds: number;
    value$kotlinx_datetime: Date;
    nanosecondsOfSecond: number;
  };
  studyProtocolId: string | null;
  canSetInvitation: boolean;
  canSetStudyProtocol: boolean;
  canDeployToParticipants: boolean;
  description: string;
};

export type AnonymousLinksRequest = {
  studyId: string;
  amountOfAccounts: number;
  expirationSeconds: number;
  redirectUri: string;
  participantRoleName: string;
};

export type AnonymousLinksResponse = {
  filename: string;
  data: string;
};

export type ParticipantWithRoles = {
  id: string;
  assignedRoles: string[];
};

export type ParticipantGroups = {
  groups: ParticipantGroup[];
  groupStatuses: any[];
};

export interface ParticipantGroup {
  participantGroupId: string;
  deploymentStatus: DeploymentStatus;
  participants: ParticipantDataInput[];
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

export interface ParticipantDataInput {
  participantId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  dateOfLastDataUpload: {
    epocSeconds: number;
    value$kotlinx_datetime: Date;
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

export interface Collection {
  id: string;
  name: string;
  study_id: UUID;
  study_deployment_id?: UUID;
  document_id?: UUID;
  documents: CarpDocument[];
}

export interface CarpDocument {
  id: string;
  name: string;
  collection_id: number;
  collections: Collection[];
  data: CarpDocumentData;
  created_by: UUID;
  created_at: string;
  updated_by: UUID;
  updated_at: string;
}

export interface MessageData {
  id: UUID | string;
  type: "announcement" | "article" | "news";
  timestamp: string;
  title: string;
  subTitle: string;
  message: string;
  url?: string;
  image?: string;
}

export type CarpDocumentData = MessageData | ResourceData;

export interface ResourceData {
  [key: string]: any;
}

export interface InformedConsentFile {
  text: string;
  signature: string;
}

export interface DataPoint {
  carp_header: {
    study_id: string; // should propably be a number or UUID
    user_id: string;
    device_role_name: string;
    trigger_id: string;
    data_format: {
      namepace: string; // spelled wrong
      name: string;
    };
    start_time: string;
  };
  carp_body: {
    classname: string;
    id: string;
    timestamp: string;
    device_info: unknown; // not sure what this is supposed to hold
    latitude: number;
    longitude: number;
    altitude: number; // relevant
    accuracy: number;
    speed: number;
    speed_accuracy: number;
  };
}

export interface DataPointResponse {
  id: number;
  study_id: string;
  created_by_user_id: number;
  carp_header: {
    study_id: string; // should propably be a number or UUID
    device_role_name: string;
    trigger_id: string;
    data_format: {
      namepace: string; // spelled wrong
      name: string;
    };
    start_time: string;
  };
  carp_body: {
    classname: string;
    id: string;
    timestamp: string;
    device_info: unknown; // not sure what this is supposed to hold
    latitude: number;
    longitude: number;
    altitude: number; // relevant
    accuracy: number;
    speed: number;
    speed_accuracy: number;
  };
  created_at: string;
  updated_at: string;
}

export interface ParticipantAccount {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  role: string;
  username: string;
}

export interface Statistics {
  deployments: { deploymentId: string; uploads: any }[];
}

export interface InformedConsentResponse {
  id: number;
  deployment_id: string;
  created_at: string;
  created_by: string;
  updated_by: string;
  updated_at: string;
  data: {
    text: string;
    signature: string;
  };
}
