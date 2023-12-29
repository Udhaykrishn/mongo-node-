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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modules_1 = require("../db/modules/modules");
const userData_1 = __importDefault(require("./userData"));
const test = (req, res) => {
    res.send("Test is working");
};
const data = (req, res) => {
    const userDataAll = userData_1.default.map((data) => ({
        name: data.name,
        age: data.age,
        place: data.place,
    }));
    res.json(userDataAll);
};
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.body.name || !req.body.age || !req.body.place) {
            res.status(500).json({
                message: "name and age and place required",
            });
        }
        const userDataInObject = {
            name: req.body.name,
            age: req.body.age,
            place: req.body.place,
        };
        const createData = yield modules_1.users.create(userDataInObject);
        res.status(201).send(createData);
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
});
exports.default = { test, data, createUser };
