import { Error, HttpResult } from '.';

export class Ok<E, O> {
  readonly value: O;

  constructor(value: O) {
    this.value = value;
  }

  isError(): this is Error<E, O> {
    return false;
  }

  isOk(): this is Ok<E, O> {
    return true;
  }
}

export const ok = <E, O>(o: O): HttpResult<E, O> => {
  return new Ok<E, O>(o);
};
