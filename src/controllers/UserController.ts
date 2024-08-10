import { attachSession } from "../utils/attachSession";
import { Controller } from "./core/Controller";

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
    this.router.get("", attachSession(), (req, res) => {});
  }
}
