export type SortDirection = "asc" | "desc";

export type ParticipantOrderBy =
  | "accountidentity"
  | "account_identity"
  | "username"
  | "email"
  | "isdeployed"
  | "is_deployed";

export type ParticipantAccountsRequestDto = {
  page?: number | null;
  size?: number | null;
  search?: string | null;
  isDeployed?: boolean | null;
  sortDirection?: SortDirection | null;
  sortBy?: ParticipantOrderBy | null;
};

export type ParticipantAccountSummaryDto = {
  participantId: string;
  firstName?: string | null;
  lastName?: string | null;
  accountIdentity?: string | null;
  invitedOn?: string | null;
  isDeployed: boolean;
  carpUser: boolean;
};

export type DeploymentStatusCountsDto = {
  invited: number;
  deployingDevices: number;
  running: number;
  stopped: number;
  total: number;
};
