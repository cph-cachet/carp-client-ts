import axios, { AxiosError, AxiosInstance } from "axios";
import { Config } from "@/config";
import { Accounts, Participation, Studies, Study } from "@/endpoints";
import { CarpServiceError, sanitizeRequestConfig } from "@/shared";
import Protocols from "@/endpoints/protocols";

export default class CarpClient {
  private instance: AxiosInstance;

  accounts: Accounts;

  studies: Studies;

  participation: Participation;

  study: Study;

  protocols: Protocols;

  public get getInstance(): AxiosInstance {
    return this.instance;
  }

  constructor(protected readonly config: Config) {
    if (!config.baseUrl) {
      throw new Error(
        "Could not parse the base URL. Make sure to configure CarpClient properly.",
      );
    }

    this.instance = axios.create({
      baseURL: config.baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.response.use(
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

    this.registerEndpoints();
  }

  setAuthToken(token: string): void {
    this.getInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  clearAuthToken(): void {
    delete this.getInstance.defaults.headers.common.Authorization;
  }

  registerEndpoints() {
    this.accounts = new Accounts(this);
    this.studies = new Studies(this);
    this.participation = new Participation(this);
    this.study = new Study(this);
    this.protocols = new Protocols(this);
  }
}
