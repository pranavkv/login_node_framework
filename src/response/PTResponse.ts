import * as express from "express";
import { PTRequest } from "../request/PTRequest";

export class PTResponse {

    appID: string;
    sessionID: string;
    msgID: string;
    infoID: string;
    infoMsg: string;

    constructor(req: PTRequest) {
        this.appID = req.appID;
        this.sessionID = req.sessionID;
        this.msgID = req.msgID;
        this.infoID = "0";
        this.infoMsg = "";
    }

    public async setFailure(infoID: string, infoMsg: string): Promise<void> {
        this.infoID = infoID;
        this.infoMsg = infoMsg;
    }

}

