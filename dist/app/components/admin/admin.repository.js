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
const admin_schema_1 = __importDefault(require("./admin.schema"));
function getAdmin() {
    return __awaiter(this, void 0, void 0, function* () {
        return admin_schema_1.default.find(); //mostrar todo
    });
}
function getAdminById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return admin_schema_1.default.findOne({ _id: id });
    });
}
function addAdmin(admin) {
    return __awaiter(this, void 0, void 0, function* () {
        return admin_schema_1.default.create(admin);
    });
}
function deleteAdmin(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return admin_schema_1.default.remove({ _id: id });
    });
}
function patchAdmin(_id, admin) {
    return __awaiter(this, void 0, void 0, function* () {
        return admin_schema_1.default.findByIdAndUpdate(_id, admin);
    });
}
exports.default = { addAdmin, getAdmin, getAdminById, deleteAdmin, patchAdmin };
