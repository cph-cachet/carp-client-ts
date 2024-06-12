import { HttpResult, Ok } from '.';

export class Error<E, O> {
  readonly value: E;

  constructor(value: E) {
    this.value = value;
  }

  isError(): this is Error<E, O> {
    return true;
  }

  isOk(): this is Ok<E, O> {
    return false;
  }
}

export const err = <E, O>(e: E): HttpResult<E, O> => {
  return new Error(e);
};

export interface CarpServiceError {
  message: string;
  httpResponseCode: number;
  httpResponseMessage: string;
}
