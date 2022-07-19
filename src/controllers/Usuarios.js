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

        app.post("/usuarios", (req, res) => {
            const usuarioIsValid = ValidacoesService.validaNome(req.body.nome) && ValidacoesService.validaTelefone(req.body.telefone)

            if (usuarioIsValid) {
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseMetodos.inserirUsuario(usuario)
                res.status(201).json(response) //status 201: criado
            } else {
                res.status(400).send("Erro")
            }
        })
    }
}

export default Usuarios //exportar a classe Usuários