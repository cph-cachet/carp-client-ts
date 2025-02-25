import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { generateRandomEmail, setupTestClient } from "@/test/utils";
import { STUDY_PROTOCOL } from "../../consts";
import {
  DefaultSerializer,
  EmailAccountIdentity,
  Participant,
  StudyProtocolSnapshot,
  StudyStatus,
  getSerializer,
} from "@/shared";
import { CarpTestClient } from "@/client";

describe("Study participant endpoints", () => {
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
  });

  it("should be able to add participant by email to a study", async () => {
    // generate a random email
    const email = generateRandomEmail();

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

  it("should be able to add participant by username to a study", async () => {
    // generate a random email
    const username = generateRandomEmail();

    // add the participant
    const participant = await testClient.study.recruitment.addOneByUsername({
      studyId: study.studyId.stringRepresentation,
      username,
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

  it("should be able to add multiple participants by email to a study", async () => {
    // generate a random email
    const emails = [generateRandomEmail(), generateRandomEmail()];

    // add the participants
    await testClient.study.recruitment.addMultipleByEmail({
      studyId: study.studyId.stringRepresentation,
      emails,
    });

    // query the participant
    const retrievedParticipants =
      await testClient.study.recruitment.getParticipants({
        studyId: study.studyId.stringRepresentation,
      });

    // map over the participants and make sure each of the emails we added is in there
    emails.forEach((email) => {
      const participant = retrievedParticipants
        .filter(
          (p: Participant) => p.accountIdentity instanceof EmailAccountIdentity,
        )
        .find((p: Participant) => {
          return (
            (p.accountIdentity as EmailAccountIdentity).emailAddress.address ===
            email
          );
        });
      expect(participant).toBeDefined();
    });
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
