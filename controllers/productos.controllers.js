import {pool} from '../database/connectionMySql.js'

export default class ProductosControllers{
    getTodosLosProductos= async (req,res)=>{
        try {
            const [results] = await pool.query("select * from productos;");
            res.send(results)
        } catch (error) {
            console.error(error);
        }
    }
}