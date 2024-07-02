import Routes from "./Routes.js";
import ProductosControllers from "../controllers/productos.controllers.js";
import {authenticateAdmin, authenticateToken} from "../middleware/auth.js";

export default class ProductosRoutes extends Routes{

    constructor(){
        super();
        this.productosC = new ProductosControllers();
        this.getRoutes();
    }

    getRoutes=()=>{
        this.router
            .get("/",this.productosC.getTodosLosProductos)
            .get("/random",this.productosC.getProductosRandom)
            .get("/animal/:idAnimal",this.productosC.getProductoPorAnimal)
            .get("/:idProducto",this.productosC.getProductosPorId)
            .delete("/delete/:idProducto",authenticateToken,authenticateAdmin,this.productosC.EliminarProducto)
            .put("/edit",authenticateToken,authenticateAdmin,this.productosC.editarProducto)
    }
}