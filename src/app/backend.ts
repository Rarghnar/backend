import mongooseModule from "./modules/mongoose.module";
import express, { Express, Request, Response } from "express";
import components from "./components";
import morgan from "morgan";
import cors from "cors";

async function main( ){

    const server: Express = express(); // igual a new Express()
    const port: number = 5000;

    server.use(express.json());
    server.use(morgan("dev"));
    server.use(cors());

    server.use('/api', ...components); // for 1<components.leght

    /* server.use('/api',function(req: Request, res: Response){
        res.send({
            message:"hola"
        })
    }) */

    try{
        await mongooseModule.connect();
        console.log("Conexion exitosa");

        server.listen(port,() =>{
            console.log("Servidor escuchando en: http://localhost:" + port)
        })

    } catch (error){ 
        console.log("Conexxion fallida");
    }

}

export default{ main };
 
