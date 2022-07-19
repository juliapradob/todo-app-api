import { Database } from "../infra/Database.js";

class DatabaseMetodos {
    static listarTodoOBanco() {
        return Database
    }

    static listarTodosUsuarios() {
        return Database.Usuarios
    }

    static listarTodasTarefas() {
        return Database.Tarefas
    }
    /**
     * 
     * @param {Object} usuario 
     * @returns Object
     */
    static inserirUsuario(usuario) {
        Database.Usuarios = [...Database.Usuarios, usuario] // ou Database.Usuarios.push(usuario)
        return Database.Usuarios
    }

    /**
     * 
     * @param {Object} tarefa 
     * @returns Object
     */
    static inserirTarefa(tarefa) {
        Database.Tarefas = [...Database.Tarefas, tarefa] // ou Database.Tarefas.push(tarefa)
        return Database.Tarefas
    }
}

export default DatabaseMetodos