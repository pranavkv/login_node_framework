"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const PTRequest_1 = require("../request/PTRequest");
const PTResponse_1 = require("../response/PTResponse");
class BaseController {
    /**
     * This is what we will call on the route handler.
     * We also make sure to catch any uncaught errors in the
     * implementation.
     */
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("login request reached");
            try {
                const request = new PTRequest_1.PTRequest(req);
                const response = new PTResponse_1.PTResponse(request);
                yield this.process(request, response);
                console.log("Response -> " + JSON.stringify(response));
                this.ok(res, response);
            }
            catch (err) {
                console.log("[BaseController]: Uncaught controller error");
                console.log(err);
                this.fail(res, "An unexpected error occurred");
            }
        });
    }
    static jsonResponse(res, code, message) {
        return res.status(code).json({ message });
    }
    ok(res, dto) {
        res.type("application/json");
        return res.status(200).json(dto);
    }
    created(res) {
        return res.sendStatus(201);
    }
    clientError(res, message) {
        return BaseController.jsonResponse(res, 400, message ? message : "Unauthorized");
    }
    unauthorized(res, message) {
        return BaseController.jsonResponse(res, 401, message ? message : "Unauthorized");
    }
    paymentRequired(res, message) {
        return BaseController.jsonResponse(res, 402, message ? message : "Payment required");
    }
    forbidden(res, message) {
        return BaseController.jsonResponse(res, 403, message ? message : "Forbidden");
    }
    notFound(res, message) {
        return BaseController.jsonResponse(res, 404, message ? message : "Not found");
    }
    conflict(res, message) {
        return BaseController.jsonResponse(res, 409, message ? message : "Conflict");
    }
    tooMany(res, message) {
        return BaseController.jsonResponse(res, 429, message ? message : "Too many requests");
    }
    todo(res) {
        return BaseController.jsonResponse(res, 400, "TODO");
    }
    fail(res, error) {
        console.log(error);
        return res.status(500).json({
            message: error.toString()
        });
    }
}
exports.BaseController = BaseController;
