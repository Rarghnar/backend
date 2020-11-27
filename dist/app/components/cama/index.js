"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cama_network_1 = __importDefault(require("./cama.network"));
const cama = express_1.default();
cama.use('/cama', cama_network_1.default);
exports.default = cama;
