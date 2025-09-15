function pesquisarPessoaPorCPF(cpf) {
    const pessoas = [
        {
            nome: 'Luna',
            cpf: '123456789',
            frutasFavoritas: ['Mamão', 'Pera'], 
        },

        {
            nome: 'Ricardo',
            cpf: '321654987',
            frutasFavoritas: ['Melão', 'Abacaxi'],
        },

        {
            nome: 'Thiago',
            cpf: '741258963',
            frutasFavoritas: ['Goiaba', 'Maracujá'],
        },

        {
            nome: 'Iasmin',
            cpf: '369852147',
            frutasFavoritas: ['Cereja', 'Carambola'],
        },

        {
            nome: 'Joicy',
            cpf: '142753869',
            frutasFavoritas: ['Uva', 'Melancia'],
        },

        {
            nome: 'Luana',
            cpf: '968753241',
            frutasFavoritas: ['Maçã', 'Pêssego'],
        }
    ]

    for (let indice = 0; indice < pessoas.length; indice++) {
        if (cpf == pessoas[indice].cpf) {
            return pessoas[indice]
        }
    }

    return 'CPF não encontrado. Digite um CPF válido.'
}

module.exports = {
    pesquisarPessoaPorCPF
}