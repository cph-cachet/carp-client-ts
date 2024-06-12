import { AxiosRequestConfig } from 'axios';
import { Role } from '.';

export interface ParticipantInfo {
  id: string;
  username: string;
  email_address: string;
  first_name: string;
  last_name: string;
  roles: Role[];
  user_id: number | null;
  created_by: string;
  created_at: string;
  updated_by: string;
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

export interface ParticipantWithRoles {
  id: string;
  assignedRoles: string[];
}

export interface AnonymousLinksRequest {
  studyId: string;
  amountOfAccounts: number;
  expirationSeconds: number;
  redirectUri: string;
  participantRoleName: string;
  config: AxiosRequestConfig;
}

export interface AnonymousLinksResponse {
  filename: string;
  data: string;
}
