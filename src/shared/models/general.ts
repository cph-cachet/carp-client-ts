import { UUID } from "../coreTypes";

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isActivated: boolean;
  accountId: UUID;
  role: Role[];
};

export type Role = "RESEARCHER" | "PARTICIPANT" | "SYSTEM_ADMIN" | "CARP_ADMIN";
