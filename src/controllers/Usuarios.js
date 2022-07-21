import { Database } from "../infra/Database.js"
import UsuarioModel from "../models/UsuarioModel.js"
import ValidacoesService from "../services/ValidacoesService.js"
import DatabaseMetodos from "../utils/DatabaseMetodos.js"
class Usuarios {
    static rotas(app) { //não quero estanciar, transformar num objeto, apenas usar funções dela
        app.get("/usuarios", (req, res) => {
            const response = DatabaseMetodos.listarTodosUsuarios()
            res.status(200).json(response)
        })

        app.get("/usuarios/:id", (req, res) => { // :index - parametro da rota que só existe na requisição
            if (ValidacoesService.validaIndex(req.params.id, Database.Usuarios)) {
                const usuario = DatabaseMetodos.listarUsuarioPorIndex(req.params.id)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({Error: "Usuário não encontrado"})
            }
            
        })

        app.get("/usuarios/email/:email", (req, res) => {
            if (ValidacoesService.validaEmail(req.params.email)) {
                const email = DatabaseMetodos.filtraEmail(req.params.email, Database.Usuarios)
                res.status(200).json(email)
            } else {
                res.status(404).json({Error: "Email não encontrado"})
            }
        })

        app.post("/usuarios", (req, res) => {
            const usuarioIsValid = ValidacoesService.isValid(...Object.values(req.body))

            if (usuarioIsValid) {
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseMetodos.inserirUsuario(usuario)
                res.status(201).json(response) //status 201: criado
            } else {
                res.status(400).json({Error: "Erro"})
            }
        })

        app.put("/usuarios/:id", (req, res) => {
            const usuarioIsValid = ValidacoesService.isValid(...Object.values(req.body))

            if (usuarioIsValid) {
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseMetodos.atualizarPorId(req.params.id, usuario)
                res.status(201).json(response) 
            } else {
                res.status(400).json({Error: "Erro"})
            }            
        })

        app.delete("/usuarios/:index", (req, res) => {
            if (ValidacoesService.validaIndex(req.params.index, Database.Usuarios)) {
                const usuario = DatabaseMetodos.deletaUsuarioPorId(req.params.index)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({Error: "Usuário não encontrado"})
            }
        })

        app
    }
}

export default Usuarios //exportar a classe Usuários