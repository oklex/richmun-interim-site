var cors = require("cors");

import { Express, Request, Response, NextFunction } from "express";
import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app: Express = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

const webBuild: string = "../../web/build";
app.use("/", express.static(path.join(__dirname, webBuild)));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, webBuild, "index.html"));
});
export default app;
