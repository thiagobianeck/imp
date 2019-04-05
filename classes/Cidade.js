const cidadesCodigo = require('../Utils/codigocidade');
const FunctionsUtils = require('../Utils/FunctionsUtils');
const Defaults = require('../Utils/Defaults');

class Cidade {

    constructor(nome = '') {
        let cidadeDef = Defaults.cidade();
        let codigoCidade = '';
        if(!nome){
            Object.assign(this, {
                _nome : cidadeDef.nome,
                _codigo : cidadeDef.codigo
            });
        } else {
            Object.assign(this, {
                _nome : nome,
            });
            cidadesCodigo
                .filter(item => item.cidade === FunctionsUtils.retirarAcentuacao(this._nome.toLowerCase()))
                .map(item => codigoCidade = item.id);
        }

        if(codigoCidade) {
            Object.assign(this, {_codigo: codigoCidade});
        } else {
            Object.assign(this, {_codigo: cidadeDef.codigo});
        }

    }


    get nome() {
        return this._nome;
    }

    get codigo() {
        return this._codigo;
    }

    paraJson() {
        return '{"cidade" : '+this.paraString()+'}';
    }

    paraString() {
        return '{"nome": "' + this.nome + '", "codigo": "' + this.codigo + '"}';
    }
}
module.exports = Cidade;