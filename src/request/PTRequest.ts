import * as express from "express";
import { v4 as uuid } from "uuid";

export class PTRequest {

    public request: object;
    public appID: string;
    public sessionID: string;
    public msgID: string;

    constructor(req: express.Request) {
        const data = req.body;
        this.request = data;
        this.appID = data.appID;
        this.sessionID = data.sessionID;
        this.msgID = uuid();
    }

    protected async isValid(): Promise<string> {
        return "valid";
    }
}

