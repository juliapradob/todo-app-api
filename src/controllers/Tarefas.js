import { Database } from "../infra/Database.js"
import TarefaModel from "../models/TarefaModel.js"
import ValidacoesService from "../services/ValidacoesService.js"
import DatabaseMetodos from "../utils/DatabaseMetodos.js"

class Tarefas {
    static rotas(app) { //não quero estanciar, transformar num objeto, apenas usar funções dela
        app.get("/tarefas", (req, res) => {
            const response = DatabaseMetodos.listarTodasTarefas
            res.status(200).json(response)
        })

        app.post("/tarefas", (req, res) => {
            const tarefaIsValid = ValidacoesService.tarefaIsValid(req.body)
            
            if (tarefaIsValid) {
                const tarefa = new TarefaModel(...Object.values(req.body))
                const response = DatabaseMetodos.inserirTarefa(tarefa)
                res.status(201).json(response)
            } else {
                res.status(400).send("Erro")
            }
        })
    }
}

export default Tarefas //exportar a classe Tarefas