import { AxiosRequestConfig, AxiosResponse } from "axios";
import { CarpClient } from "@/client";

class Actions {
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
  }
}

export default Actions;
