import {Document, model, Schema } from "mongoose";
import {Habitacion} from "../../models/habitacion.model";

const definition: Partial<Record<keyof Habitacion, any>> ={

    numeroPiso: { type: Number, required: false},
    codigoHabitacion: { type: String, required: false},
    cantidadCamas: { type: Number, required: false},
    //createdAt: { type: Date},

};

const schema: Schema<Habitacion> = new Schema (definition);
export default model< Habitacion & Document > ('Habitacion', schema , 'habitacion');
