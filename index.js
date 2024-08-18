console.log("Api rest node")

import {
    PORT,
} from "./config.js";

import cors from "cors";
import express from "express";
import productosRoutes from "./routes/productos.ruta.js"

const app = express();
app.use(cors());
app.use(productosRoutes)
app.listen(PORT);

console.log("... conectado al puerto 3001")