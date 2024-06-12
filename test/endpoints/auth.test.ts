import { CarpAuthClient } from "@/client/authClient"
import { CarpServiceError } from "@/shared/carpServiceError"
import { describe, beforeAll, it, expect } from "vitest";

describe("Authentication service", () => {
  let authClient: CarpAuthClient

  beforeAll(() => {
    authClient = new CarpAuthClient({
      baseUrl: import.meta.env.VITE_AUTH_BASE_URL,
    })
  })

  it("should authenticate user", async () => {
    expect(await authClient.authentication.login({
      username: import.meta.env.VITE_RESEARCHER_EMAIL,
      password: import.meta.env.VITE_RESEARCHER_PASSWORD,
      client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
      client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
      grant_type: "password",
    })).not.toBeUndefined()
  })

  it("should not authenticate user with an incorrect password", async () => {
    await authClient.authentication
      .login({
        username: import.meta.env.VITE_RESEARCHER_EMAIL,
        password: "incorrect password",
        client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
        client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
        grant_type: "password",
      })
      .catch((response) => {
        expect(response instanceof CarpServiceError).toBeTruthy()
      })
  })
})
