import { Instant } from '@js-joda/core';

// https://github.com/cph-cachet/carp-webservices-spring/blob/master/docs/input-data-types.md
export interface InputDataType {
  __type: string;
}

export interface Address extends InputDataType {
  __type: 'dk.carp.webservices.input.address';
  address1?: string | null;
  address2?: string | null;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
}

export interface Diagnosis extends InputDataType {
  __type: 'dk.carp.webservices.input.diagnosis';
  effectiveDate?: Instant | null;
  diagnosi?: string | null;
  icd11Code: string;
  conclusion?: string | null;
}

export interface FullName extends InputDataType {
  __type: 'dk.carp.webservices.input.full_name';
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
}

export interface InformedConsent extends InputDataType {
  __type: 'dk.carp.webservices.input.informed_consent';
  signedTimestamp?: Instant | null;
  signedLocation?: string | null;
  userId?: string | null;
  name: string;
  consent?: string | null;
  signatureImage?: string | null;
}

export interface PhoneNumber extends InputDataType {
  __type: 'dk.carp.webservices.input.phone_number';
  countryCode: string;
  icoCode?: string | null;
  number: string;
}

export interface SocialSecurityNumber extends InputDataType {
  __type: 'dk.carp.webservices.input.ssn';
  socialSecurityNumber: string;
  country: string;
}

export interface Sex extends InputDataType {
  __type: 'dk.cachet.carp.input.sex';
  value: 'Male' | 'Female' | 'Intersex';
}
