"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function success(req, res, message, status) {
    let statusCode = status || 200;
    res.status(statusCode) //201 para crear
        .send({
        error: "",
        status: statusCode,
        message: message,
    });
}
function error(req, res, message, status) {
    let statusCode = status || 200;
    res.status(statusCode) //201 para crear
        .send({
        error: "Error Desconocido 7",
        status: statusCode,
        message: "",
    });
}
exports.default = { success, error };
