import { jwtDecode } from "jwt-decode";
import { User } from "./models";
import { UUID } from "./coreTypes";

interface UserJwtTokenDecoded {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  email: string;
  email_verified: boolean;
  realm_access: { roles: string[] };
}

export const sanitizeRequestConfig = (config: any) => {
  const sanitizedConfig = {
    headers: config.headers,
    method: config.method,
    url: config.url,
    data: config.data,
  };

  if (sanitizedConfig.data) {
    try {
      const data = JSON.parse(sanitizedConfig.data);
      if (data.password) data.password = "REDACTED";
      if (data.client_secret) data.client_secret = "REDACTED";

      sanitizedConfig.data = JSON.stringify(data);
    } catch (e) {
      let { data } = sanitizedConfig;
      data = new URLSearchParams(sanitizedConfig.data);
      if (data.has("password")) data.set("password", "REDACTED");
      if (data.has("client_secret")) data.set("client_secret", "REDACTED");

      sanitizedConfig.data = data;
    }
  }

  if (sanitizedConfig.headers) {
    delete sanitizedConfig.headers.Authorization;
  }

  return sanitizedConfig;
};

export const parseUser = (accessToken: string): User => {
  const userDecoded: UserJwtTokenDecoded = jwtDecode(accessToken);
  let role;
  if (userDecoded.realm_access.roles.includes("system_admin")) {
    role = "SYSTEM_ADMIN";
  } else if (userDecoded.realm_access.roles.includes("carp_admin")) {
    role = "CARP_ADMIN";
  } else if (userDecoded.realm_access.roles.includes("researcher")) {
    role = "RESEARCHER";
  } else if (userDecoded.realm_access.roles.includes("participant")) {
    role = "PARTICIPANT";
  } else {
    role = "UNKNOWN";
  }
  return {
    id: userDecoded.sub,
    email: userDecoded.email,
    firstName: userDecoded.given_name,
    lastName: userDecoded.family_name,
    isActivated: userDecoded.email_verified,
    accountId: new UUID(userDecoded.sub),
    role: [role],
  };
};

export const objectKeysFromSnakeToCamel = (
  obj: Record<string, any>,
): Record<string, any> =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      const parts = key.split("_");
      const camelKey =
        parts[0] +
        parts
          .slice(1)
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join("");
      return [camelKey, value];
    }),
  );
