
import { loginRouter } from "./router/LoginRouter";
import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use("/Login", loginRouter);

app.listen(3000, () => {
 console.log("started");
});