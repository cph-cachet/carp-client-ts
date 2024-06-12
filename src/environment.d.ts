declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_BASE_URL: string
      AUTH_BASE_URL: string
      AUTH_REALM: string
      AUTH_CLIENT_ID: string
      AUTH_CLIENT_SECRET: string
      RESEARCHER_EMAIL: string
      RESEARCHER_PASSWORD: string
      PARTICIPANT_EMAIL: string
      PARTICIPANT_USERNAME: string
    }
  }
}

export {}
