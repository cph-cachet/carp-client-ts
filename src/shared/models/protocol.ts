import { ProtocolsStudyProtocolSnapshot as StudyProtocolSnapshot } from "../coreTypes";

export type StudyProtocol = {
  id: string;
  createdOn: Date;
  ownerId: string;
  name: string;
  description: string;
  [key: string]: unknown;
};

export type LatestProtocol = {
  versionTag: string;
  snapshot: StudyProtocolSnapshot;
  firstVersionCreatedDate: string;
  lastVersionCreatedDate: string;
};
