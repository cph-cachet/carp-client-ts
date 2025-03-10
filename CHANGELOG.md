# Changelog

## [2.0.4] - 2025-03-10

### Fixed

- Anonymous participant generation

## [2.0.3] - 2025-03-07

### Added

- Added pagination parameters to `getParticipantAccounts` endpoint
- Added   `ParticipantRole`, `DeviceConnection`, `DeviceConfiguration`, `ExpectedParticipantData`, `SelectOne` to `coreTypes`

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