"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    createdAt: { type: Date },
    nombres: { type: String, required: false },
    apellidos: { type: String, required: false },
    email: { type: String, required: false },
    rut: { type: String, required: false },
    contraseña: { type: String, required: false },
    contraseñaRepetida: { type: String, required: false },
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Medico', schema, 'medico');
