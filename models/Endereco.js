const FunctionsUtils = require('../Utils/FunctionsUtils');
const EnderecoController = require('../controllers/EnderecoController');

class Endereco {

    constructor(enderecoCompleto = '') {
        Object.assign(this, EnderecoController.retornaEndereco(enderecoCompleto));
    }

    get numero() {
        return this._numero;
    }

    get rua() {
        return this._rua;
    }

    get bairro() {
        return this._bairro;
    }

    get cidade() {
        return this._cidade;
    }

    get cidadeSAc() {
        return FunctionsUtils.retirarAcentuacao(this._cidade);
    }

    get cep() {
        return this._cep;
    }

    get estado() {
        return this._estado;
    }

    get obs() {
        return this._obs;
    }

    jsonObjectReturn(){
        return EnderecoController.jsonObject(this);
    }

    paraJson() {
        return JSON.stringify(this.jsonObjectReturn());
    }
}

module.exports = Endereco;
