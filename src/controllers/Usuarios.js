import Database from "../infra/Database.js"
import UsuarioModel from "../models/UsuarioModel.js"
import ValidacoesUsuario from "../services/ValidacoesUsuario.js"
import DatabaseMetodos from "../DAO/DatabaseMetodos.js"
class Usuarios {
    static rotas(app) { 
        app.get("/usuarios", async (req, res) => {
            const response = await DatabaseMetodos.listarTodosUsuarios()
            res.status(200).json(response)
        })

        app.get("/usuarios/:id", async (req, res) => { 
            try {
                const usuario = await DatabaseMetodos.listarUsuarioPorId(req.params.id)
                if (!usuario) {
                    throw new Error("Usuário não encontrado para esse Id")
                }
                res.status(200).json(usuario)
            } catch (e) {
                res.status(404).json(e.message)
            }
            
        })

        app.get("/usuarios/email/:email", (req, res) => {
            if (ValidacoesService.validaEmail(req.params.email)) {
                const email = DatabaseMetodos.filtraEmail(req.params.email, Database.Usuarios)
                res.status(200).json(email)
            } else {
                res.status(404).json({Error: "Email não encontrado"})
            }
        })

        app.post("/usuarios", async (req, res) => {
            const usuarioIsValid = ValidacoesUsuario.usuarioIsValid(...Object.values(req.body))
            try {
                if (usuarioIsValid) {
                    const usuario = new UsuarioModel(...Object.values(req.body))
                    const response = await DatabaseMetodos.inserirUsuario(usuario)
                    res.status(201).json(response)
                } else {
                    throw new Error("Requisição incompleta, revise o corpo da mesma")
                }
            } catch(e) {
                res.status(400).json(e.message)
            }            
        })

        app.put("/usuarios/:id", (req, res) => {
            const usuarioIsValid = ValidacoesService.usuarioIsValid(...Object.values(req.body))

            if (usuarioIsValid) {
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseMetodos.atualizarPorId(req.params.id, usuario)
                res.status(201).json(response) 
            } else {
                res.status(400).json({Error: "Usuário não foi atualizado"})
            }            
        })

        app.put("/usuarios/email/:email", (req, res) => {
            const usuarioIsValid = ValidacoesService.usuarioIsValid(...Object.values(req.body))

            if (usuarioIsValid) {
                const usuario = new UsuarioModel(...Object.values(req.body))
                const response = DatabaseMetodos.atualizarPorEmail(req.params.email, usuario)
                res.status(201).json(response)
            } else {
                res.status(400).json({Error: "Usuário não foi atualizado"})
            }
        })

        app.delete("/usuarios/:index", (req, res) => {
            if (ValidacoesService.validaIndex(req.params.index, Database.Usuarios)) {
                const usuario = DatabaseMetodos.deletaUsuarioPorId(req.params.index)
                res.status(200).json(usuario)
            } else {
                res.status(404).json({Error: "Usuário não encontrado"})
            }
        })
    }
}

export default Usuarios 