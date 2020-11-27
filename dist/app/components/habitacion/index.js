"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const habitacion_network_1 = __importDefault(require("./habitacion.network"));
const habitacion = express_1.default();
habitacion.use('/habitacion', habitacion_network_1.default);
exports.default = habitacion;
