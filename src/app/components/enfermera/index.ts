import express, {Express} from "express";
import router from "./enfermera.network";

const enfermera: Express = express();
enfermera.use('/enfermera',router);

export default enfermera;