const DadosRelatorioController = require('../controllers/DadosRelatorioController');
const DateConverter = require('../Utils/DateConverter');
const defaults = require('../Utils/Defaults');

class Relatorio {

    constructor(nomeArquivo) {
        let dadosRelatorioController = new DadosRelatorioController(nomeArquivo);
        Object.assign(this, dadosRelatorioController.retornaRelatorio());
        Object.assign(this, {_hospedes : []});
        Object.assign(this, {_hospedesJson : []});
    }

    addHospedes(hospede,id){
        this._hospedes.push(hospede);
        this._hospedesJson.push(hospede.jsonObjectReturn(id));
    }

    get hospedes(){
        return this._hospedes;
    }

    get hospedesJsonObj(){
        return this._hospedesJson;
    }

    get hospedesJson(){
        return '{ "hospedes" :' + JSON.stringify(this.hospedesJsonObj) + '}';
    }

    get relatorioCompleto(){
        return '{ "relatorio" : ' + this.paraJson() + ', "hospedes" : ' + JSON.stringify(this.hospedesJsonObj) + ' }'
    }

    get relatorioJson(){
        return '{ "relatorio" :' + this.paraJson() + '}';
    }

    jsonObject(){
        return {
            hotel: this._hotel.jsonObject(),
            periodo_inicio : DateConverter.dataParaTexto(this._periodoInicio),
            periodo_final : DateConverter.dataParaTexto(this._periodoFinal),
            data_relatorio : DateConverter.dataParaTexto(this._dataRelatorio)
        }
    }

    paraJson() {
        return JSON.stringify(this.jsonObject());
    }


}
module.exports = Relatorio;