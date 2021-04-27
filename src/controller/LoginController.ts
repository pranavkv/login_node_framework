import { BaseController } from "./BaseController";
import { LoginResponse } from "../response/LoginResponse";
import { LoginRequest } from "../request/LoginRequest";

export class LoginController extends BaseController {
  protected async process(req: LoginRequest, res: LoginResponse): Promise<void> {
    try {
      res.age = 9;
      res.name = "pranav";
    } catch (err) {
      res.setFailure("EGN001", "Request Failed");
    }
  }
}