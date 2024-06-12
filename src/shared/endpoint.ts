import RequestConfig from "@/requestConfig"
import { CarpClient } from "@/client/carpClient"
import { AxiosError, AxiosRequestConfig } from "axios"
import { CarpServiceError } from "./carpServiceError"

export class Endpoint {
  protected readonly _client: CarpClient

  constructor(client: CarpClient) {
    this._client = client
  }

  private async sendRequest<T>(
    requestConfig: RequestConfig
  ): Promise<T | Error> {
    try {
      const response = await this._client.instance.request<T>(requestConfig)

      return response.data as T
    } catch (e: any) {
      if (e instanceof AxiosError) {
        this.handleErrorResponse(e, requestConfig)
      } else {
        throw e // Re-throw non-Axios errors directly
      }
    }
  }

  protected async get<T>(
    url: string,
    params?: any,
    headers?: any
  ): Promise<T | Error> {
    const requestConfig: RequestConfig = {
      method: "GET",
      url: url,
      params: params,
      headers: headers,
    }
    return this.sendRequest<T>(requestConfig)
  }

  protected async post<T>(
    url: string,
    data?: any,
    headers: any = { "Content-Type": "application/json" }
  ): Promise<T | Error> {
    const requestConfig: RequestConfig = {
      method: "POST",
      url: url,
      data: data,
      headers: headers,
    }
    return this.sendRequest<T>(requestConfig)
  }

  protected put<T>(url: string, data?: any, headers?: any): Promise<T | Error> {
    const requestConfig: RequestConfig = {
      method: "PUT",
      url: url,
      data: data,
      headers: headers,
    }
    return this.sendRequest<T>(requestConfig)
  }

  protected async delete<T>(url: string, headers?: any): Promise<T | Error> {
    const requestConfig: RequestConfig = {
      method: "DELETE",
      url: url,
      headers: headers,
    }
    return this.sendRequest<T>(requestConfig)
  }

  private handleErrorResponse(
    e: AxiosError,
    requestConfig: AxiosRequestConfig
  ) {
    const axiosError = e as AxiosError
    const sanitizedConfig = this.sanitizeRequestConfig(requestConfig)
    console.error(
      `[${e.response?.status}] ${e.message}: ${JSON.stringify(
        e.response?.data,
        null,
        2
      )}\nRequest Config: ${JSON.stringify(sanitizedConfig, null, 2)}`
    )
    throw new CarpServiceError(axiosError) // Wrap and re-throw the error
  }

  private sanitizeRequestConfig(config: AxiosRequestConfig) {
    const sanitizedConfig = { ...config }
    if (sanitizedConfig.data) {
      const data = new URLSearchParams(sanitizedConfig.data)
      if (data.has("password")) data.set("password", "REDACTED")
      if (data.has("client_secret")) data.set("client_secret", "REDACTED")
      sanitizedConfig.data = data.toString()
    }

    if (sanitizedConfig.headers) {
      delete sanitizedConfig.headers
    }

    return sanitizedConfig
  }
}
