"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    createdAt: { type: Date },
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    sexo: { type: String, required: true },
    telefono: { type: Number, required: true },
    especialidad: { type: String, required: true },
    direccion: { type: String, required: false },
    email: { type: String, required: true },
    rut: { type: String, required: true },
    contraseña: { type: String, required: true },
    contraseñaRepetida: { type: String, required: true },
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Medico', schema, 'medico');
