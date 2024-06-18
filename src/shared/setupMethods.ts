import { CarpAuthClient } from "@/client/authClient"
import { CarpClient } from "@/client/carpClient"

export const setupResearcherClient = async () => {
  const authClient = new CarpAuthClient({
    baseUrl: import.meta.env.VITE_AUTH_BASE_URL,
  })

  const token = await authClient.authentication.login({
    username: import.meta.env.VITE_RESEARCHER_EMAIL,
    password: import.meta.env.VITE_RESEARCHER_PASSWORD,
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
    grant_type: "password",
  })

  if (token instanceof Error) {
    return
  }

  const carpClient = new CarpClient({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  })
  carpClient.setAuthToken(token.access_token)

  const accountId = await authClient.authentication.getAccountId({
    token: token.access_token,
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
    clientSecret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
  })

  return { carpClient, accountId }
}
