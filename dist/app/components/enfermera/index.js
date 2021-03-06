"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enfermera_network_1 = __importDefault(require("./enfermera.network"));
const enfermera = express_1.default();
enfermera.use('/enfermera', enfermera_network_1.default);
exports.default = enfermera;
