/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_AUTH_BASE_URL: string
  readonly VITE_AUTH_REALM: string
  readonly VITE_AUTH_CLIENT_ID: string
  readonly VITE_AUTH_CLIENT_SECRET: string
  readonly VITE_RESEARCHER_EMAIL: string
  readonly VITE_RESEARCHER_PASSWORD: string
  readonly VITE_PARTICIPANT_EMAIL: string
  readonly VITE_PARTICIPANT_USERNAME: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}