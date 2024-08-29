import { Nullable, afterAll, beforeAll, describe, expect, it } from "vitest";
import { setupTestClient } from "@/test/utils";
import { STUDY_PROTOCOL } from "@/test/consts";
import { CarpTestClient } from "@/client";
import {
  CarpInputDataTypes,
  Data,
  DefaultSerializer,
  Pair,
  Participant,
  ParticipantData,
  Sex,
  StudyProtocolSnapshot,
  StudyStatus,
  getSerializer,
  toMap,
} from "@/shared";

describe("Participation", () => {
  let testClient: CarpTestClient;
  let researcherAccountId: string;
  let studyStatus: StudyStatus;
  let participant: Participant;

  beforeAll(async () => {
    const { client, accountId } = await setupTestClient();
    testClient = client;
    researcherAccountId = accountId;

    // set up a study
    studyStatus = await testClient.studies.create({
      name: "[PARTICIPATION SERVICE] Test study",
      ownerId: researcherAccountId,
      description: "Test study description",
    });

    // set a protocol
    const json = DefaultSerializer;
    const serializer = getSerializer(StudyProtocolSnapshot);

    const protocol = json.decodeFromString(
      serializer,
      JSON.stringify(STUDY_PROTOCOL),
    ) as StudyProtocolSnapshot;

    await testClient.study.setProtocol({
      protocol,
      studyId: studyStatus.studyId.stringRepresentation,
    });

    // deploy the study
    await testClient.study.goLive({
      studyId: studyStatus.studyId.stringRepresentation,
    });

    // add myself as a participant
    participant = await testClient.study.recruitment.addOneByEmail({
      studyId: studyStatus.studyId.stringRepresentation,
      email: import.meta.env.VITE_RESEARCHER_EMAIL,
    });

    await testClient.study.recruitment.inviteNewParticipantGroup({
      studyId: studyStatus.studyId.stringRepresentation,
      participantsWithRoles: [
        {
          id: participant.id.stringRepresentation,
          assignedRoles: ["Participant"],
        },
      ],
    });

    // HACK: sleep for a while to allow the invitation to be processed
    await new Promise((resolve) => {
      setTimeout(resolve, 10000);
    });

    await testClient.authentication.refresh();
  }, 15000);

  it("should be able to query invitation", async () => {
    const invitations = await testClient.participation.getInvitations({
      participantId: researcherAccountId,
    });

    const foundInvitation = invitations.find(
      (invitation) =>
        invitation.invitation.applicationData ===
        studyStatus.studyId.stringRepresentation,
    );

    expect(foundInvitation).toBeDefined();
  });

  it("should be able to get and set participant data for one study", async () => {
    const invitations = await testClient.participation.getInvitations({
      participantId: researcherAccountId,
    });

    const foundInvitation = invitations.find(
      (invitation) =>
        invitation.invitation.applicationData ===
        studyStatus.studyId.stringRepresentation,
    );

    const participantData = await testClient.participation.getParticipantData({
      studyDeploymentId:
        foundInvitation.participation.studyDeploymentId.stringRepresentation,
    });

    expect(participantData).toBeDefined();
    expect(participantData).toBeInstanceOf(ParticipantData);
    expect(participantData.common.get(CarpInputDataTypes.SEX)).toBe(null);

    const newData = toMap([
      new Pair(
        CarpInputDataTypes.SEX,
        CarpInputDataTypes.inputToDataConverters.get(CarpInputDataTypes.SEX)(
          Sex.Male.name,
        ) as unknown as Nullable<Data>,
      ),
    ]);

    await testClient.participation.setParticipantData({
      studyDeploymentId:
        foundInvitation.participation.studyDeploymentId.stringRepresentation,
      data: newData,
      inputType: null,
    });

    // should be able to get the participant data again
    const updatedParticipantData =
      await testClient.participation.getParticipantData({
        studyDeploymentId:
          foundInvitation.participation.studyDeploymentId.stringRepresentation,
      });

    expect(updatedParticipantData).toBeDefined();
    expect(updatedParticipantData).toBeInstanceOf(ParticipantData);
    expect(updatedParticipantData.common.get(CarpInputDataTypes.SEX)).toEqual(
      Sex.Male,
    );
  });

  it("should be able to get participant data for list of deployments", async () => {
    const invitations = await testClient.participation.getInvitations({
      participantId: researcherAccountId,
    });

    const foundInvitation = invitations.find(
      (invitation) =>
        invitation.invitation.applicationData ===
        studyStatus.studyId.stringRepresentation,
    );
    const participantData =
      await testClient.participation.getParticipantDataList({
        studyDeploymentIds: [
          foundInvitation.participation.studyDeploymentId.stringRepresentation,
        ],
      });

    expect(participantData).toBeDefined();
    expect(participantData).toBeInstanceOf(Array);
    expect(participantData.length).toBeGreaterThan(0);
    expect(participantData[0]).toBeInstanceOf(ParticipantData);
  });

  afterAll(async () => {
    if (studyStatus) {
      await testClient.study.delete({
        studyId: studyStatus.studyId.stringRepresentation,
      });
    }
  });
});
