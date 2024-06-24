import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";
import { CarpAuthClient } from "@/client";
import { CarpToken } from "@/endpoints/auth";
import { CarpServiceError } from "@/shared";

describe("Authentication service", () => {
  let authClient: CarpAuthClient;

  beforeAll(() => {
    authClient = new CarpAuthClient({
      baseUrl: "/authProxy",
    });
  });

  it("should authenticate user", async () => {
    const response = await authClient.authentication.login({
      username: import.meta.env.VITE_RESEARCHER_EMAIL,
      password: import.meta.env.VITE_RESEARCHER_PASSWORD,
      client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
      client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
      grant_type: "password",
    });

    expectTypeOf(response).toEqualTypeOf<CarpToken>();
  });

  it("should not authenticate user with an incorrect password", async () => {
    await expect(
      authClient.authentication.login({
        username: import.meta.env.VITE_RESEARCHER_EMAIL,
        password: "incorrect password",
        client_id: import.meta.env.VITE_AUTH_CLIENT_ID,
        client_secret: import.meta.env.VITE_AUTH_CLIENT_SECRET,
        grant_type: "password",
      }),
    ).rejects.toThrowError(CarpServiceError);
  });
});
