class Defaults {

    static hospede(){
        return { datasCheck: { checkIn: '27/03/1980', checkOut: '31/12/1918' },
            nome: 'Fulano de Tal da Silva',
            uh : '9999',
            data_nascimento: '27/03/1984',
            nacionalidade: 'Brasileiro',
            documento: { tipoDocto: 'CPF', numeroDocto: '123456789' },
            profissao: 'Programador',
            endereco:
                { rua: 'Rua João Fulano',
                    numero: '41',
                    bairro: 'Centro',
                    cidade: {
                        nome : 'Nova York',
                        codigo : '9999'
                    },
                    estado: 'AM',
                    cep: '69260000' } }
    }

    static datasCheck(){
        return this.hospede().datasCheck;
    }

    static endereco(){
        return this.hospede().endereco;
    }

    static docto(){
        return this.hospede().documento;
    }

    static cidade(){
        return this.endereco().cidade;
    }
}
module.exports = Defaults;
