import { loginController } from "../";
import { Router } from "express";

const loginRouter: Router = Router();

loginRouter.post("/Validate",
  (req, res) => loginController.handleRequest(req, res)
);

export { loginRouter };