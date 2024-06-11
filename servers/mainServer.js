import express from 'express'
import ProductosRoutes from '../routes/productos.routes.js';

const app = express();
const PORT = 8080;

const productos = new ProductosRoutes();
app.use("/productos",productos.router);

app.listen(PORT,()=> console.log(`escuchando en http://localhost:${PORT}`));