import { Schema, model, Document } from "mongoose"
import {Enfermera} from "../../models/enfermera.model";

const definition: Partial<Record<keyof Enfermera, any>> ={
    createdAt: { type : Date},
    nombres: { type: String, required: true},
    apellidos: { type: String, required: true },
    sexo: { type: String, required: true },
    telefono: { type: Number, required: true },
    direccion:{ type: String, required:false},
    email: { type: String, required: true },
    rut: { type:String, required: true},
    contraseña: { type: String, required: true},
    contraseñaRepetida: { type: String, required: true},

};

const schema: Schema<Enfermera> = new Schema(definition);
export default model<Enfermera & Document> ('Enfermera', schema, 'enfermera');
