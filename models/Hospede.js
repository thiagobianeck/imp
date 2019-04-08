const DateConverter = require('../Utils/DateConverter');
const HospedeController = require('../controllers/HospedeController');
const defaults = require('../Utils/Defaults');
const DataCheck = require('./DataCheck');
const Documento = require('./Documento');
const Endereco = require('./Endereco');

class Hospede {

    constructor(dataCheck = '', uh = '', nome = '', endereco = '', docto = '', dataNascimento = '', nacionalidade = '', profissao = '', email = '') {
        Object.assign(this, HospedeController.retornaHospede(dataCheck, uh, nome, endereco, docto, dataNascimento, nacionalidade, profissao, email ));
    }


    get uh() {
        return this._uh;
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

    jsonObjectReturn(id){
        return HospedeController.jsonObject(this, id);
    }

    paraJson() {
        return JSON.stringify(this.jsonObjectReturn());
    }

}

module.exports = Hospede;
