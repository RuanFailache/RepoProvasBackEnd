"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var dotenv_1 = __importDefault(require("dotenv"));
var pathFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.local';
dotenv_1["default"].config({
    path: pathFile
});
