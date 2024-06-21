import axios, { AxiosInstance } from "axios";
import { Config } from "@/config";
import { Accounts, Studies } from "@/endpoints";

export default class CarpClient {
  private instance: AxiosInstance;

  accounts: Accounts;

  studies: Studies;

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
  }
}
