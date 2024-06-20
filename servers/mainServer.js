import express from 'express'
import ProductosRoutes from '../routes/productos.routes.js';
import { config } from 'dotenv';
import env from 'env-var'
import AnimalesRoutes from '../routes/animales.routes.js';
import cors from 'cors'
import UsuarioRoutes from '../routes/usuarios.routes.js';

const app = express();
config();
const PORT = env.get('PORT').required().asPortNumber();

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json({
    type:"*/*"
}))
app.use(cors());

const animales = new AnimalesRoutes();
app.use("/animales",animales.router)

const productos = new ProductosRoutes();
app.use("/productos",productos.router);

const usuarios = new UsuarioRoutes();
app.use("/usuarios", usuarios.router)

app.listen(PORT, () => {
    console.clear
    console.log(`escuchando en http://localhost:${PORT}`)
})