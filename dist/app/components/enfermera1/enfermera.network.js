"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const response_module_1 = __importDefault(require("../../modules/mongoose/response/response.module"));
const enfermera_controller_1 = __importDefault(require("./enfermera.controller"));
const router = express_1.default.Router();
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield enfermera_controller_1.default.getMedicos();
        response_module_1.default.success(req, res, result); // 201 creado
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido 1");
    }
}));
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body; // ó const { body } = req;
    /* body no detecta que no esta el "id" por eso no es necesario usar
    Partial<Medico> */
    try {
        const result = yield enfermera_controller_1.default.addMedico(body);
        response_module_1.default.success(req, res, result, 201);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido 2");
    }
}));
exports.default = router;
