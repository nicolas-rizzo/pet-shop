import Routes from "./Routes.js";
import ProductosControllers from "../controllers/productos.controllers.js";

export default class ProductosRoutes extends Routes{

    constructor(){
        super();
        this.productosC = new ProductosControllers();
        this.getRoutes();
    }

    getRoutes=()=>{
        this.router.get("/",this.productosC.getTodosLosProductos)
    }
}