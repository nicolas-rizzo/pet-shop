import { pool } from "../database/connectionMySql.js"
export default class AnimalesControllers{

    getTodosLosAnimales=async(req,res)=>{
        try {
            const [results] = await pool.query("select * from animales;")
            res.status(200).send(results);
        } catch (error) {
            console.error(error)
            res.status(404).send("Not Found");
        }
    }
}