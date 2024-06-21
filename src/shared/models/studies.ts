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
