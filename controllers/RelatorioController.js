const Cidade = require('../models/Cidade');
const defaults = require('../Utils/Defaults');
const FunctionsUtils = require('../Utils/FunctionsUtils');
const cidadesCodigo = require('../Utils/codigocidade');
const DadosRelatorioController = require('./DadosRelatorioController');

class RelatorioController {

    static retornaRelatorio(relatorio) {
        return relatorio.retornaRelatorioController();
    }

    static jsonObject(hotel){
        return {
            nome : hotel.nome,
            cnpj : hotel.cnpj
        }
    }
}
module.exports = RelatorioController;