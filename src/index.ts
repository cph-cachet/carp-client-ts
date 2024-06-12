// import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
//
// class APIClient {
//   private baseURL: string
//   private headers: AxiosRequestConfig
//   private axiosInstance: AxiosInstance
//   private configured: boolean = false
//
//   constructor(baseURL: string) {
//     this.baseURL = baseURL
//   }
//
//   configure(headers: AxiosRequestConfig) {
//     this.headers = {
//       ...headers,
//       baseURL: this.baseURL,
//     }
//     this.axiosInstance = axios.create(this.headers)
//     this.configured = true
//   }
//
//   // get<ResponseType>(path: string): Promise<ResponseType> {
//   //   if (!this.configured) throw Error("APIClient not configured")
//   //
//   //   return this.axiosInstance.get(path)
//   // }
//   //
//   // put<ResponseType, BodyType>(
//   //   path: string,
//   //   { body }: { body?: BodyType }
//   // ): Promise<ResponseType> {
//   //   if (!this.configured) throw Error("APIClient not configured")
//   //
//   //   return this.axiosInstance.put(path, body)
//   // }
//   //
//   // delete<ResponseType>(path: string): Promise<ResponseType> {
//   //   if (!this.configured) throw Error("APIClient not configured")
//   //
//   //   return this.axiosInstance.delete(path)
//   // }
//   //
//   // post<ResponseType, BodyType>(
//   //   path: string,
//   //   { body }: { body: BodyType }
//   // ): Promise<ResponseType> {
//   //   if (!this.configured) throw Error("APIClient not configured")
//   //
//   //   return this.axiosInstance.post(path, body)
//   // }
// }
//
// export default APIClient

export * from './requestConfig'
export * from './client'
