import { beforeAll, describe, expect, it } from "vitest";
import { STUDY_PROTOCOL } from "test/consts";
import { CarpTestClient } from "@/client";
import { setupTestClient } from "../utils";

describe("Protocols", () => {
  let testClient: CarpTestClient;
  let researcherAccountId: string;

  beforeAll(async () => {
    const { client, accountId } = await setupTestClient();
    testClient = client;
    researcherAccountId = accountId;

    await testClient.protocols.create({
      protocol: { ...STUDY_PROTOCOL, ownerId: researcherAccountId },
      versionTag: "1.0",
    });
  });

  it("should be able to query the added protocol", async () => {
    const protocols = await testClient.protocols.getAllProtocols({
      ownerId: researcherAccountId,
    });
    expect(protocols).toBeDefined();

    const foundProtocol = protocols.find(
      (protocol) => protocol.id.stringRepresentation === STUDY_PROTOCOL.id,
    );

    expect(foundProtocol).toBeDefined();
  });

  it("should be able to upload new version of the protocol", async () => {
    await testClient.protocols.update({
      protocol: { ...STUDY_PROTOCOL, ownerId: researcherAccountId },
      versionTag: "2.0",
    });

    await expect(
      testClient.protocols.getProtocolBy({
        protocolId: STUDY_PROTOCOL.id,
        versionTag: "2.0",
      }),
    ).resolves.toBeDefined();
  });
});
