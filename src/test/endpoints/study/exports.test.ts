import { afterAll, beforeAll, describe, expect, test } from "vitest";
import { CarpTestClient } from "@/client";
import { setupTestClient } from "@/test/utils";
import {
  StudyStatus,
  getSerializer,
  StudyProtocolSnapshot,
  DefaultSerializer,
  ParticipantGroupStatus,
} from "@/shared";
import { STUDY_PROTOCOL } from "@/test/consts";

describe("Exports", () => {
  let testClient: CarpTestClient;
  let researcherAccountId: string;
  let study: StudyStatus;
  let deployment: ParticipantGroupStatus;

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
    deployment = await testClient.study.recruitment.inviteNewParticipantGroup({
      studyId: study.studyId.stringRepresentation,
      participantsWithRoles: participants.map((p) => ({
        id: p.id.stringRepresentation,
        assignedRoles: ["Participant"],
      })),
    });

    await testClient.authentication.refresh();
  }, 15000);

  test("should be able to get empty list of exports", async () => {
    await expect(
      testClient.study.exports.getAll({
        studyId: study.studyId.stringRepresentation,
      }),
    ).resolves.toHaveLength(0);
  });

  test("should be able to create export", async () => {
    const response = await testClient.study.exports.create({
      studyId: study.studyId.stringRepresentation,
      deploymentIds: [],
    });
    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
    expect(response.study_id).toBe(study.studyId.stringRepresentation);
    expect(response.type).toBe("STUDY_DATA");
  });

  test("should be able to get export", async () => {
    await expect(
      testClient.study.exports.getAll({
        studyId: study.studyId.stringRepresentation,
      }),
    ).resolves.toHaveLength(1);
  });

  test("should be able to create export for deployment", async () => {
    const response = await testClient.study.exports.create({
      studyId: study.studyId.stringRepresentation,
      deploymentIds: [deployment.id.stringRepresentation],
    });
    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
    expect(response.study_id).toBe(study.studyId.stringRepresentation);
    expect(response.type).toBe("DEPLOYMENT_DATA");
  });

  test("export can be downloaded", async () => {
    await testClient.study.exports.create({
      studyId: study.studyId.stringRepresentation,
      deploymentIds: [],
    });
    const exports = await testClient.study.exports.getAll({
      studyId: study.studyId.stringRepresentation,
    });
    const downloadedExport = await testClient.study.exports.download({
      studyId: study.studyId.stringRepresentation,
      exportId: exports[0].id,
    });
    expect(downloadedExport).toBeDefined();
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
