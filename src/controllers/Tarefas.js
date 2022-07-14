import TarefaModel from "../models/TarefaModel.js"

class Tarefas {
    static rotas(app) { //não quero estanciar, transformar num objeto, apenas usar funções dela
        app.get("/tarefas", (req, res) => {
            const tarefa = new TarefaModel("Fazer codewars", "Fazer 135 pontos até o final do módulo 4")
            res.status(200).json({...tarefa, verbo: "get"})
        })

        app.post("/tarefas", (req, res) => {
            const tarefa = new TarefaModel("Fazer codewars", "Fazer 135 pontos até o final do módulo 4")
            res.status(201).json({...tarefa, verbo: "post"})
        })
    }
}

export default Tarefas //exportar a classe Tarefas