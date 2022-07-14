import UsuarioModel from "../models/UsuarioModel.js"
import ValidacoesService from "../services/ValidacoesService.js"
class Usuarios {
    static rotas(app) { //não quero estanciar, transformar num objeto, apenas usar funções dela
        app.get("/usuarios", (req, res) => {
            const nome = "Julia"
            const isValid = ValidacoesService.validaNome(nome)
            
            if (isValid) {
                const usuario = new UsuarioModel(nome, "julia@email.com", "11994567053")
                res.status(200).json({...usuario, verbo: "get"})
            } else {
                res.status(400).send("Erro")
            }
        })

        app.post("/usuarios", (req, res) => {
            const nome = "Julia"
            const isValid = ValidacoesService.validaNome(nome)
            
            if (isValid) {
                const usuario = new UsuarioModel(nome, "julia@email.com", "11994567053")
                res.status(201).json({...usuario, verbo: "post"}) //status 201: criado
            } else {
                res.status(400).send("Erro")
            }
        })
    }
}

export default Usuarios //exportar a classe Usuários