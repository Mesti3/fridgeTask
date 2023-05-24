import { login} from '../service/auth.service';
import { Login } from '../service/iauth.service';

import {Request,Response} from 'express';

 export async function loginHandler(req: Request, res : Response): Promise<object> {

    if(req.body === undefined) return res.json({success: false, message:"Empty body", data: null});

    let user = req.body as Login;

    let response =  await login(user);

    return res.json(response);
}
