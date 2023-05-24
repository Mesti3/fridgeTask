import {Fridge} from './fridge.iservice';
const { getClient } = require('../../config/db.config');
import {Logger} from '../../utilization/Logger/Logger';

var logging = new Logger();

async function createFridge(fridge: Fridge): Promise<object> {
    try{
        let result = await getFridgebyId(fridge.id);
        console.log(result);
        if(fridge == result) return {success:false, message: "Fridge already exists"};

        const client = await getClient();
        let data = await client.query('INSERT INTO fridge(id,serialNumber,type,working,email) VALUES ($1,$2,$3,$4,$5);',
         [fridge.id, fridge.serialNumber, fridge.type,fridge.working,fridge.email]);

        if(data && data.rows && data.rows.length > 0) return {success: true, message: "Inserted"};

        logging.log('error', 'Fridge', data);
        return {success: false, message: data};
        
    }
    catch(e){
        logging.log('error', 'Fridge', String(e));
        return {success: false, message: e};
    }
}

async function deleteFridge(fridgeId: number): Promise<object> {
    try{
        if(!getFridgebyId(fridgeId)) return {success:false, message: "Fridge doesnt exist"};

        const client = await getClient();
        let data = await client.query('DELETE FROM fridge WHERE id = $1; ',
         [fridgeId]);

        if(data && data.rows && data.rows.length > 0) return {success: true, message: "Deleted"};

        logging.log('error', 'Fridge', data);
        return {success: false, message: data};
    }
    catch(e){
        logging.log('error', 'Fridge', String(e));
        return {success: false, message: e};
    }
}

async function updateFridge(fridge: Fridge): Promise<object>{
    try{

        let some = getFridgebyId(fridge.id);
        console.log(some)
     //   if(fridge  ) return {success:false, message: "Fridge already exists"};

        const client = await getClient();
       let data = await client.query('UPDATE fridge SET serialNumber = $2, type = $3, working = $4 WHERE id = $1;',
         [fridge.id, fridge.serialNumber, fridge.type,fridge.working]);
        if(data && data.rows && data.rows.length > 0) return {success: true, message: "Updated"};

        logging.log('error', 'Fridge', data);
        return {success: false, message: data};
    }
    catch(e){
        logging.log('error', 'Fridge', String(e));
        return {success: false, message: e};
    }
}

async function getFridgeAll(): Promise<object>{
    try{
        const client = await getClient();
        let data = await client.query('SELECT * FROM fridge; ',
         []);


        if(data && data.rows && data.rows.length > 0) return {success: true, data: data.rows};

            logging.log('error', 'Fridge', data);
            return {success: false, message: data};
    }
    catch(e){
        logging.log('error', 'Fridge', String(e));
        return {success: false, message: e};
    }
}

async function getFridgebyId(fridgeId: number): Promise<object>{
    try{
        const client = await getClient();
        let data = await client.query('SELECT * from fridge WHERE id = $1;',
         [fridgeId]);

        if(data && data.rows && data.rows.length > 0) return {success: true, data: data.rows[0]};

        logging.log('error', 'Fridge', data);
        return {success: false, message: data};
    }
    catch(e){
        logging.log('error', 'Fridge', String(e));
        return {success: false, message: e};
    }
}

export {
    createFridge,
    getFridgeAll,
    deleteFridge,
    updateFridge
}
