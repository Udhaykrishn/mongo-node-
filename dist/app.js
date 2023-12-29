"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const express_1 = __importDefault(require("express"));
const db_connect_1 = __importDefault(require("./db/db.connect"));
const app_1 = __importDefault(require("./routers/app"));
const http_errors_1 = __importDefault(require("http-errors"));
const app = (0, express_1.default)();
(0, db_connect_1.default)();
app.use(express_1.default.json());
app.use("/", app_1.default);
app.use((req, res, next) => {
    next(new http_errors_1.default.NotFound());
});
const errorHanlder = (err, req, res, next) => {
    res.status(err.status).send("Page Not Found");
};
app.use(errorHanlder);
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, () => console.log("Server Started"));
