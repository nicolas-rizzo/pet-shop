import {pool} from '../database/connectionMySql.js'

export default class ProductosControllers{

    getTodosLosProductos= async (req,res)=>{
        try {
            const [results] = await pool.query("select * from productos;");
            res.status(200).send(results)
        } catch (error) {
            res.status(404).send("Not Found");
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

    getProductosRandom=async(req,res)=>{
        try {
            const [results] = await pool.query("select * from productos order by rand() limit 3;");
            res.status(200).send(results);
        } catch (error) {
            res.status(404).send("Not Found");
        }
    }

    getProductosPorId=async(req,res)=>{
        const idProducto = req.params.idProducto;
        try {
            const [results] = await pool.query(`select * from productos where idProducto_PR = ${idProducto};`);
            if(results.length>0){
                res.status(200).send(results[0]);
            }else{
                res.status(404).send("Not Found");
            }
        } catch (error) {
            res.status(404).send("Not Found");
        }
        
    }
    
}