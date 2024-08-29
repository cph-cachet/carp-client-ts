import { CarpClient } from "@/client";
import Actions from "./actions";

class Endpoint {
  protected readonly client: CarpClient;

  protected readonly actions: Actions;

  constructor(client: CarpClient) {
    this.client = client;
    this.actions = new Actions(client);
  }
}

export default Endpoint;
