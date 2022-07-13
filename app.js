import express from "express";
import * as dotenv from "dotenv";
import Tarefas from "./src/controllers/Tarefas.js"
import Usuarios from "./src/controllers/Usuarios.js"

dotenv.config()

const port = process.env.PORT || 3000 //acessa a variável de ambiente cujo nome é PORT
const app = express()

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})

Tarefas.rotas(app)
Usuarios.rotas(app)