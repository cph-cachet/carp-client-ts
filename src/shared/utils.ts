import { AxiosRequestConfig } from "axios";

const sanitizeRequestConfig = (config: AxiosRequestConfig) => {
  const sanitizedConfig = {
    headers: config.headers,
    method: config.method,
    url: config.url,
    data: config.data,
  };

  if (sanitizedConfig.data) {
    try {
      const data = JSON.parse(sanitizedConfig.data);
      if (data.password) data.password = "REDACTED";
      if (data.client_secret) data.client_secret = "REDACTED";

      sanitizedConfig.data = JSON.stringify(data);
    } catch (e) {
      let { data } = sanitizedConfig;
      data = new URLSearchParams(sanitizedConfig.data);
      if (data.has("password")) data.set("password", "REDACTED");
      if (data.has("client_secret")) data.set("client_secret", "REDACTED");

      sanitizedConfig.data = data;
    }
  }

  if (sanitizedConfig.headers) {
    delete sanitizedConfig.headers.Authorization;
  }

  return sanitizedConfig;
};

export default sanitizeRequestConfig;
