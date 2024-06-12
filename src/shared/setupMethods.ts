import { CarpAuthClient } from "@/client/authClient"
import { CarpClient } from "@/client/carpClient"

export const setupResearcherClient = async () => {
  const authClient = new CarpAuthClient({
    baseUrl: process.env.AUTH_BASE_URL,
  })

  const token = await authClient.authentication.login({
    username: process.env.RESEARCHER_EMAIL,
    password: process.env.RESEARCHER_PASSWORD,
    client_id: process.env.AUTH_CLIENT_ID,
    client_secret: process.env.AUTH_CLIENT_SECRET,
    grant_type: "password",
  })

  if (token instanceof Error) {
    return
  }

  const carpClient = new CarpClient({
    baseUrl: process.env.API_BASE_URL,
  })
  carpClient.setAuthToken(token.access_token)

  return carpClient
}
