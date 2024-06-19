import RequestConfig from "@/requestConfig"
import { CarpClient } from "@/client/carpClient"
import axios, {
  AxiosError,
  AxiosRequestConfig,
  Axios,
  AxiosResponse,
} from "axios"
import { CarpServiceError } from "./carpServiceError"

export class Endpoint {
  protected readonly _client: CarpClient
  get: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T, Error>>
  post: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T, Error>>
  put: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T, Error>>
  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T, Error>>

  constructor(client: CarpClient) {
    this._client = client
    this.get = this._client.instance.get // Assign the 'get' property
    this.post = this._client.instance.post // Assign the 'post' property
    this.put = this._client.instance.put // Assign the 'put' property
    this.delete = this._client.instance.delete // Assign the 'delete' property

    this._client.instance.interceptors.response.use(
      (response) => response,
      (error) => this.handleErrorResponse(error)
    )
  }

  private handleErrorResponse(e: Error) {
    if (axios.isAxiosError(e)) {
      const axiosError = e as AxiosError
      let sanitizedConfig = ""
      if (axiosError.response?.config) {
        sanitizedConfig = `\nRequest Config: ${JSON.stringify(
          this.sanitizeRequestConfig(axiosError.response.config),
          null,
          2
        )}`
      }
      console.error(
        `[${axiosError.response?.status}] ${
          axiosError.message
        }: ${JSON.stringify(
          axiosError.response?.data,
          null,
          2
        )}${sanitizedConfig}`
      )
      return Promise.reject(new CarpServiceError(axiosError)) // Wrap and re-throw the error
    } else {
      return Promise.reject(e)
    }
  }

  private sanitizeRequestConfig(config: AxiosRequestConfig) {
    const sanitizedConfig = {
      headers: config.headers,
      method: config.method,
      url: config.url,
      data: config.data,
    }

    if (sanitizedConfig.data) {
      try {
        const data = JSON.parse(sanitizedConfig.data)
        if (data.password) data.password = "REDACTED"
        if (data.client_secret) data.client_secret = "REDACTED"

        sanitizedConfig.data = JSON.stringify(data)
      } catch (e) {
        let data = sanitizedConfig.data
        data = new URLSearchParams(sanitizedConfig.data)
        if (data.has("password")) data.set("password", "REDACTED")
        if (data.has("client_secret")) data.set("client_secret", "REDACTED")

        sanitizedConfig.data = data
      }
    }

    if (sanitizedConfig.headers) {
      delete sanitizedConfig.headers.Authorization
    }

    return sanitizedConfig
  }
}
