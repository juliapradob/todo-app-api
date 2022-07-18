class ValidacoesService {
    static validaNome(nome) {
        return nome.length >= 2
    }
    static validaEmail(email) {
        return true
    }
    static validaTelefone9(telefone) {
        return true
    }
    static usuarioIsValid(nome, email, telefone) {
        return this.validaNome(nome) && this.validaTelefone(telefone) && this.validaEmail(email)
    }

    static validaTitulo(titulo) {
        return titulo.length >= 1
    }

    static validaDescricao(descricao) {
        return descricao.length >= 2
    }

    static tarefaIsValid(titulo, descricao) {
        return this.validaTitulo(titulo) && this.validaDescricao(descricao)
    }
}

export default ValidacoesService