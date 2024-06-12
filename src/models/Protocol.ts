import carpProtocols from '@cachet/carp-protocols-core';
import pdk = carpProtocols.dk;
import StudyProtocolSnapshot = pdk.cachet.carp.protocols.application.StudyProtocolSnapshot;

export type ProtocolJSONObject = {
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
