import { describe, beforeAll, expect, it, afterAll } from "vitest";
import STUDY_PROTOCOL from "../../consts";
import { Participant, ParticipantGroupStatus, StudyStatus } from "@/shared";
import { generateRandomEmail, setupTestClient } from "../../utils";
import { CarpTestClient } from "@/client";

describe("Deployments", () => {
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
    await testClient.study.setProtocol({
      protocol: STUDY_PROTOCOL,
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
  });

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

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
