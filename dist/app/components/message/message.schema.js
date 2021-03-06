"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    content: { type: String, required: true },
    createdAt: { type: Date },
    nombre: { type: String, requered: true },
});
exports.default = mongoose_1.model('Message', schema, 'message');
