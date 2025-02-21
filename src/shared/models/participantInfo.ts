import { Role } from "./general";

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
