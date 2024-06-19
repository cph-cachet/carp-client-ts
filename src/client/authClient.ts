import { Config } from '@/config';
import { Auth } from '@/endpoints/auth';
import { CarpClient } from './carpClient';

/*
 * CarpAuthClient is a specialized CarpClient that includes the Auth endpoint.
 * It is used to authenticate with the CARP server.
 * This is for internal use only, for the tests.
 * @internal
 */
export default class CarpAuthClient extends CarpClient {
  public authentication: Auth;

  constructor(protected readonly config: Config) {
    super(config);
    this.registerEndpoints();
  }

  registerEndpoints(): void {
    this.authentication = new Auth(this);
  }
}
