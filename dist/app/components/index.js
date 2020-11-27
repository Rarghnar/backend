"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medico_1 = __importDefault(require("./medico"));
const paciente_1 = __importDefault(require("./paciente"));
const enfermera_1 = __importDefault(require("./enfermera"));
const habitacion_1 = __importDefault(require("./habitacion"));
const cama_1 = __importDefault(require("./cama"));
const admin_1 = __importDefault(require("./admin"));
const components = [
    medico_1.default,
    paciente_1.default,
    enfermera_1.default,
    habitacion_1.default,
    cama_1.default,
    admin_1.default,
];
exports.default = components;
