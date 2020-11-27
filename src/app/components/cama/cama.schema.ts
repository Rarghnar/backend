import { Schema, model, Document } from "mongoose"
import {Cama} from "../../models/cama.model";

const definition: Partial<Record<keyof Cama, any>> ={
    createdAt: { type : Date},

    numeroDeCama: { type: Number, required: true},
    nombrePaciente: { type: String, required: false },
    apellidosPaciente: {type : String, required: false},    
    rutPaciente: { type: String, required: false},    
    nombreMedicoEncargado: { type: String, required: false},
    apellidosMedicoEncargado: { type: String, required: false},
    rutMedicoEncargado: { type: String, required: false},
    nombreEnfermeraEncargada: { type: String, required: false},
    rutEnfermeraEncargada: { type:String, required: false},
    camaLibre: { type: String, required: false },
};

const schema: Schema<Cama> = new Schema(definition);
export default model<Cama & Document> ('Cama', schema, 'cama');
