export type SelfSignupConfig = {
  shortCode: string;
  enabled: boolean;
  participantRoleName: string;
  maxParticipants: number;
  currentParticipantCount: number;
};

export type EnableSelfSignupRequest = {
  studyId: string;
  participantRoleName: string;
  clientId: string;
  redirectUri: string;
  // Lifetime cap on participants; may be raised or lowered on a later call.
  maxParticipants?: number | null;
  subdomain?: string | null;
  // Lifetime of the generated magic links, at most 2592000 (30 days).
  expirationSeconds?: number | null;
};

export type SelfSignupResult = {
  magicLink: string;
};
