import Routes from "./Routes.js";
import UsuarioController from "../controllers/usuarios.controller.js";
import {authenticateToken} from '../middleware/auth.js';

export default class UsuarioRoutes extends Routes {
    constructor() {
        super();
        this.userController = new UsuarioController();
        this.getRoutes();
    }

    getRoutes() {
        this.router
            .post("/registrar",this.userController.create)
            .post("/login", this.userController.login)
            .post("/logout", this.userController.logout)
            .get("/", authenticateToken, this.userController.getUserData)
    }
}