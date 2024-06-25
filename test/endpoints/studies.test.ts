import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { CarpTestClient } from "@/client";
import {
  CarpServiceError,
  StudyDetails,
  StudyStatus,
  UUID,
  setupTestClient,
} from "@/shared";
import { StudyOverview } from "@/shared/models";

describe("Studies service", () => {
  let researcherClient: CarpTestClient;
  let researcherAccountId: string;

  let study: StudyStatus;

  beforeAll(async () => {
    const { carpClient, accountId } = await setupTestClient();
    researcherClient = carpClient;
    researcherAccountId = accountId;

    study = await researcherClient.studies.create({
      name: "Test study",
      description: "This is a test study",
      ownerId: researcherAccountId,
    });
  });

  it("should create a study", async () => {
    expect(study).toBeInstanceOf(StudyStatus);
    expect(study.name).toBe("Test study");
  });

  it("study overview should contain the new study", async () => {
    const studies = await researcherClient.studies.getOverview();

    expect(studies).toBeInstanceOf(Array);
    expect(studies).not.toHaveLength(0);
    expect(study && studies.map((s: StudyOverview) => s.studyId)).toContain(
      study.studyId.stringRepresentation,
    );
  });

  it("should be able to query study details", async () => {
    const retrievedStudy = await researcherClient.study.getDetails({
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
      await researcherClient.study.getDetails({
        studyId: UUID.Companion.randomUUID().stringRepresentation,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(CarpServiceError);
      expect((error as CarpServiceError).code).toBe(403);
    }
  });

  it("should be able to query study status by ID", async () => {
    const retrievedStudy = await researcherClient.study.getStatus({
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
      await researcherClient.study.getStatus({
        studyId: UUID.Companion.randomUUID().stringRepresentation,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(CarpServiceError);
      expect((error as CarpServiceError).code).toBe(403);
    }
  });

  it("should be able to update the internal description of a study", async () => {
    const updatedStudy = await researcherClient.study.setDescription({
      studyId: study.studyId.stringRepresentation,
      studyName: "Updated test study",
      studyDescription: "This is an updated test study",
    });

    expect(updatedStudy).toBeInstanceOf(StudyStatus);
    expect(updatedStudy.name).toBe("Updated test study");

    const retrievedStudy = await researcherClient.study.getDetails({
      studyId: study.studyId.stringRepresentation,
    });

    expect(retrievedStudy).toBeInstanceOf(StudyDetails);
    expect(retrievedStudy.name).toBe("Updated test study");
    expect(retrievedStudy.description).toBe("This is an updated test study");
  });

  it("updating a study that does not exist should throw an error", async () => {
    try {
      await researcherClient.study.setDescription({
        studyId: UUID.Companion.randomUUID().stringRepresentation,
        studyName: "Updated test study",
        studyDescription: "This is an updated test study",
      });
    } catch (error) {
      expect(error).toBeInstanceOf(CarpServiceError);
      expect((error as CarpServiceError).code).toBe(403);
    }
  });

  afterAll(async () => {
    if (study) {
      await researcherClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
