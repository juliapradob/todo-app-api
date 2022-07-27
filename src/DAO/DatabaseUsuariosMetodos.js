import Database from "../infra/Database.js";

class DatabaseUsuariosMetodos {
    static activePragma(){
        const pragma = "PRAGMA foreign_keys = ON"

        Database.run(pragma, (e)=>{
            if(e){
                console.log(e)
            } else {
                console.log("Chaves estrangeiras estão ativas")
            }
        })
    }

    static createTable(){
        
        this.activePragma()

        const query = `
        CREATE TABLE IF NOT EXISTS usuarios(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            email VARCHAR,
            telefone VARCHAR
        )
        `
        return new Promise((resolve, reject)=>{
            Database.run(query, (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve("Tabela usuários criada com sucesso!")
                }
            })
        })
    }

    static inserirUsuario(usuario){
        const query = `INSERT INTO usuarios (nome, email, telefone) VALUES (?,?,?)`

        return new Promise((resolve, reject)=>{
            Database.run(query, ...Object.values(usuario), (e)=>{
                if(e){
                    reject(e.message)
                } else {
                    resolve({error: false, message: "Usuario cadastrado com sucesso!"})
                }
            })
        })
    }

    static async listarTodosUsuarios() {
        const query = `SELECT * FROM usuarios`;

        return new Promise((resolve, reject) => {
            Database.all(query, (e, result) => {
                if(e) {
                    reject(e.message);
                } else {
                    resolve(result)
                }
            })
        })
    }

    static async listarUsuarioPorId(id) {
        const query = `SELECT * FROM usuarios WHERE id = ?`;

        return new Promise((resolve, reject) => {
            Database.get(query, id, (e, result) => {
                if(e) {
                    reject(e.message);
                } else {
                    resolve(result)
                }
            })
        })
    }

    static async atualizarPorId(body, id) {
        const query = `UPDATE usuarios SET (nome, email, telefone) = (?, ?, ?) WHERE id = ?`;

        return new Promise((resolve, reject) => {
            Database.run(query, [...Object.values(body), id], (e) => {
                if(e) {
                    console.log(e.message)
                    reject(e.message);
                } else {
                    resolve("Usuário atualizado com sucesso")
                }
            })
        })
    }

    static async deletaUsuarioPorId(id) {
        const query = `DELETE FROM usuarios WHERE id = ?`;

        return new Promise((resolve, reject) => {
            Database.get(query, id, (e) => {
                if(e) {
                    reject(e.message);
                } else {
                    resolve("Usuário deletado com sucesso")
                }
            })
        })
    }
}

export default DatabaseUsuariosMetodos