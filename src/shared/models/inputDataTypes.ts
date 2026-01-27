/* eslint-disable max-classes-per-file */
import { Instant } from "@js-joda/core";
import { Data } from "../coreTypes";

// https://github.com/cph-cachet/carp-webservices-spring/blob/master/docs/input-data-types.md
export interface InputDataType extends Data {
  __type: string;
}
export class AddressType implements InputDataType {
  static type = "dk.carp.webservices.input.address";

  __type = AddressType.type;

  address1?: string | null;

  address2?: string | null;

  street?: string | null;

  city?: string | null;

  postalCode?: string | null;

  country?: string | null;

  constructor(
    address1?: string | null,
    address2?: string | null,
    street?: string | null,
    city?: string | null,
    postalCode?: string | null,
    country?: string | null,
  ) {
    this.address1 = address1;
    this.address2 = address2;
    this.street = street;
    this.city = city;
    this.postalCode = postalCode;
    this.country = country;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}
export class DiagnosisType implements InputDataType {
  static type = "dk.carp.webservices.input.diagnosis";

  __type = DiagnosisType.type;

  effectiveDate?: Instant | null;

  diagnosis?: string | null;

  icd11Code: string;

  conclusion?: string | null;

  constructor(
    icd11Code: string,
    effectiveDate?: Instant | null,
    diagnosis?: string | null,
    conclusion?: string | null,
  ) {
    this.effectiveDate = effectiveDate;
    this.diagnosis = diagnosis;
    this.icd11Code = icd11Code;
    this.conclusion = conclusion;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}

export class FullNameType implements InputDataType {
  static type = "dk.carp.webservices.input.full_name";

  __type = FullNameType.type;

  firstName?: string | null;

  middleName?: string | null;

  lastName?: string | null;

  constructor(
    firstName?: string | null,
    middleName?: string | null,
    lastName?: string | null,
  ) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}
export class InformedConsentType implements InputDataType {
  static type = "dk.carp.webservices.input.informed_consent";

  __type = InformedConsentType.type;

  signedTimestamp?: Instant | null;

  signedLocation?: string | null;

  userId?: string | null;

  name: string;

  consent?: string | null;

  signatureImage?: string | null;

  constructor(
    name: string,
    signedTimestamp?: Instant | null,
    signedLocation?: string | null,
    userId?: string | null,
    consent?: string | null,
    signatureImage?: string | null,
  ) {
    this.signedTimestamp = signedTimestamp;
    this.signedLocation = signedLocation;
    this.userId = userId;
    this.name = name;
    this.consent = consent;
    this.signatureImage = signatureImage;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}

export class PhoneNumberType implements InputDataType {
  static type = "dk.carp.webservices.input.phone_number";

  __type = PhoneNumberType.type;

  countryCode: string;

  isoCode?: string | null;

  number: string;

  constructor(countryCode: string, number: string, isoCode?: string | null) {
    this.countryCode = countryCode;
    this.number = number;
    this.isoCode = isoCode;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}

export class SocialSecurityNumberType implements InputDataType {
  static type = "dk.carp.webservices.input.ssn";

  __type = SocialSecurityNumberType.type;

  socialSecurityNumber: string;

  country: string;

  constructor(socialSecurityNumber: string, country: string) {
    this.socialSecurityNumber = socialSecurityNumber;
    this.country = country;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}

export class SexType implements InputDataType {
  static type = "dk.cachet.carp.input.sex";

  __type = SexType.type;

  value: "Male" | "Female" | "Intersex";

  constructor(value: "Male" | "Female" | "Intersex") {
    this.value = value;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}

export class ParticipantNoteType implements InputDataType {
  static type = "dk.carp.webservices.input.note";

  __type = ParticipantNoteType.type;

  note: string;

  constructor(note: string) {
    this.note = note;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}

export enum ISCEDLevel {
  ISCED_0 = "ISCED_0",
  ISCED_1 = "ISCED_1",
  ISCED_2 = "ISCED_2",
  ISCED_3 = "ISCED_3",
  ISCED_4 = "ISCED_4",
  ISCED_5 = "ISCED_5",
  ISCED_6 = "ISCED_6",
  ISCED_7 = "ISCED_7",
  ISCED_8 = "ISCED_8",
}

export class EducationalDegreeType implements InputDataType {
  static type = "dk.carp.webservices.input.educational_degree";

  __type = EducationalDegreeType.type;

  level: ISCEDLevel;

  details?: string | null;

  constructor(level: ISCEDLevel, details?: string | null) {
    this.level = level;
    this.details = details;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}

export class OnboardingResearcherType implements InputDataType {
  static type = "dk.carp.webservices.input.onboarding_researcher";

  __type = OnboardingResearcherType.type;

  researcherId: string;

  researcherName: string;

  institutionName: string;

  constructor(
    researcherId: string,
    researcherName: string,
    institutionName: string,
  ) {
    this.researcherId = researcherId;
    this.researcherName = researcherName;
    this.institutionName = institutionName;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}

export class PreferredLanguageType implements InputDataType {
  static type = "dk.carp.webservices.input.language";

  __type = PreferredLanguageType.type;

  languageCode: string;

  region?: string | null;

  displayName?: string | null;

  constructor(
    languageCode: string,
    region?: string | null,
    displayName?: string | null,
  ) {
    this.languageCode = languageCode;
    this.region = region;
    this.displayName = displayName;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}

export class OccupationType implements InputDataType {
  static type = "dk.carp.webservices.input.occupation";

  __type = OccupationType.type;

  roles: string[];

  other?: string | null;

  constructor(roles: string[], other?: string | null) {
    this.roles = roles;
    this.other = other;
  }

  readonly __doNotUseOrImplementIt: Data["__doNotUseOrImplementIt"];
}

export class ExpectedParticipantData {
  common: { [key: string]: InputDataType };

  roles: { [roleName: string]: { [key: string]: InputDataType } };

  studyDeploymentId: string;

  constructor() {
    this.common = {};
    this.roles = {};
    this.studyDeploymentId = "";
  }
}
