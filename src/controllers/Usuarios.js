import UsuarioModel from "../models/UsuarioModel.js"
class Usuarios {
    static rotas(app) { //não quero estanciar, transformar num objeto, apenas usar funções dela
        app.get("/usuarios", (req, res) => {
            const usuario = new UsuarioModel("Julia", "julia@email.com", "11994567053")
            res.send(usuario)
        })
    }
}

export default Usuarios //exportar a classe Usuários