import Routes from "./Routes.js";
import AnimalesControllers from "../controllers/animales.controllers.js";
import {authenticateAdmin, authenticateToken} from "../middleware/auth.js";

export default class AnimalesRoutes extends Routes{
    
    constructor(){
        super();
        this.animalesC = new AnimalesControllers();
        this.getRoutes();
    }

    getRoutes(){
        this.router
            .get("/",this.animalesC.getTodosLosAnimales)
            .post("/add", authenticateToken, authenticateAdmin, this.animalesC.create)
    }
}