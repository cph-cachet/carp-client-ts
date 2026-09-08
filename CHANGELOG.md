# Changelog

## [2.1.0] - 2025-09-30

### Added

- Added self-signup endpoints: `getConfig`, `enable` and `end` on `study.selfSignup`, and the public `selfSignup.signUp`
- Added `getParticipantGroupStatusCounts` endpoint for deployment-status totals
- Added `page`/`size`/`search`/`status` (paginate, search, filter) to `getParticipantGroupAccountsAndStatus`; `page` and `size` are required together
- Added `getStudyResearchAssistants` endpoint
- `is_descending` parameters to `getParticipantAccounts` endpoint
- Added `subdomain` optional parameter to `generateAnonymousAccounts` endpoint
- Added optional `activeDeploymentsOnly` parameter to `create` endpoint in Exports service
- Added `createParticipantGroup`, `updateParticipantGroup` and `inviteParticipantGroup` endpoints

### Changed

- `addResearcherToStudy` now requires a role
- Updated `parseUser` function to handle `ResearchAssistant` role
- Updated to carp.core 1.3
- Bumped `axios` to `1.18.1` to patch a critical vulnerability in its bundled `form-data` dependency

### Removed

- Removed deprecated GET-based `getParticipantAccounts` endpoint; use `queryParticipantAccounts` instead

## [2.0.7] - 2025-06-11

### Fixed

- Fixed null serialization of `CompletedAppTask` data

## [2.0.6] - 2025-05-13

### Fixed

- Fixed `DataStreamBatch` `getDataStreamPoints` function filter expression

## [2.0.5] - 2025-05-01

### Added

- Added `getRedirectURIs` endpoint
- Added `getDataStreamSummary` endpoint
- Added `applicationData` parameter to `study.setInvitation` endpoint
- Added `response_as_dto` parameter to `getParticipantAccounts` endpoint

### Fixed

- Fixed serialization of unknown datastream `Data`
- Fixed `ParticipantDataInput.dateOfLastDataUpload` data type

## [2.0.4] - 2025-03-10

### Fixed

- Anonymous participant generation

## [2.0.3] - 2025-03-07

### Added

- Added pagination parameters to `getParticipantAccounts` endpoint
- Added `ParticipantRole`, `DeviceConnection`, `DeviceConfiguration`, `ExpectedParticipantData`, `SelectOne` to `coreTypes`

### Changed

- Changed `getParticipantAccounts` test for pagination
- Changed `createFile` test to accept `deployment_id`

## [2.0.2] - 2025-03-04

### Changed

- Complete rewrite of CARP client.

### Added

- Added `DataStreams` endpoints.

### Removed

- Removed `InformedConsent` endpoints. Please use `ParticipantData` instead.
- Removed `DataPoints` endpoints. Please use `DataStreams` instead.
