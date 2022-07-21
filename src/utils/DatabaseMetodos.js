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

    /**
     * 
     * @returns Array<object>
     */
    static listarEmails() {
        return Database.Usuarios.email
    }

    /**
     * 
     * @param {string} email 
     * @param {array<object>} database 
     * @returns Array<object>
     */
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

    /**
     * 
     * @param {number} id 
     * @returns Array<object>
     */
    static deletaUsuarioPorId(id) {
        const usuarios = Database.Usuarios.filter((usuario, index) => {
            return id != index
        })
        Database.Usuarios = usuarios
        return {id: id, success: "Usuário excluído com sucesso"}
    }

    /**
     * 
     * @param {number} id 
     * @param {object} usuario 
     * @returns Array<object>
     */
    static atualizarPorId(id, usuario) {
        const newUsuario = Database.Usuarios.map((usuario, index) => {
            if (index == id) {
                return usuario
            }
        })
        Database.Usuarios = newUsuario
        return {success: "Usuário atualizado", id: id}
    }

    static atualizarPorEmail(email, usuario) {
        const newUsuario = Database.Usuarios.map((emailOriginal) => {
            if (emailOriginal.email == email) {
                return usuario
            }
            return emailOriginal
        })
        Database.Usuarios = newUsuario
        return {success: "Email atualizado", email: email}
    }
}

export default DatabaseMetodos