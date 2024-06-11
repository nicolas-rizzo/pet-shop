import Routes from "./Routes.js";

export default class ProductosRoutes extends Routes{

    constructor(){
        super();
        this.getRoutes();
    }

    getRoutes(){
        this.router.get("/",(req,res)=>{
            res.send("get productos!!!")
        })
    }
}