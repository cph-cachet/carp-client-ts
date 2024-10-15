import { Instant } from '@js-joda/core';

// src/types/Address.ts
export interface Address {
  address1?: string | null; // Optional: First line of the address
  address2?: string | null; // Optional: Second line of the address
  street?: string | null; // Optional: Street of the address
  city?: string | null; // Optional: City of the address
  postalCode?: string | null; // Optional: Postal code of the address
  country?: string | null; // Optional: Country of the address
}

export interface Diagnosis {
  effectiveDate?: Instant | null;
  diagnosi?: string | null;
  icd11Code: string;
  conclusion?: string | null;
}

export interface FullName {
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
}

export interface InformedConsent {
  signedTimestamp?: Instant | null; // Optional: Time consent was signed
  signedLocation?: string | null; // Optional: Location consent was signed``
  userId?: string | null; // Optional: User ID of the participant
  name: string; // Required: Name of the participant
  consent?: string | null; // Optional: Content of the signed consent
  signatureImage?: string | null; // Optional: Signature image in PNG format
}

export interface PhoneNumber {
  countryCode: string; // Country code as a string
  icoCode?: string | null; // Optional: ICO 3166 code
  number: string; // Phone number as a string
}

export interface SocialSecurityNumber {
  socialSecurityNumber: string; // Social security number (SSN)
  country: string; // Country of issuance
}

export enum Sex {
  Male = 'Male',
  Female = 'Female',
  Intersex = 'Intersex',
}
