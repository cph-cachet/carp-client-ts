import { CarpTestClient } from "@/client";

const setupTestClient = async () => {
  const client = new CarpTestClient({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  });

  const token = await client.authentication.login({
    username: import.meta.env.VITE_RESEARCHER_EMAIL,
    password: import.meta.env.VITE_RESEARCHER_PASSWORD,
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
    grant_type: "password",
  });

  client.setAuthToken(token.access_token);

  const accountId = await client.authentication.getAccountId({
    token: token.access_token,
    client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
    client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
  });

  return { client, accountId };
};

export default setupTestClient;
