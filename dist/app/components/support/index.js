"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const support_network_1 = __importDefault(require("./support.network"));
const support = express_1.default();
support.use('/support', support_network_1.default);
exports.default = support;
