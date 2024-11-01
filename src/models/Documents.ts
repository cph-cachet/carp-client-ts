import carpCommon from '@cachet/carp-common';
import cdk = carpCommon.dk;
import UUID = cdk.cachet.carp.common.application.UUID;

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
  type: 'announcement' | 'article' | 'news';
  timestamp: string;
  title: string;
  sub_title: string;
  message: string;
  url?: string;
  image?: string;
}

export type CarpDocumentData = MessageData | ResourceData;

export interface ResourceData {
  [key: string]: any;
}
