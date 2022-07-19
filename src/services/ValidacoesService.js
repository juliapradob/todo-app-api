class ValidacoesService {
    /**
     * Validação do nome do usuário
     * @param {string} nome 
     * @returns boolean
     */
    static validaNome(nome) {
        return nome.length >= 2
    }

    /**
     * Validação do email do usuário utilizando regex
     * @param {string} email 
     * @returns boolean
     */
    static validaEmail(email) {
        const emailValidado = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i
        return emailValidado.teste(email)
    }

    /**
     * Validação do telefone do usuário utilizando parseInt
     * @param {string} telefone 
     * @returns boolean
     */
    static validaTelefone9(telefone) {
        const telefoneValidado = parseInt(telefone)
        return telefoneValidado == telefone
    }

    /**
     * Valida todos os dados do usuário de uma vez só
     * @param {string} nome 
     * @param {string} email 
     * @param {string} telefone 
     * @returns boolean
     */
    static usuarioIsValid(nome, email, telefone) {
        return this.validaNome(nome) && this.validaTelefone(telefone) && this.validaEmail(email)
    }

    /**
     * Valida título da tarefa
     * @param {string} titulo 
     * @returns boolean
     */
    static validaTitulo(titulo) {
        return titulo.length >= 1
    }

    /**
     * Valida descrição da tarefa
     * @param {string} descricao 
     * @returns boolean
     */
    static validaDescricao(descricao) {
        return descricao.length >= 2
    }

    /**
     * Valida todos os dados da tarefa
     * @param {string} titulo 
     * @param {string} descricao 
     * @returns boolean
     */
    static tarefaIsValid(titulo, descricao) {
        return this.validaTitulo(titulo) && this.validaDescricao(descricao)
    }
}

export default ValidacoesService