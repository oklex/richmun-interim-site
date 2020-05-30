"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 8081;
app_1.default.listen(port, () => {
    console.log("App is running at port " + port);
});
//# sourceMappingURL=index.js.map