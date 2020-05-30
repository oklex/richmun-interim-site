"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors = require("cors");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
const webBuild = "../web-build";
app.use("/", express_1.default.static(path_1.default.join(__dirname, webBuild)));
app.get("/*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, webBuild, "index.html"));
});
exports.default = app;
//# sourceMappingURL=app.js.map