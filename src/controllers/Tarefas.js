import TarefaModel from "../models/TarefaModel.js"

class Tarefas {
    static rotas(app) { //não quero estanciar, transformar num objeto, apenas usar funções dela
        app.get("/tarefas", (req, res) => {
            const tarefa = new TarefaModel("Fazer codewars", "Fazer 135 pontos até o final do módulo 4")
            res.send(tarefa)
        })
    }
}

export default Tarefas //exportar a classe Tarefas