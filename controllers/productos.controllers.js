import {pool} from '../database/connectionMySql.js'

export default class ProductosControllers{
    getTodosLosProductos= async (req,res)=>{
        try {
            const [results] = await pool.query("select * from productos;");
            res.status(200).send(results)
        } catch (error) {
            console.error(error);
        }
    }
    getProductoPorAnimal= async(req,res)=>{
        const idAnimal = req.params.idAnimal;
        try {
            const [results] = await pool.query(`select * from productos where idAnimal_PR = ${idAnimal};`);
            if(results.length>0){
                res.status(200).send(results);
            }else{
                res.status(404).send("Not Found");
            }
        } catch (error) {
            res.status(404).send("Not Found");
        }
    }
}