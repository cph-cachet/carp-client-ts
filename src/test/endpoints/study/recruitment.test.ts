import { describe, beforeAll, expect, it, afterAll } from "vitest";
import { STUDY_PROTOCOL } from "../../consts";
import {
  DefaultSerializer,
  Participant,
  ParticipantGroupStatus,
  StudyProtocolSnapshot,
  StudyStatus,
  getSerializer,
} from "@/shared";
import { generateRandomEmail, setupTestClient } from "@/test/utils";
import { CarpTestClient } from "@/client";

describe("Recruitment", () => {
  let participants: Participant[];
  let participantGroupStatus: ParticipantGroupStatus;
  let testClient: CarpTestClient;
  let researcherAccountId: string;
  let study: StudyStatus;

  beforeAll(async () => {
    const { client, accountId } = await setupTestClient();
    testClient = client;
    researcherAccountId = accountId;

    // create a study
    study = await testClient.studies.create({
      name: "Test study",
      description: "This is a test study",
      ownerId: researcherAccountId,
    });

    // set invitation
    await testClient.study.setInvitation({
      studyId: study.studyId.stringRepresentation,
      title: "Test invitation",
      description: "This is a test invitation",
    });

    // set protocol
    const json = DefaultSerializer;
    const serializer = getSerializer(StudyProtocolSnapshot);
    const protocol = json.decodeFromString(
      serializer,
      JSON.stringify(STUDY_PROTOCOL),
    ) as StudyProtocolSnapshot;

    await testClient.study.setProtocol({
      protocol,
      studyId: study.studyId.stringRepresentation,
    });

    // set study as live
    await testClient.study.goLive({
      studyId: study.studyId.stringRepresentation,
    });
    // generate 2 random emails
    const emails = [generateRandomEmail(), generateRandomEmail()];

    // add the participants
    await testClient.study.recruitment.addMultipleByEmail({
      studyId: study.studyId.stringRepresentation,
      emails,
    });

    // query the participant
    participants = await testClient.study.recruitment.getParticipants({
      studyId: study.studyId.stringRepresentation,
    });
  }, 25000);

  it("should be able to invite new participant group", async () => {
    participantGroupStatus =
      await testClient.study.recruitment.inviteNewParticipantGroup({
        studyId: study.studyId.stringRepresentation,
        participantsWithRoles: participants.map((p) => ({
          id: p.id.stringRepresentation,
          assignedRoles: ["Participant"],
        })),
      });

    expect(participantGroupStatus).toBeInstanceOf(ParticipantGroupStatus);
  });

  it("should be able to get study deployment statuses in list", async () => {
    const studyDeploymentStatus =
      await testClient.study.recruitment.getParticipantGroupAccountsAndStatus({
        studyId: study.studyId.stringRepresentation,
      });

    // we should find the participant group status in the list
    const found = studyDeploymentStatus.groups.find(
      (g) =>
        g.participantGroupId === participantGroupStatus.id.stringRepresentation,
    );

    expect(found).toBeDefined();
  });

  it("should be able to stop a participant group", async () => {
    const stoppedParticipantGroupStatus =
      await testClient.study.recruitment.stopParticipantGroup({
        studyId: study.studyId.stringRepresentation,
        studyDeploymentId: participantGroupStatus.id.stringRepresentation,
      });

    expect(stoppedParticipantGroupStatus).toBeInstanceOf(
      ParticipantGroupStatus,
    );
    expect(stoppedParticipantGroupStatus).toBeInstanceOf(
      ParticipantGroupStatus.Stopped,
    );
  });

  it("should be able to get inactive deployments", async () => {
    const inactiveParticipantGroups =
      await testClient.study.recruitment.getInactiveDeployments({
        studyId: study.studyId.stringRepresentation,
        lastUpdate: 2,
      });

    expect(inactiveParticipantGroups).toBeDefined();
    expect(inactiveParticipantGroups).toBeInstanceOf(Array);
  });

  it("should be able to get participant account information", async () => {
    const accountInfo =
      await testClient.study.recruitment.getParticipantAccounts({
        studyId: study.studyId.stringRepresentation,
      });

    expect(accountInfo).toBeDefined();
    expect(accountInfo).toBeInstanceOf(Array);
    const account = accountInfo[0];
    expect(account).toBeDefined();
    expect(account.email).toBeDefined();
    expect(account.id).toBeDefined();
    expect(account.username).toBeDefined();
    expect(account.role).toBeDefined();
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
