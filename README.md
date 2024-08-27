# @carp-dk/client

Carp Client is a libary written in Typescript, wrapper for Copenhagend Research Platform (CARP) endpoints. The purpuse is to reuse shared code in Typescript frontend applications.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the dependencies, run:

```bash
npm install
```

## Usage

To start using the project, you can run the following commands:

```bash
# Build the project
npm run build

# Lint the project
npm run lint

# Fix linting issues
npm run lint:fix

# Run tests with coverage
npm run test
```

## Scripts

- `build`: Cleans the `dist` directory, compiles TypeScript, resolves module paths, removes test files from `dist`, and syncs `package.json` to `dist`.
- `lint`: Runs ESLint on the project.
- `lint:fix`: Runs ESLint with the `--fix` option to automatically fix issues.
- `test`: Runs tests using Vitest with coverage.
- `postinstall`: Syncs non-NPM dependencies to `node_modules`.

## Development

For development `.env` file has to be created in the root folder.

```
VITE_API_BASE_URL= <Base URL of the backend>
VITE_AUTH_BASE_URL= <URL of keycloak>
VITE_AUTH_REALM= <Keycloak realm>
VITE_AUTH_CLIENT_ID= <Keycloak clientID>
VITE_AUTH_CLIENT_SECRET= <Keycloack client secret>
VITE_RESEARCHER_EMAIL= <Test researcher email from keycloak>
VITE_RESEARCHER_PASSWORD= <Test researcher's password>
VITE_PARTICIPANT_EMAIL= <Test participant email>
VITE_PARTICIPANT_USERNAME= <Test participant username>
VITE_ENV= <"DEV" || "PROD">
```
