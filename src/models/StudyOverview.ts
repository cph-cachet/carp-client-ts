export type StudyOverview = {
  studyId: string;
  name: string;
  createdOn: Date;
  studyProtocolId: string | null;
  canSetInvitation: boolean;
  canSetStudyProtocol: boolean;
  canDeployToParticipants: boolean;
  description: string;
};
