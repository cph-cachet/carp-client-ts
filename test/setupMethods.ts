import { CarpTestClient } from "@/client";

const setupTestClient = async () => {
  const carpClient = new CarpTestClient({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  });

  const token = await carpClient.authentication.login({
    username: import.meta.env.VITE_RESEARCHER_EMAIL,
    password: import.meta.env.VITE_RESEARCHER_PASSWORD,
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
    grant_type: "password",
  });

  carpClient.setAuthToken(token.access_token);

  const accountId = await carpClient.authentication.getAccountId({
    token: token.access_token,
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
  });

  return { carpClient, accountId };
};

export default setupTestClient;
