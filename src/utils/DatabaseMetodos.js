import Database from "../infra/Database.js";

class DatabaseMetodos{
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

    static async buscarTodosUsuarios() {
        const query = `SELECT * FROM usuarios WHERE id > 0`;

        return new Promise((resolve, reject) => {
            try {
                Database.all(query, (e, row) => {
                    if(e) {
                        reject(e.message);
                    } else {
                        resolve(row)
                    }
                })
            } catch(e) {
                console.log(e)
            } 
        })
    }
}

export default DatabaseMetodos