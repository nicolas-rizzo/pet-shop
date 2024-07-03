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

    create = async (req, res) => {
        const { nombre } = req.body

        try {
            const [result] = await pool.query('insert into animales (nombre_AN) values(?);', [nombre])

            if (result.affectedRows > 0) res.status(200).json({ mensaje: 'Animal agregado con éxito.' })
            else res.status(404).json({ mensaje: 'Error al intentar agregar animal, reintente mas tarde.' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ mensaje: 'Error al intentar agregar animal, reintente mas tarde.' })
        }
    }
}