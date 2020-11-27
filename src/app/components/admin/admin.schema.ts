import { Schema, model, Document } from "mongoose"
import {Admin} from "../../models/admin.model";

const definition: Partial<Record<keyof Admin, any>> ={
    createdAt: { type : Date},

    nombres: { type: String, required: true},
    apellidos: { type: String, required: true},
    sexo: { type: String, required: true},
    telefono: { type:Number, required: true},
    cargo: { type: String, required: true},
    email: { type: String, required: true},
    rut: { type: String, required: true},
    contraseña: { type: String, required: true },
    contraseñaRepetida: { type:String, required: true}

};

const schema: Schema<Admin> = new Schema(definition);
export default model<Admin & Document> ('Admin', schema, 'admin');
