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