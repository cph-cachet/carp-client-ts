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
