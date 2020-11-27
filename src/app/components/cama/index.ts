import express, {Express} from "express";
import router from "./cama.network";

const cama: Express = express();
cama.use('/cama', router );

export default cama;


