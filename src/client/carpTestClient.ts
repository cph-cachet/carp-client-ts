import axios, { AxiosError } from "axios";
import { Config } from "@/config";
import { Auth } from "@/endpoints";
import CarpClient from "./carpClient";
import { CarpToken } from "@/endpoints/auth";
import { sanitizeRequestConfig, CarpServiceError } from "@/shared";

/*
 * CarpTestClient is a specialized CarpClient that includes the Auth endpoint.
 * It is used to authenticate with the CARP server.
 * This is for internal use only, for the tests.
 * @internal
 */
export default class CarpTestClient extends CarpClient {
  public authentication: Auth;

  private token: CarpToken;

  public get getInternalToken(): CarpToken {
    return this.token;
  }

  public setInternalToken(token: CarpToken): void {
    this.token = token;
  }

  constructor(protected readonly config: Config) {
    super(config);
    this.registerEndpoints();

    this.getInstance.interceptors.response.use(
      (response) => response,
      (e) => {
        if (e.code === 403) {
          const maxRetries = 3;
          let retryCount = 0;

          const retryRequest = async () => {
            try {
              await this.authentication.refresh();
              const updatedConfig = e.config;
              updatedConfig.headers = {
                ...updatedConfig.headers,
                Authorization: `Bearer ${this.getInternalToken.access_token}`,
              };
              return await this.getInstance.request(updatedConfig);
            } catch (error) {
              if (retryCount < maxRetries) {
                retryCount += 1;
                return retryRequest();
              }
              throw error;
            }
          };

          return retryRequest();
        }
        if (axios.isAxiosError(e)) {
          const axiosError = e as AxiosError;
          let sanitizedConfig = "";
          if (axiosError.response?.config) {
            sanitizedConfig = `\nRequest Config: ${JSON.stringify(
              sanitizeRequestConfig(axiosError.response.config),
              null,
              2,
            )}`;
          }

          // eslint-disable-next-line no-console
          console.error(
            `[${axiosError.response?.status}] ${
              axiosError.message
            }: ${JSON.stringify(
              axiosError.response?.data,
              null,
              2,
            )}${sanitizedConfig}`,
          );
          return Promise.reject(new CarpServiceError(axiosError)); // Wrap and re-throw the error
        }
        return Promise.reject(e);
      },
    );
  }

  registerEndpoints(): void {
    super.registerEndpoints();
    this.authentication = new Auth(this);
  }
}
