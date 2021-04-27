import * as express from "express";
import { PTRequest } from "../request/PTRequest";
import { PTResponse } from "../response/PTResponse";

export abstract class BaseController {

  protected abstract process(
    req: PTRequest, res: PTResponse): Promise<void>;

  public async handleRequest(
    req: express.Request, res: express.Response
  ): Promise<void> {

    console.log("login request reached");
    try {

      const request = new PTRequest(req);

      const response = new PTResponse(request);

      await this.process(request, response);

      console.log("Response -> " + JSON.stringify(response));
      this.ok<PTResponse>(res, response);

    } catch (err) {
      console.log("[BaseController]: Uncaught controller error");
      console.log(err);
      this.fail(res, "An unexpected error occurred");
    }
  }

  public static jsonResponse(
    res: express.Response, code: number, message: string
  ) {
    return res.status(code).json({ message });
  }

  public ok<T extends PTResponse>(res: express.Response, dto?: T) {
    res.type("application/json");
    return res.status(200).json(dto);
  }

  public created(res: express.Response) {
    return res.sendStatus(201);
  }

  public clientError(res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 400, message ? message : "Unauthorized");
  }

  public unauthorized(res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 401, message ? message : "Unauthorized");
  }

  public paymentRequired(res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 402, message ? message : "Payment required");
  }

  public forbidden(res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 403, message ? message : "Forbidden");
  }

  public notFound(res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 404, message ? message : "Not found");
  }

  public conflict(res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 409, message ? message : "Conflict");
  }

  public tooMany(res: express.Response, message?: string) {
    return BaseController.jsonResponse(res, 429, message ? message : "Too many requests");
  }

  public todo(res: express.Response) {
    return BaseController.jsonResponse(res, 400, "TODO");
  }

  public fail(res: express.Response, error: Error | string) {
    console.log(error);
    return res.status(500).json({
      message: error.toString()
    });
  }
}