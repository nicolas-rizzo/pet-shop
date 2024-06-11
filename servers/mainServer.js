import express from 'express'
import ProductosRoutes from '../routes/productos.routes.js';
import { config } from 'dotenv';
import env from 'env-var'

const app = express();
config();
const PORT = env.get('PORT').asPortNumber();

const productos = new ProductosRoutes();
app.use("/productos",productos.router);

app.listen(PORT,()=> console.log(`escuchando en http://localhost:${PORT}`));