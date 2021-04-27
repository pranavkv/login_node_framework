
import { PTResponse } from "./PTResponse";
import { PTRequest } from "../request/PTRequest";

export class LoginResponse extends PTResponse {

    name: string;
    age: number;

    constructor(req: PTRequest) {
        super(req);
    }
}
