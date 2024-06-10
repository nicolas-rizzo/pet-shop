import { Router } from "express";

export const productosRoutes = Router();

productosRoutes
    .get("/",(req,res)=>{res.send("GET PRODUCTOS");})