import { beforeAll, describe, expect, test } from "vitest";
import { CarpTestClient } from "@/client";
import { generateRandomEmail, setupTestClient } from "@/test/utils";

describe("Email", () => {
  let testClient: CarpTestClient;

  beforeAll(async () => {
    const { client } = await setupTestClient();
    testClient = client;
  });

  test("should send an email", async () => {
    await expect(
      testClient.email.sendEmail({
        recipient: generateRandomEmail(),
        subject: "Test email",
        message: "This is a test email",
        cc: [generateRandomEmail()],
      }),
    ).resolves.not.toThrow();
  });

  test("should throw on missing recipient", async () => {
    await expect(
      testClient.email.sendEmail({
        recipient: null,
        subject: "Test email",
        message: "This is a test email",
        cc: [generateRandomEmail()],
      }),
    ).rejects.toThrow();
  });
});
