import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import Usuarios from "./src/controllers/Usuarios.js"
import DatabaseUsuariosMetodos from "./src/DAO/DatabaseUsuariosMetodos.js";

dotenv.config()

const port = process.env.PORT || 3000
const app = express()

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    DatabaseUsuariosMetodos.createTable()
})

app.use(express.json())

app.use(cors())

Usuarios.rotas(app)