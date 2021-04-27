"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const __1 = require("../");
const express_1 = require("express");
const loginRouter = express_1.Router();
exports.loginRouter = loginRouter;
loginRouter.post("/Validate", (req, res) => __1.loginController.execute(req, res));
