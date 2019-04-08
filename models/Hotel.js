const Cidade = require('../models/Cidade');
const defaults = require('../Utils/Defaults');
const FunctionsUtils = require('../Utils/FunctionsUtils');
const cidadesCodigo = require('../Utils/codigocidade');

class Hotel {

    constructor(nome, cnpj) {
        Object.assign(this, {
            _nome : nome,
            _cnpj : cnpj,
        });
    }

    jsonObject(){
        return {
            nome : this._nome,
            cnpj : this._cnpj
        };
    }

    paraJson() {
        return JSON.stringify(this.jsonObject());
    }
}
module.exports = Hotel;