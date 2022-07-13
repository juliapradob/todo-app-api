class Tarefas {
    static rotas(app) { //não quero estanciar, transformar num objeto, apenas usar funções dela
        app.get("/tarefas", (req, res) => {
            res.send("rota tarefas")
        })
    }
}

export default Tarefas //exportar a classe Tarefas