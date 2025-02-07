import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { CarpTestClient } from "@/client";
import { setupTestClient } from "@/test/utils";
import {
  StudyStatus,
  getSerializer,
  StudyProtocolSnapshot,
  DefaultSerializer,
} from "@/shared";
import { STUDY_PROTOCOL } from "@/test/consts";

describe("Files", () => {
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

    const emails = [import.meta.env.VITE_RESEARCHER_EMAIL];

    // add the participants
    await testClient.study.recruitment.addMultipleByEmail({
      studyId: study.studyId.stringRepresentation,
      emails,
    });

    // query the participant
    const participants = await testClient.study.recruitment.getParticipants({
      studyId: study.studyId.stringRepresentation,
    });

    // invite the participants
    await testClient.study.recruitment.inviteNewParticipantGroup({
      studyId: study.studyId.stringRepresentation,
      participantsWithRoles: participants.map((p) => ({
        id: p.id.stringRepresentation,
        assignedRoles: ["Participant"],
      })),
    });

    await new Promise((resolve) => {
      setTimeout(resolve, 10000);
    });
    await testClient.authentication.refresh();
  }, 15000);

  test("should be able to get empty list of files", async () => {
    await expect(
      testClient.study.files.getFiles({
        studyId: study.studyId.stringRepresentation,
      }),
    ).resolves.toHaveLength(0);
  });

  test("should upload file", async () => {
    const formData = new FormData();
    const metadata = {
      file_type: "text/plain",
      file_name: "test.txt",
    };
    formData.append("file", new Blob(["test file"], { type: "text/plain" }));
    formData.append("metadata", JSON.stringify(metadata));

    const response = await testClient.study.files.createFile({
      studyId: study.studyId.stringRepresentation,
      formData,
    });
    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
    expect(response.metadata).toEqual(metadata);
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
