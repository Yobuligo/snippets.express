import { Controller } from "./core/Controller";
import { SessionInterceptor } from "./core/SessionInterceptor";

export class UserController extends Controller {
  constructor() {
    super();
    this.login();
    this.logout();
    this.register();
  }

  private login() {
    this.router.get("", (req, res) => {});
  }

  private logout() {}

  private register() {
    this.router.get(
      "",
      SessionInterceptor((req, res) => {})
    );
  }
}
