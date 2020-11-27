"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    numeroPiso: { type: Number, required: false },
    codigoHabitacion: { type: String, required: false },
    cantidadCamas: { type: Number, required: false },
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Habitacion', schema, 'habitacion');
