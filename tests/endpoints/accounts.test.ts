import { CarpClient } from "@/client/carpClient"
import { setupResearcherClient } from "@/shared/setupMethods"

describe("Accounts service", () => {
  let researcherClient: CarpClient;

  beforeAll(async () => {
    researcherClient = await setupResearcherClient();
  })

  test("Inviting a researcher should succeed", async () => {
    const result = researcherClient.accounts.invite({
      emailAddress: process.env.PARTICIPANT_EMAIL,
      role: "RESEARCHER",
    });

    expect(result).resolves.toBeUndefined();
  })
})
