import ValidacoesUsuarios from "../services/ValidacoesUsuarios.js"

test("Validar se o nome tem 3 caracteres ou mais", () => {
    expect(ValidacoesUsuarios.validaNome("Julia")).toBe(true)
});

test("Validar se o nome tem 3 caracteres ou mais", () => {
    expect(ValidacoesUsuarios.validaNome("Ju")).toBe(false)
});

test("Validar se o nome tem 3 caracteres ou mais", () => {
    expect(ValidacoesUsuarios.validaNome("Léo")).toBe(true)
});

test("Validar se o email é válido", () => {
    expect(ValidacoesUsuarios.validaEmail("julia.com.br")).toBe(false)
});

test("Validar se o email é válido", () => {
    expect(ValidacoesUsuarios.validaEmail("julia@gmail.com")).toBe(true)
});

test("Validar se o email é válido", () => {
    expect(ValidacoesUsuarios.validaEmail("fabio_fabio@yahoo.com")).toBe(true)
});

test("Validar se o telefone é válido", () => {
    expect(ValidacoesUsuarios.validaTelefone("1234567")).toBe(false)
});

test("Validar se o telefone é válido", () => {
    expect(ValidacoesUsuarios.validaTelefone("12345678")).toBe(true)
});

test("Validar se o telefone é válido", () => {
    expect(ValidacoesUsuarios.validaTelefone("994567053")).toBe(true)
});