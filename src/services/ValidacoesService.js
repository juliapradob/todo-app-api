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
    static isValid(nome, email, telefone) {
        return this.validaNome(nome) && this.validaTelefone(telefone) && this.validaEmail(email)
    }
}

export default ValidacoesService