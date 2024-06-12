import carpCommon from '@cachet/carp-common';
import { Role } from './Role';
import cdk = carpCommon.dk;
import UUID = cdk.cachet.carp.common.application.UUID;

export class User {
  id: string;

  email: string;

  firstName: string;

  lastName: string;

  isActivated: boolean;

  accountId: UUID;

  role: Role[];

  constructor(
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    isActivated: boolean,
    accountId: string,
    role: string[]
  ) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.isActivated = isActivated;
    this.accountId = new UUID(accountId);
    this.role = role.map((r: string) => r as Role);
  }

  // toJSON is automatically used by JSON.stringify
  toJSON(): UserJSON {
    // copy all fields from `this` to an empty object and return in
    return {
      ...this, // convert fields that need converting
      accountId: this.accountId.stringRepresentation,
      role: this.role.map((r: Role) => r),
    };
  }

  // fromJSON is used to convert an serialized version
  // of the User to an instance of the class
  static fromJSON(json: UserJSON | string): User {
    if (typeof json === 'string') {
      // if it's a string, parse it first
      // eslint-disable-next-line @typescript-eslint/unbound-method
      return JSON.parse(json, User.reviver) as User;
    }
    // create an instance of the User class
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const user = Object.create(User.prototype);
    // copy all the fields from the json object
    return Object.assign(user, json, {
      // convert fields that need converting
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      accountId: new UUID(json.accountId),
      role: json.role.map((r: string) => r as Role),
    }) as User;
  }

  // reviver can be passed as the second parameter to JSON.parse
  // to automatically call User.fromJSON on the resulting value.
  static reviver(
    key: string,
    value: UserJSON | string
  ): User | string | UserJSON {
    return key === '' ? User.fromJSON(value) : value;
  }
}

// A representation of User's data that can be converted to
// and from JSON without being altered.
export interface UserJSON {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isActivated: boolean;
  accountId: string;
  role: string[];
}

export interface UserJwtTokenDecoded {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  email: string;
  email_verified: boolean;
  realm_access: { roles: string[] };
}
