import {Login} from './iauth.service';
const { getClient } = require('../../config/db.config');
const jwt = require("jsonwebtoken");
import {Logger} from '../../utilization/Logger/Logger';
import { json } from 'body-parser';

var logging = new Logger();

export async function login(login: Login) {

    try{
     let  token ;

        const client = await getClient();
        let result = await client.query('SELECT * FROM "user" WHERE email = $1 AND password = $2;',
         [login.email,login.password]);
        
         if (result && result.rows && result.rows.length > 0) {
             token =  await jwt.sign({ email: login.email, date: Date.now() },
                "keyboard cat 4 ever"
                //{ expiresIn: 129600 }
            );
            return {success: true, data: token};
        }
        logging.log('error', 'Auth', "Loging failed");
        return {success: false, message:"Loging failed"};
    }
    catch(e){
        logging.log('error', 'Auth', String(e));
        return {success: false, message:e};
    }

}