import { Database } from "../infra/Database.js";

class DatabaseMetodos {
    /**
     * 
     * @returns Array
     */
    static listarTodoOBanco() {
        return Database
    }

    /**
     * 
     * @returns Array<Objects>
     */
    static listarTodosUsuarios() {
        return Database.Usuarios
    }

    /**
     * 
     * @param {number} index 
     * @returns Elemento<Array>
     */
    static listarUsuarioPorIndex(index) {
        return Database.Usuarios[index]
    }

    static listarEmails() {
        return Database.Usuarios.email
    }

    static filtraEmail (email, database) {
        return database.filter((valor) => {
            return valor.email == email
        })
    }

    /**
     * 
     * @returns Array<Objects>
     */
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


    static deletaUsuarioPorId(id) {
        const usuarios = Database.Usuarios.filter((usuario, index) => {
            return id != index
        })
        Database.Usuarios = usuarios
        return {id: id, success: "Usuário excluído com sucesso"}
    }
}

export default DatabaseMetodos