import axios, { AxiosError } from "axios";
import { CarpClient } from "@/client";
import CarpServiceError from "../shared/carpServiceError";
import { sanitizeRequestConfig } from "@/shared";
import Actions from "./actions";

class Endpoint {
  protected readonly client: CarpClient;

  protected readonly actions: Actions;

  constructor(client: CarpClient) {
    this.client = client;
    this.actions = new Actions(client);

    this.client.getInstance.interceptors.response.use(
      (response) => response,
      (e) => {
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
}

export default Endpoint;
