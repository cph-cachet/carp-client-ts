import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { setupTestClient } from "@/test/utils";
import { CarpTestClient } from "@/client";
import { StudyStatus } from "@/shared";
import { StudyOverview } from "@/shared/models";

describe("Studies service", () => {
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

  it("should create a study", async () => {
    expect(study).toBeInstanceOf(StudyStatus);
    expect(study.name).toBe("Test study");
  });

  it("study overview should contain the new study", async () => {
    const studies = await testClient.studies.getOverview();

    expect(studies).toBeInstanceOf(Array);
    expect(studies).not.toHaveLength(0);
    expect(study && studies.map((s: StudyOverview) => s.studyId)).toContain(
      study.studyId.stringRepresentation,
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
