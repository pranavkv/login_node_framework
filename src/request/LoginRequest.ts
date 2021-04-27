import * as express from "express";
import { PTRequest } from "./PTRequest";

export class LoginRequest extends PTRequest {

    public username: string;
    public password: string;

    constructor(req: express.Request) {
        super(req);
    }

    protected async isValid(): Promise<string> {
        return "valid";
    }
}

