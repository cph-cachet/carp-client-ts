import { beforeAll, describe, expect, it } from "vitest";
import CarpTestClient from "../client/carpTestClient";
import { setupTestClient } from "@/test/utils";

describe("Accounts service", () => {
  let testClient: CarpTestClient;

  beforeAll(async () => {
    const { client } = await setupTestClient();
    testClient = client;
  });

  it("Inviting a researcher should succeed", async () => {
    await testClient.accounts.invite({
      emailAddress: import.meta.env.VITE_PARTICIPANT_EMAIL,
      role: "RESEARCHER",
    });
  });

  it("Should get redirect URIs", async () => {
    const redirectURIs = await testClient.accounts.getRedirectURIs();
    expect(Object.keys(redirectURIs.data)).contains("studies-app");
    expect(redirectURIs.data["studies-app"]).contains("carp-studies:/*");
  });

  // TODO: stop skipping when backend support works again
  it.todo(
    "Checking if a researcher account is a researcher should return true",
    async () => {
      const response = await testClient.accounts.isAccountOfRole({
        role: "RESEARCHER",
        emailAddress: import.meta.env.VITE_RESEARCHER_EMAIL,
      });
      expect(response.data).toBe(true);
    },
  );

  // TODO: fix when backend support works again
  it.todo(
    "Checking if a participant account is a researcher should return false",
    async () => {
      const response = await testClient.accounts.isAccountOfRole({
        role: "RESEARCHER",
        emailAddress: import.meta.env.VITE_PARTICIPANT_EMAIL,
      });
      expect(response.data).toBe(false);
    },
  );

  // TODO: fix when backend support works again
  it.todo(
    "Checking if a non-existent account is a researcher should throw an error",
    async () => {
      await expect(
        testClient.accounts.isAccountOfRole({
          role: "RESEARCHER",
          emailAddress: "random@random.com",
        }),
      ).rejects.toThrow();
    },
  );
});
