import { Controller } from "./core/Controller";

export class UserController extends Controller {
  constructor() {
    super();
    this.login();
    this.logout();
    this.register();
  }

  private login() {}

  private logout() {}

  private register() {}
}
