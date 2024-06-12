import axios, { AxiosRequestConfig } from 'axios';
import CarpInstance from '../CarpService';
import { Token } from '../models';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-var-requires
require('dotenv').config();

test('skip', () => {
  expect(true).toBeTruthy();
});

const baseConfig: AxiosRequestConfig = {
  baseURL: process.env.API_URI,
};

const authConfig: AxiosRequestConfig = {
  baseURL: process.env.AUTH_SERVER_URI,
};
const contentType = {
  application_json: 'application/json',
  application_x_www_form_urlencoded: 'application/x-www-form-urlencoded',
};

const carpInstance = new CarpInstance(
  axios.create(baseConfig),
  axios.create(authConfig)
);

const grantType = {
  password: 'password',
};

const loginParams = {
  username: process.env.RESEARCHER_EMAIL as string,
  password: process.env.RESEARCHER_PASSWORD as string,
};

const defaultParams = {
  client_id: process.env.CLIENT_ID as string,
  client_secret: process.env.CLIENT_SECRET as string,
};

const getAccesToken = async () => {
  const response = await carpInstance.authenticate(
    { ...defaultParams, ...loginParams, grant_type: grantType.password },
    {
      headers: {
        'Content-Type': contentType.application_x_www_form_urlencoded,
      },
    }
  );
  expect(response instanceof Token).toBeTruthy();
  expect(response).toHaveProperty('access_token');
  expect(response).toHaveProperty('refresh_token');
  expect(response).toHaveProperty('token_type');
  expect(response).toHaveProperty('scope');
  expect(response).toHaveProperty('expires_in');

  return response.access_token;
};

const getBearerAuthConfig = (token: string) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': contentType.application_json,
    },
  } as AxiosRequestConfig;
};

const getCurrentAcountId = async (token: string) => {
  const response = await carpInstance.getJwtInUse(
    { ...defaultParams, token },
    {
      headers: {
        'Content-Type': contentType.application_x_www_form_urlencoded,
      },
    }
  );
  expect(response.sub).toBeTruthy();
  return response.sub as string;
};

const badRequestConfig = {
  headers: {
    Authorization: 'Bearer bad_token',
    'Content-Type': contentType.application_json,
  },
};

export {
  badRequestConfig,
  carpInstance,
  contentType,
  defaultParams,
  getAccesToken,
  getBearerAuthConfig,
  getCurrentAcountId,
  grantType,
  loginParams,
};
