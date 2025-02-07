import { Instant } from "@js-joda/core";

// https://github.com/cph-cachet/carp-webservices-spring/blob/master/docs/input-data-types.md
export interface InputDataType {
  __type: string;
}
export interface IAddress extends InputDataType {
  __type: "dk.carp.webservices.input.address";
  address1?: string | null;
  address2?: string | null;
  street?: string | null;
  city?: string | null;
  postalCode?: string | null;
  country?: string | null;
}
export interface IDiagnosis extends InputDataType {
  __type: "dk.carp.webservices.input.diagnosis";
  effectiveDate?: Instant | null;
  diagnosis?: string | null;
  icd11Code: string;
  conclusion?: string | null;
}
export interface IFullName extends InputDataType {
  __type: "dk.carp.webservices.input.full_name";
  firstName?: string | null;
  middleName?: string | null;
  lastName?: string | null;
}
export interface IInformedConsent extends InputDataType {
  __type: "dk.carp.webservices.input.informed_consent";
  signedTimestamp?: Instant | null;
  signedLocation?: string | null;
  userId?: string | null;
  name: string;
  consent?: string | null;
  signatureImage?: string | null;
}
export interface IPhoneNumber extends InputDataType {
  __type: "dk.carp.webservices.input.phone_number";
  countryCode: string;
  isoCode?: string | null;
  number: string;
}
export interface ISocialSecurityNumber extends InputDataType {
  __type: "dk.carp.webservices.input.ssn";
  socialSecurityNumber: string;
  country: string;
}
export interface ISex extends InputDataType {
  __type: "dk.cachet.carp.input.sex";
  value: "Male" | "Female" | "Intersex";
}
