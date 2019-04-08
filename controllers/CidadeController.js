const Cidade = require('../models/Cidade');
const defaults = require('../Utils/Defaults');
const FunctionsUtils = require('../Utils/FunctionsUtils');
const cidadesCodigo = require('../Utils/codigocidade');

class CidadeController {

    static jsonObject(cidade){
        return {
            nome : cidade.nome,
            codigo : cidade.codigo
        }
    }

    static retornaCidade(nome=''){
        if(nome){
            return this.retornaCidadeComCodigo(nome);
        } else {
            return this.retornaCidadeDefault();
        }
    }

    static retornaCidadeComCodigo(cidade) {
        let codigoCidade = '';
        let cidadeObj = {
            _nome : cidade ? cidade : defaults.cidade,
        };
        cidadesCodigo
            .filter(item => item.cidade === FunctionsUtils.retirarAcentuacao(cidade.toLowerCase()))
            .map(item => codigoCidade = item.id);

        if(codigoCidade) {
            Object.assign(cidadeObj, {_codigo: codigoCidade});
        } else {
            Object.assign(cidadeObj, {_codigo: defaults.codigoCidade});
        }
        return cidadeObj;
    }

    static retornaCidadeDefault() {
        return {
            _nome : defaults.cidade,
            _codigo : defaults.codigoCidade
        };
    }
}
module.exports = CidadeController;