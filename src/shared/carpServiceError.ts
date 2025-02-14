import { AxiosError, InternalAxiosRequestConfig } from "axios";

class CarpServiceError extends Error {
  public readonly code: number;

  public readonly data: { [key: string]: string };

  public readonly config: InternalAxiosRequestConfig;

  constructor(error: AxiosError) {
    super(
      `[${error.code}] ${error.message}: ${JSON.stringify(
        error.response?.data,
        null,
        2,
      )}`,
    );
    this.code = error.response?.status || 500;
    this.data = error.response?.data as { [key: string]: string };
    this.config = error.config;
    if (error.stack) {
      this.stack = error.stack;
    }
    Object.setPrototypeOf(this, CarpServiceError.prototype);
  }
}

export default CarpServiceError;
