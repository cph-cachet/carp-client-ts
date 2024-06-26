import { afterAll, beforeAll, describe, expect, it } from "vitest";
import STUDY_PROTOCOL from "../../consts";
import { Participant, StudyStatus, setupTestClient } from "@/shared";
import { CarpTestClient } from "@/client";

describe("Study recruitment endpoints", () => {
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
  });

  it("should be able to add participant by email to a study", async () => {
    // generate a random email
    const email = `${Math.random().toString(36).substring(2)}@example.com`;

    // add the participant
    const participant = await testClient.study.recruitment.addOneByEmail({
      studyId: study.studyId.stringRepresentation,
      email,
    });

    expect(participant).toBeInstanceOf(Participant);

    // query the participant
    const retrievedParticipants =
      await testClient.study.recruitment.getParticipants({
        studyId: study.studyId.stringRepresentation,
      });

    // expect the participant to be in the list
    expect(retrievedParticipants).toContainEqual(participant);
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
