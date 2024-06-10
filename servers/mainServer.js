import express from 'express'
import { productosRoutes } from '../routes/productosRoutes.js';

const app = express();
const PORT = 8080;

app.use("/productos",productosRoutes);

app.listen(PORT,()=> console.log(`escuchando en http://localhost:${PORT}`));