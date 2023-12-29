"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userData = new mongoose_1.default.Schema({
    name: String,
    age: Number,
    place: String
});
const users = mongoose_1.default.model("users", userData);
exports.users = users;
