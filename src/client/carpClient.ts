import axios, { AxiosInstance } from "axios"
import { Config } from "@/config"
import { Accounts, Studies } from "@/endpoints"

export class CarpClient {
  private _instance: AxiosInstance
  accounts: Accounts
  studies: Studies

  public get instance(): AxiosInstance {
    return this._instance
  }

  constructor(protected readonly config: Config) {
    if (!config.baseUrl) {
      throw new Error(
        "Could not parse the base URL. Make sure to configure CarpClient properly."
      )
    }

    this._instance = axios.create({
      baseURL: config.baseUrl,
    })

    this.registerEndpoints()
  }

  setAuthToken(token: string): void {
    this.instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
  }

  clearAuthToken(): void {
    delete this.instance.defaults.headers.common["Authorization"]
  }

  registerEndpoints() {
    this.accounts = new Accounts(this)
    this.studies = new Studies(this)
  }
}
