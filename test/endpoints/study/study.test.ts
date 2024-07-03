import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { STUDY_PROTOCOL, STUDY_PROTOCOL_ID } from "test/consts";
import {
  setupTestClient,
  StudyDetails,
  UUID,
  CarpServiceError,
  StudyStatus,
  DefaultSerializer,
  getSerializer,
  StudyProtocolSnapshot,
} from "@/shared";
import { CarpTestClient } from "@/client";

describe("Study", () => {
  let testClient: CarpTestClient;
  let researcherAccountId: string;
  let study: StudyStatus;

  beforeAll(async () => {
    const { client, accountId } = await setupTestClient();
    testClient = client;
    researcherAccountId = accountId;

    study = await testClient.studies.create({
      name: "Test study",
      description: "This is a test study",
      ownerId: researcherAccountId,
    });
  });

  it("should be able to query study details", async () => {
    const retrievedStudy = await testClient.study.getDetails({
      studyId: study.studyId.stringRepresentation,
    });

    expect(retrievedStudy).toBeInstanceOf(StudyDetails);
    expect(retrievedStudy.name).toBe(study.name);
    expect(retrievedStudy.studyId.stringRepresentation).toBe(
      study.studyId.stringRepresentation,
    );
    expect(retrievedStudy.description).toBe("This is a test study");
  });

  it("querying study details for a study that does not exist should throw an error", async () => {
    try {
      await testClient.study.getDetails({
        studyId: UUID.Companion.randomUUID().stringRepresentation,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(CarpServiceError);
      expect((error as CarpServiceError).code).toBe(403);
    }
  });

  it("should be able to query study status by ID", async () => {
    const retrievedStudy = await testClient.study.getStatus({
      studyId: study.studyId.stringRepresentation,
    });

    expect(retrievedStudy).toBeInstanceOf(StudyStatus);
    expect(retrievedStudy.name).toBe(study.name);
    expect(retrievedStudy.studyId.stringRepresentation).toBe(
      study.studyId.stringRepresentation,
    );
  });

  it("querying study status for a study that does not exist should throw an error", async () => {
    try {
      await testClient.study.getStatus({
        studyId: UUID.Companion.randomUUID().stringRepresentation,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(CarpServiceError);
      expect((error as CarpServiceError).code).toBe(403);
    }
  });

  it("should be able to update the internal description of a study", async () => {
    const updatedStudy = await testClient.study.setDescription({
      studyId: study.studyId.stringRepresentation,
      studyName: "Updated test study",
      studyDescription: "This is an updated test study",
    });

    expect(updatedStudy).toBeInstanceOf(StudyStatus);
    expect(updatedStudy.name).toBe("Updated test study");

    const retrievedStudy = await testClient.study.getDetails({
      studyId: study.studyId.stringRepresentation,
    });

    expect(retrievedStudy).toBeInstanceOf(StudyDetails);
    expect(retrievedStudy.name).toBe("Updated test study");
    expect(retrievedStudy.description).toBe("This is an updated test study");
  });

  it("updating a study that does not exist should throw an error", async () => {
    try {
      await testClient.study.setDescription({
        studyId: UUID.Companion.randomUUID().stringRepresentation,
        studyName: "Updated test study",
        studyDescription: "This is an updated test study",
      });
    } catch (error) {
      expect(error).toBeInstanceOf(CarpServiceError);
      expect((error as CarpServiceError).code).toBe(403);
    }
  });

  it("should be able to set invitation", async () => {
    await testClient.study.setInvitation({
      studyId: study.studyId.stringRepresentation,
      title: "Invitation",
      description: "This is an invitation",
    });

    const retrievedStudy = await testClient.study.getDetails({
      studyId: study.studyId.stringRepresentation,
    });

    expect(retrievedStudy).toBeInstanceOf(StudyDetails);
    expect(retrievedStudy.invitation.name).toBe("Invitation");
    expect(retrievedStudy.invitation.description).toBe("This is an invitation");
  });

  it("setting invitation for a study that does not exist should throw an error", async () => {
    try {
      await testClient.study.setInvitation({
        studyId: UUID.Companion.randomUUID().stringRepresentation,
        title: "Invitation",
        description: "This is an invitation",
      });
    } catch (error) {
      expect(error).toBeInstanceOf(CarpServiceError);
      expect((error as CarpServiceError).code).toBe(403);
    }
  });

  it("should be able to set a protocol for a study", async () => {
    const studyBefore = await testClient.study.getDetails({
      studyId: study.studyId.stringRepresentation,
    });
    expect(studyBefore.protocolSnapshot).toBe(null);

    const json = DefaultSerializer;
    const serializer = getSerializer(StudyProtocolSnapshot);

    const protocol = json.decodeFromString(
      serializer,
      JSON.stringify(STUDY_PROTOCOL),
    ) as StudyProtocolSnapshot;

    await testClient.study.setProtocol({
      studyId: study.studyId.stringRepresentation,
      protocol,
    });

    const studyAfter = await testClient.study.getDetails({
      studyId: study.studyId.stringRepresentation,
    });

    expect(studyAfter).toBeInstanceOf(StudyDetails);
    expect(studyAfter.protocolSnapshot).not.toBe(null);
    expect(studyAfter.protocolSnapshot.id.stringRepresentation).toBe(
      STUDY_PROTOCOL_ID,
    );
  });

  it("should be able to add a researcher to a study", async () => {
    await expect(
      testClient.study.researchers.addResearcherToStudy({
        studyId: study.studyId.stringRepresentation,
        email: "researcher@cachet.dk",
      }),
    ).resolves.not.toThrow();
    const researchers = await testClient.study.researchers.getStudyResearchers({
      studyId: study.studyId.stringRepresentation,
    });

    expect(researchers).toBeInstanceOf(Array);
    const researcher = researchers.find(
      (r) => r.email === "researcher@cachet.dk",
    );
    expect(researcher).not.toBe(undefined);
  });

  it("should be able to remove a researcher from a study", async () => {
    await expect(
      testClient.study.researchers.removeResearcherFromStudy({
        studyId: study.studyId.stringRepresentation,
        email: "researcher@cachet.dk",
      }),
    ).resolves.not.toThrow();

    const researchers = await testClient.study.researchers.getStudyResearchers({
      studyId: study.studyId.stringRepresentation,
    });

    expect(researchers).toBeInstanceOf(Array);
    const researcher = researchers.find(
      (r) => r.email === "researcher@cachet.dk",
    );
    expect(researcher).toBe(undefined);
  });

  it("study should be able to go live", async () => {
    const studyBefore = await testClient.study.getStatus({
      studyId: study.studyId.stringRepresentation,
    });

    expect(studyBefore).toBeInstanceOf(StudyStatus.Configuring);

    await testClient.study.goLive({
      studyId: study.studyId.stringRepresentation,
    });

    const studyAfter = await testClient.study.getStatus({
      studyId: study.studyId.stringRepresentation,
    });

    expect(studyAfter).toBeInstanceOf(StudyStatus.Live);
  });

  afterAll(async () => {
    await testClient.study.delete({
      studyId: study.studyId.stringRepresentation,
    });
  });
});
