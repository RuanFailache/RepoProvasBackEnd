"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var examValidation = joi_1["default"].object({
    name: joi_1["default"].string().min(3).required(),
    category: joi_1["default"].string()
        .pattern(/^(P1|P2|P3|2ch|Outras)$/)
        .required(),
    teacherId: joi_1["default"].number().required(),
    subjectId: joi_1["default"].number().required(),
    link: joi_1["default"].string().required()
});
exports["default"] = examValidation;
