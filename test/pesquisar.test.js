const { pesquisarPessoaPorCPF } = require ('../src/pesquisar.js')
const { strictEqual } = require ('node:assert')

describe ('Pesquisar', () => {
    it ('Ao informar o CPF da Luna, teremos o seu nome, CPF e frutas favoritas', () => {
        //Arrange
        const cpfPesquisado = '123456789'
        const nomeEsperado = 'Luna'
        const cpfEsperado = '123456789'
        const primeiraFrutaEsperada = 'Mamão'
        const segundaFrutaEsperada = 'Pera'

        //Act
        const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

        //Assert
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)

    })

    it ('Ao informar um CPF inexistente, retornar a mensagem CPF não encontrado. Digite um CPF válido.', () => {
            //Arrange
            const cpfPesquisado = '000000000'
            const mensagemEsperada = 'CPF não encontrado. Digite um CPF válido.'

            //Act
            const pessoa = pesquisarPessoaPorCPF(cpfPesquisado)

            //Assert
            strictEqual(pessoa, mensagemEsperada)
            
    })
})
