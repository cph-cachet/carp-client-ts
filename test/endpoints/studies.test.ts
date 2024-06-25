import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { CarpTestClient } from "@/client";
import { StudyStatus, setupTestClient } from "@/shared";
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

  it("should get an overview of all studies", async () => {
    const studies = await researcherClient.studies.getOverview();

    expect(studies).toBeInstanceOf(Array);
    expect(studies).not.toHaveLength(0);
    expect(study && studies.map((s: StudyOverview) => s.studyId)).toContain(
      study.studyId.stringRepresentation,
    );
  });

  afterAll(async () => {
    if (study) {
      await researcherClient.study.delete({
        studyId: study.studyId.stringRepresentation,
      });
    }
  });
});
