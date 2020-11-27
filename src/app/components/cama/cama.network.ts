import express,{ Router, Response, Request } from "express"
import { Cama } from "../../models/cama.model";
import responseModule from "../../modules/response.module";
import camaController from "./cama.controller";
import camaRepository from "./cama.repository";

const router: Router = express.Router();

router.get('/all', async(req: Request, res: Response) => {

    try {
        const result: Cama[] = await camaController.getCamas();
        responseModule.success(req,res, result); // 201 creado
    } catch (error) {
        responseModule.error (req, res, "Error Desconocido 1");
        
    }
});

router.post('/add', async (req: Request, res: Response) => {

    const body: Cama = req.body; // ó const { body } = req;

    /* body no detecta que no esta el "id" por eso no es necesario usar
    Partial<Medico> */ 
    try {        
        const result: Cama = await camaController.addCama(body);
        responseModule.success(req,res,result,201);
    } catch (error) {
        responseModule.error(req, res , "Error Desconocido 2");        
    }

});

router.patch("/:id", async function(req: Request, res: Response){
    const { id } = req.params;
    try {
        const modPaciente = await camaController.modCama(id, req.body);
        responseModule.success(req,res,modPaciente,201);    
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});


export default router;