import express, {Express} from "express";
import router from "./habitacion.network";

const habitacion: Express = express();
habitacion.use('/habitacion',router);

export default habitacion;