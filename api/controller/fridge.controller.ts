import {createFridge,deleteFridge,getFridgeAll,updateFridge} from '../service/fridge.service';
import {Fridge} from '../service/fridge.iservice';
import {Request,Response} from 'express';

async function createFridgeHandler(req: Request, res: Response): Promise<object> {

    if(req.body === undefined) return res.json({success: false, message:"Empty body", data: null});

    let fridge = req.body as Fridge;

    let data = await createFridge(fridge);

    return res.json(data); 

}

async function updateFridgeHandler(req: Request, res: Response) : Promise<object> {

    if(req.body === undefined) return res.json({success: false, message:"Empty body", data: null});

    let fridge = req.body as Fridge;

    let data = await updateFridge(fridge);

    return res.json(data);
}

async function deleteFridgeHandler(req: Request, res: Response): Promise<object> {

    if(req.body.id === undefined) return res.json({success: false, message:"Empty body", data: null});

    let data = await deleteFridge(req.body.id);

   return res.json(data);

}

async function getFridgeAllHandler(req: Request, res: Response){

    let data = await getFridgeAll();

    return res.json(data);
}

export {
    createFridgeHandler,
    updateFridgeHandler,
    deleteFridgeHandler,
    getFridgeAllHandler
}