class Usuarios {
    static rotas(app) { //não quero estanciar, transformar num objeto, apenas usar funções dela
        app.get("/usuarios", (req, res) => {
            res.send("rota usuários")
        })
    }
}

export default Usuarios //exportar a classe Usuários