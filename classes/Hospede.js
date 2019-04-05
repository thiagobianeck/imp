const DateConverter = require('../Utils/DateConverter');

class Hospede {

    constructor(dataCheck, uh, nome, endereco, docto, dataNascimento = '', nacionalidade = '', profissao = '', email = '') {
        Object.assign(this, {
            _dataCheck : dataCheck,
            _uh : uh,
            _nome : nome,
            _dataNascimento : (dataNascimento) ? DateConverter.textoParaData(dataNascimento) : '',
            _nacionalidade : nacionalidade,
            _docto : docto,
            _profissao : profissao,
            _email : email,
            _endereco : endereco
        });
    }

    get dataCheck() {
        return this._dataCheck;
    }

    get nome() {
        return this._nome;
    }

    get dataNascimento() {
        return this._dataNascimento;
    }

    get nacionalidade() {
        return this._nacionalidade;
    }

    get docto() {
        return this._docto;
    }

    get profissao() {
        return this._profissao;
    }

    get email() {
        return this._email;
    }

    get endereco() {
        return this._endereco;
    }

    paraJson() {
        return '{"hospede" : ' + this.paraString() + '}';
    }

    paraString() {
        // console.log(this.endereco.paraString());
        // console.log('-------------------------------');
        return '{ "datasCheck" : ' + this.dataCheck.paraString() + ',' +
            '"nome" : "' + this.nome + '",' +
            '"data_nascimento" : "' + DateConverter.dataParaTexto(this.dataNascimento) + '",' +
            '"nacionalidade" : "' + this.nacionalidade + '",' +
            '"documento" : ' + this.docto.paraString() + ','+
            '"profissao" : "' + this.profissao + '",' +
            '"email" : "' + this.email + '", ' +
            '"endereco" : ' + this.endereco.paraString() + '}';
    }
}

module.exports = Hospede;
