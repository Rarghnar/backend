"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medico_network_1 = __importDefault(require("./medico.network"));
const medico = express_1.default();
medico.use('/medico', medico_network_1.default);
exports.default = medico;
