"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller_1 = __importDefault(require("../controllers/controller"));
router.get('/', controller_1.default.test);
router.get('/api/data', controller_1.default.data);
router.post('/', controller_1.default.createUser);
exports.default = router;
