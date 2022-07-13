import UsuarioModel from "../models/UsuarioModel.js"
import ValidacoesService from "../services/ValidacoesService.js"
class Usuarios {
    static rotas(app) { //não quero estanciar, transformar num objeto, apenas usar funções dela
        app.get("/usuarios", (req, res) => {
            const nome = "Julia"
            if (ValidacoesService.validaNome(nome)) {
                const usuario = new UsuarioModel("Julia", "julia@email.com", "11994567053")
                res.send(usuario)
            } else {
                res.status(400).send("Erro")
            }
            // res.send("rota usuários")
        })
    }
}

export default Usuarios //exportar a classe Usuários