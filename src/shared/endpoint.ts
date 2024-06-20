import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { CarpClient } from "@/client";
import CarpServiceError from "./carpServiceError";
import sanitizeRequestConfig from "./utils";

class Endpoint {
  protected readonly client: CarpClient;

  get: <T>(
    url: string,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T, Error>>;

  post: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T, Error>>;

  put: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T, Error>>;

  delete: <T>(
    url: string,
    config?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T, Error>>;

  constructor(client: CarpClient) {
    this.client = client;
    this.get = this.client.getInstance.get; // Assign the 'get' property
    this.post = this.client.getInstance.post; // Assign the 'post' property
    this.put = this.client.getInstance.put; // Assign the 'put' property
    this.delete = this.client.getInstance.delete; // Assign the 'delete' property

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
