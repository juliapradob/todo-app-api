class ValidacoesService {
    /**
     * 
     * @param {string} nome 
     * @returns boolean
     */
    static validaNome(nome) {
        return nome.length >= 2
    }

    /**
     * 
     * @param {string} email 
     * @returns boolean
     */
    static validaEmail(email) {
        return true
    }

    /**
     * 
     * @param {string} telefone 
     * @returns boolean
     */
    static validaTelefone9(telefone) {
        return true
    }

    /**
     * 
     * @param {string} nome 
     * @param {string} email 
     * @param {string} telefone 
     * @returns boolean
     */
    static usuarioIsValid(nome, email, telefone) {
        return this.validaNome(nome) && this.validaTelefone(telefone) && this.validaEmail(email)
    }

    /**
     * 
     * @param {string} titulo 
     * @returns boolean
     */
    static validaTitulo(titulo) {
        return titulo.length >= 1
    }

    /**
     * 
     * @param {string} descricao 
     * @returns boolean
     */
    static validaDescricao(descricao) {
        return descricao.length >= 2
    }

    /**
     * 
     * @param {string} titulo 
     * @param {string} descricao 
     * @returns boolean
     */
    static tarefaIsValid(titulo, descricao) {
        return this.validaTitulo(titulo) && this.validaDescricao(descricao)
    }
}

export default ValidacoesService