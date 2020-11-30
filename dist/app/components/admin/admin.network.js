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
const response_module_1 = __importDefault(require("../../modules/response.module"));
const admin_controller_1 = __importDefault(require("./admin.controller"));
const router = express_1.default.Router();
router.get("/all", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield admin_controller_1.default.getAdmin();
            response_module_1.default.success(req, res, result);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.get("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params['id'];
        try {
            const result = yield admin_controller_1.default.getAdminById(id);
            response_module_1.default.success(req, res, result);
        }
        catch (error) {
            console.log(error);
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.post("/add", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const body = req.body;
        try {
            const result = yield admin_controller_1.default.addAdmin(body);
            response_module_1.default.success(req, res, result, 201);
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.delete("/delete", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ver = yield admin_controller_1.default.deleteAdmin(req.body._id);
            if (ver != null) {
                response_module_1.default.success(req, res, "Delete Success", 200);
            }
            else {
                response_module_1.default.success(req, res, "Delete Failed");
            }
        }
        catch (error) {
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
router.patch("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const modPaciente = yield admin_controller_1.default.patchAdmin(id, req.body);
            response_module_1.default.success(req, res, modPaciente, 201);
        }
        catch (error) {
            console.log(id);
            response_module_1.default.error(req, res, "Error desconocido");
        }
    });
});
exports.default = router;
