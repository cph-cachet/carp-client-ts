import { AxiosError } from "axios"

export class CarpServiceError extends Error {
  public readonly code: number
  public readonly data: { [key: string]: string }

  constructor(error: AxiosError) {
    super(
      `[${error.response?.status}] ${error.message}: ${JSON.stringify(
        error.response?.data,
        null,
        2
      )}`
    )
    this.code = error.response?.status || 500
    this.data = error.response?.data as { [key: string]: string }
    if (error.stack) {
      this.stack = error.stack // Preserve original stack trace
    }
    Object.setPrototypeOf(this, CarpServiceError.prototype)
  }
}
