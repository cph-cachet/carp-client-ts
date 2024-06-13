import { CarpClient } from "@/client/carpClient"
import { setupResearcherClient } from "@/shared/setupMethods"
import { describe, beforeAll, it, expect } from "vitest"

describe("Accounts service", () => {
  let researcherClient: CarpClient

  beforeAll(async () => {
    researcherClient = await setupResearcherClient()
  })

  it("Inviting a researcher should succeed", async () => {
    await researcherClient.accounts.invite({
      emailAddress: import.meta.env.VITE_PARTICIPANT_EMAIL,
      role: "RESEARCHER",
    })
  })
})
