import { beforeAll, describe, expect, it } from "vitest";
import { setupTestClient } from "@/test/utils";
import { CarpClient } from "@/client";

describe("Accounts service", () => {
  let testClient: CarpClient;

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
    expect(redirectURIs.data.length).not.be.equal(0);
    expect(redirectURIs.data).contains("https://dev.carp.dk/icat*");
  });

  // TODO: stop skipping when backend support works again
  it.todo(
    "Checking if a researcher account is a researcher should return true",
    async () => {
      await expect(
        testClient.accounts.isAccountOfRole({
          role: "RESEARCHER",
          emailAddress: import.meta.env.VITE_RESEARCHER_EMAIL,
        }),
      ).resolves.toBeTruthy();
    },
  );

  // TODO: fix when backend support works again
  it.todo(
    "Checking if a participant account is a researcher should return false",
    async () => {
      await expect(
        testClient.accounts.isAccountOfRole({
          role: "RESEARCHER",
          emailAddress: import.meta.env.VITE_PARTICIPANT_EMAIL,
        }),
      ).resolves.toBeFalsy();
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
