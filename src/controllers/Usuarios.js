import Database from "../infra/Database.js"
import UsuarioModel from "../models/UsuarioModel.js"
import ValidacoesUsuario from "../services/ValidacoesUsuario.js"
import DatabaseUsuariosMetodos from "../DAO/DatabaseUsuariosMetodos.js"
class Usuarios {
    static rotas(app) { 
        app.get("/usuarios", async (req, res) => {
            const response = await DatabaseUsuariosMetodos.listarTodosUsuarios()
            res.status(200).json(response)
        })

        app.get("/usuarios/:id", async (req, res) => { 
            try {
                const usuario = await DatabaseUsuariosMetodos.listarUsuarioPorId(req.params.id)
                if (!usuario) {
                    throw new Error("Usuário não encontrado para esse Id")
                }
                res.status(200).json(usuario)
            } catch (e) {
                res.status(404).json(e.message)
            }
            
        })

        app.post("/usuarios", async (req, res) => {
            const usuarioIsValid = ValidacoesUsuario.usuarioIsValid(...Object.values(req.body))
            try {
                if (usuarioIsValid) {
                    const usuario = new UsuarioModel(...Object.values(req.body))
                    const response = await DatabaseUsuariosMetodos.inserirUsuario(usuario)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição incompleta, revise o corpo da mesma")
                }
            } catch(e) {
                res.status(400).json(e.message)
            }            
        })

        app.put("/usuarios/:id", async (req, res) => {
            const usuarioIsValid = ValidacoesUsuario.usuarioIsValid(...Object.values(req.body))
            
            try {
                if (usuarioIsValid) {
                    const usuario = new UsuarioModel(...Object.values(req.body))
                    const response = await DatabaseUsuariosMetodos.atualizarPorId(req.params.id, usuario)
                    res.status(201).json(response) 
                }
            } catch (e) {
                res.status(400).json({Error: "Usuário não foi atualizado"})
            }  
        })

        app.delete("/usuarios/:id", async (req, res) => {
            try {
                const usuario = await DatabaseUsuariosMetodos.deletaUsuarioPorId(req.params.id)
                if (!usuario) {
                    throw new Error("Usuário não encontrado para esse Id")
                }
                res.status(200).json(usuario)
            } catch (e) {
                res.status(404).json(e.message)
            }
        })
    }
}

export default Usuarios 