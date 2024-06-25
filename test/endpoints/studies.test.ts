import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { CarpTestClient } from "@/client";
import { StudyDetails, StudyStatus, setupTestClient } from "@/shared";
import { StudyOverview } from "@/shared/models";

describe("Studies service", () => {
  let researcherClient: CarpTestClient;
  let researcherAccountId: string;

  let study: StudyStatus;

  beforeAll(async () => {
    const { carpClient, accountId } = await setupTestClient();
    researcherClient = carpClient;
    researcherAccountId = accountId;
  });

  it("should create a study", async () => {
    study = await researcherClient.studies.create({
      name: "Test study",
      description: "This is a test study",
      ownerId: researcherAccountId,
    });

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

  afterAll(async () => {
    if (study) {
      await researcherClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
