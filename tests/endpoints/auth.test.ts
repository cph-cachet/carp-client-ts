import { CarpAuthClient } from "@/client/authClient"
import { CarpServiceError } from "@/shared/carpServiceError"

describe("Authentication service", () => {
  let authClient: CarpAuthClient

  beforeAll(() => {
    authClient = new CarpAuthClient({
      baseUrl: process.env.AUTH_BASE_URL,
    })
  })

  test("should authenticate user", async () => {
    const response = await authClient.authentication.login({
      username: process.env.RESEARCHER_EMAIL,
      password: process.env.RESEARCHER_PASSWORD,
      client_id: process.env.AUTH_CLIENT_ID,
      client_secret: process.env.AUTH_CLIENT_SECRET,
      grant_type: "password",
    })

    if (response instanceof Error) {
      throw response
    }

    expect(response.access_token).not.toBeUndefined()
  })

  test("should not authenticate user with an incorrect password", async () => {
    await authClient.authentication
      .login({
        username: process.env.RESEARCHER_EMAIL,
        password: "incorrect password",
        client_id: process.env.AUTH_CLIENT_ID,
        client_secret: process.env.AUTH_CLIENT_SECRET,
        grant_type: "password",
      })
      .catch((response) => {
        expect(response).toBeInstanceOf(CarpServiceError)
      })
  })
})
