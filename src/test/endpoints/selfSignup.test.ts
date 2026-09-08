import { afterAll, beforeAll, describe, expect, test } from "vitest";
import CarpTestClient from "../client/carpTestClient";
import { setupTestClient } from "@/test/utils";
import {
  CarpServiceError,
  DefaultSerializer,
  StudyProtocolSnapshot,
  StudyStatus,
  getSerializer,
} from "@/shared";
import { STUDY_PROTOCOL } from "@/test/consts";

describe("SelfSignup", () => {
  let testClient: CarpTestClient;
  // Signing up is public, so it must work without ever authenticating.
  let anonymousClient: CarpTestClient;
  let researcherAccountId: string;
  let study: StudyStatus;
  let studyId: string;
  let shortCode: string;

  const enableRequest = {
    participantRoleName: "Participant",
    clientId: "studies-app",
    redirectUri: "carp-studies:/callback",
    expirationSeconds: 3600,
  };

  beforeAll(async () => {
    const { client, accountId } = await setupTestClient();
    testClient = client;
    researcherAccountId = accountId;

    anonymousClient = new CarpTestClient({
      baseUrl: import.meta.env.VITE_API_BASE_URL,
    });

    study = await testClient.studies.create({
      name: "Test study",
      description: "This is a test study",
      ownerId: researcherAccountId,
    });
    studyId = study.studyId.stringRepresentation;

    await testClient.study.setInvitation({
      studyId,
      title: "Test invitation",
      description: "This is a test invitation",
    });

    const serializer = getSerializer(StudyProtocolSnapshot);
    const protocol = DefaultSerializer.decodeFromString(
      serializer,
      JSON.stringify(STUDY_PROTOCOL),
    ) as StudyProtocolSnapshot;

    await testClient.study.setProtocol({ studyId, protocol });

    // self-signup requires a live study
    await testClient.study.goLive({ studyId });

    // HACK: sleep for a while to allow the study to be marked ready for deployment
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
  }, 40000);

  test("config is null before self-signup has ever been enabled", async () => {
    await expect(
      testClient.study.selfSignup.getConfig({ studyId }),
    ).resolves.toBeNull();
  });

  test("should be able to enable self-signup", async () => {
    const config = await testClient.study.selfSignup.enable({
      studyId,
      ...enableRequest,
      maxParticipants: 1,
    });

    expect(config.shortCode).toBeDefined();
    expect(config.enabled).toBe(true);
    expect(config.participantRoleName).toBe("Participant");
    expect(config.maxParticipants).toBe(1);
    expect(config.currentParticipantCount).toBe(0);

    shortCode = config.shortCode;
  });

  test("should be able to get the config of an enabled study", async () => {
    const config = await testClient.study.selfSignup.getConfig({ studyId });

    expect(config.shortCode).toBe(shortCode);
    expect(config.enabled).toBe(true);
  });

  test("should be able to sign up with a short code without authenticating", async () => {
    const result = await anonymousClient.selfSignup.signUp({ shortCode });

    expect(result.magicLink).toBeDefined();

    const config = await testClient.study.selfSignup.getConfig({ studyId });
    expect(config.currentParticipantCount).toBe(1);
  });

  test("signing up past maxParticipants should throw a conflict", async () => {
    expect.assertions(2);
    try {
      await anonymousClient.selfSignup.signUp({ shortCode });
    } catch (error) {
      expect(error).toBeInstanceOf(CarpServiceError);
      expect((error as CarpServiceError).code).toBe(409);
    }
  });

  test("signing up with an unknown short code should throw a not found", async () => {
    expect.assertions(2);
    try {
      await anonymousClient.selfSignup.signUp({ shortCode: "unknown-code" });
    } catch (error) {
      expect(error).toBeInstanceOf(CarpServiceError);
      expect((error as CarpServiceError).code).toBe(404);
    }
  });

  test("reconfiguring keeps the short code and the participant count", async () => {
    const config = await testClient.study.selfSignup.enable({
      studyId,
      ...enableRequest,
      maxParticipants: 5,
    });

    expect(config.shortCode).toBe(shortCode);
    expect(config.maxParticipants).toBe(5);
    expect(config.currentParticipantCount).toBe(1);
  });

  test("ending self-signup keeps the short code but disables signing up", async () => {
    const config = await testClient.study.selfSignup.end({ studyId });

    expect(config.shortCode).toBe(shortCode);
    expect(config.enabled).toBe(false);

    expect.assertions(4);
    try {
      await anonymousClient.selfSignup.signUp({ shortCode });
    } catch (error) {
      expect(error).toBeInstanceOf(CarpServiceError);
      expect((error as CarpServiceError).code).toBe(409);
    }
  });

  afterAll(async () => {
    if (study) {
      await testClient.study.delete({ studyId });
    }
  });
});
