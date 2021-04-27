import { PTRequest } from "../request/PTRequest";
import { PTResponse } from "../response/PTResponse";
import { BaseController } from "./BaseController";
import { SessionHelper } from "Helper.ts/SessionHelper";

export abstract class SessionController extends BaseController {

  protected abstract postProcess(
    req: PTRequest, res: PTResponse): Promise<void>;

  protected async process(req: PTRequest, res: PTResponse): Promise<void> {
    try {

      if (SessionHelper.isValidSession(req.sessionID)) {
        this.postProcess(req, res);
      } else {
        res.setFailure("EGN002", "Invalid Session");
      }

    } catch (err) {
      res.setFailure("EGN001", "Request Failed");
    }
  }

}