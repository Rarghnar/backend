import { Schema, model, Document } from "mongoose"
import {Medico} from "../../models/medico.model";

const definition: Partial<Record<keyof Medico, any>> ={
    createdAt: { type : Date},
    nombres: { type: String, required: true},
    apellidos: { type: String, required: true },
    sexo: { type: String, required: true },
    telefono: { type: Number, required: true },
    especialidad: { type: String, required: true },
    direccion: { type: String, required: false},
    email: { type: String, required: true },
    rut: { type:String, required: true},
    contraseña: { type: String, required: true},
    contraseñaRepetida: { type: String, required: true},

};

const schema: Schema<Medico> = new Schema(definition);

export default model<Medico & Document> ('Medico', schema, 'medico');
