# Carp HTTP Client

A HTTP client for CACHET Research Platform (CARP) endpoints written in TypeScript, wrapping around the domain model defined in [carp.core](https://github.com/cph-cachet/carp.core-kotlin). The purpose of this package is to provide a cleaner looking layer for the frontend applications (like the [iPDM-Go](https://github.com/cph-cachet/ipdm-go-web-app) website or the [CARP Study Manager](https://github.com/cph-cachet/carp.webservices.dashboard)) while still relying on the Javascript libraries compiled from the CORE project.

## Technical Overview

The project is written Typescript v3, is tested with the [Jest framework](https://jestjs.io/) and is built on top of [Carp.Core (latest)](https://github.com/cph-cachet/carp.core-kotlin). The last component is a dependency not available on npm. They can be found in the [non_npm_dependencies](non_npm_dependencies) folder. Every time a developer uses the `yarn add`, `yarn install`, `yarn remove` (or similar npm commands) the package manager will align the dependencies (node modules folder) and will remove this component. It is recommended to manually copy these files into the node modules folder after using such commands, taking special care not to erase the **node_modules/@types** folder and it original content when copying the **non_npm_dependencies/@types** folder into it.

## Folder structure

Within the [src](src), the library entry-point can be found in the [index.ts](src/index.ts) file, the the Carp Instance (based on AxiosInstance) can be found in [CarpService.ts](src/CarpService.ts). Other than the API wrappers, the library contains some additional data models, which can be found in the [models](src/models) folder. The project uses the Jest Testing Framework and the tests are located in the [\_\_tests\_\_](src/__tests__) folder.

## Development

As part of the setup process an `.env` file has to be created in the root folder.

Note that you need to set up a client with Keycloak. When setting it up, enable the following settings:

- Client authentication: on
- Standard flow: on
- Direct access grants: on
- Implicit flow: on

You don't need to set up any of the URLs. Once the client is created, you can go to the "Credentials" tab to copy the client secret.

Set up the `.env` file with this information:

```
# researcher account credentials
RESEARCHER_EMAIL=""
RESEARCHER_PASSWORD=""

API_URI=""

# keycloak
AUTH_SERVER_URI=""
# make sure this is actually registered on Keycloak
CLIENT_ID=""
CLIENT_SECRET=""

# an email which is invited as a researcher/participant
TEST_EMAIL=""
TEST_USERNAME=""
```

To run the tests, type:

> yarn test

## Publishing

In order to publish the client as an npm package in Github packages, follow the following steps:

- Increment the version in [package.json](package.json) to the next version
  - Note: if you don't want to update the "latest" version and simply want to publish the client to test on another application such as the dashboard, you can edit the version to something like `1.0.0-dev-branchname`. Then in the application you can test in, you can run `npm install @cph-cachet/carp.httpclient-ts@1.0.0-dev-branchname` to install the version you published.
- Install the node modules if they don't exist, using `yarn install`
- Build the package using `yarn build`
- Publish the package using `npm run publish` ONLY FOR PRODUCTION builds and `npm run publish-dev` for test builds.

## Update

In case of a CORE version update, follow these steps:

- checkout the [Carp.Core](https://github.com/cph-cachet/carp.core-kotlin) codebase on the desired version
- build the project
- locate the following compiled Core related .js files: (Note that the path may change, but for v26 the path is: `/build/js/packages/<package_name>/kotlin/<file_name>)
  - `carp.core-kotlin-carp.common.js`
  - `carp.core-kotlin-carp.deployment.core.js`
  - `carp.core-kotlin-carp.protocols.core.js`
  - `carp.core-kotlin-carp.studies.core.js`
- locate the following compiled kotlin related .js files: (Note that the path may change, but for v26 the path is: `/build/js/packages_imported/<package_name>/<version_number>/<file_name>)
  - `kotlin-test.js`
  - `kotlin.js`
  - `kotlinx-serialization-kotlinx-serialization-core-jsLegacy.js`
  - `kotlinx-serialization-kotlinx-serialization-json-jsLegacy.js`
- copy the previously listed files into the [non_npm_dependencies](non_npm_dependencies) folder, overwriting the ones there. In a general case, dependencies should not be committed to github, but these dependencies are not available through package managers, so it is advised to keep it together with the source code.
- copy the [Carp.Core/typescript-declarations/@types](https://github.com/cph-cachet/carp.core-kotlin/tree/develop/typescript-declarations/%40types) folder's content into the [non_npm_dependencies/@types](non_npm_dependencies/@types) folder overwriting the ones there.
- Now you should have all the Carp.Core and Kotlin related dependencies in the [non_npm_dependencies](non_npm_dependencies) folder. Copy the content of this folder to the actual [node_modules](src) folder containing the dependencies.
- Try to run the tests, if they succeed the update process was successful. In case of errors, follow the debugging process from the terminal or contact the maintainer of [Carp.Core](https://github.com/cph-cachet/carp.core-kotlin) and ask for a pair programming session :) .

Due to some dependencies not available in the npm repository, this package also cannot be published there. The Cachet projects using this carp.httpclient library have to be updated similarly when a Core update happens. For those projects, the `non_npm_depencendencies` folder will now consist of the 8 files listed above, the @types folder, and the build output of this project.
