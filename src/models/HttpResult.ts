import { Error, Ok } from '.';

export type HttpResult<E, O> = Error<E, O> | Ok<E, O>;
