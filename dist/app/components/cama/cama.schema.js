"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    createdAt: { type: Date },
    numeroDeCama: { type: Number, required: true },
    nombrePaciente: { type: String, required: false },
    apellidosPaciente: { type: String, required: false },
    rutPaciente: { type: String, required: false },
    nombreMedicoEncargado: { type: String, required: false },
    apellidosMedicoEncargado: { type: String, required: false },
    rutMedicoEncargado: { type: String, required: false },
    nombreEnfermeraEncargada: { type: String, required: false },
    rutEnfermeraEncargada: { type: String, required: false },
    camaLibre: { type: String, required: false },
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Cama', schema, 'cama');
