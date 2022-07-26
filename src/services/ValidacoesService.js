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
        return emailValidado.test(email)
    }

    /**
     * Validação do telefone do usuário utilizando parseInt
     * @param {string} telefone 
     * @returns boolean
     */
    static validaTelefone(telefone) {
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
}

export default ValidacoesService