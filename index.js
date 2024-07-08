import express from 'express'
import ProductosRoutes from './routes/productos.routes.js';
import { config } from 'dotenv';
import env from 'env-var'
import AnimalesRoutes from './routes/animales.routes.js';
import cors from 'cors'
import UsuarioRoutes from './routes/usuarios.routes.js';
import cookieParser from 'cookie-parser'

const app = express();
config();
const PORT = env.get('PORT').required().asPortNumber() || process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.urlencoded({ extended:true }))
app.use(express.json({ type:"*/*" }))

//url frontend
const allowedOrigins = ['https://pet-shop-ten-ruddy.vercel.app'];

app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true   
}));

const animales = new AnimalesRoutes();
app.use("/animales",animales.router)

const productos = new ProductosRoutes();
app.use("/productos",productos.router);

const usuarios = new UsuarioRoutes();
app.use("/usuarios", usuarios.router)

app.get("/config", (req, res) => {
    const config = {
      PORT: process.env.PORT,
      HOST_DB: process.env.HOST_DB,
      PORT_DB: process.env.PORT_DB,
      NAME_DB: process.env.NAME_DB,
      USER_DB: process.env.USER_DB
  }

  res.status(200).json(config)
})

app.listen(PORT, () => {
    console.clear()
    console.log(`escuchando en http://localhost:${PORT}`)
})