const DateConverter = require('../Utils/DateConverter');
const Cidade = require('../models/Cidade');
const Hotel = require('../models/Hotel');
const defaults = require('../Utils/Defaults');
const utils = require('../Utils/FunctionsUtils');
const cidadesCodigo = require('../Utils/codigocidade');
const XLSX  = require('xlsx');

class DadosRelatorioController {

    constructor(filename) {
        const workbook = XLSX.readFile(filename);
        let worksheet = workbook.Sheets[workbook.SheetNames[0]];
        Object.assign(this, {
            _periodoInicio : DateConverter.textoParaData(utils.validaWorkSheet(worksheet[this.celula.periodo]).split(' a ')[0]),
            _periodoFinal : DateConverter.textoParaData(utils.validaWorkSheet(worksheet[this.celula.periodo]).split(' a ')[1]),
            _dataRelatorio : DateConverter.converteDataRelatorio(utils.validaWorkSheet(worksheet[this.celula.dataRelatorio])),
            _hotel : new Hotel(
                utils.validaWorkSheet(worksheet[this.celula.nomeHotel]).split('- CNPJ')[0].trim(),
                utils.validaWorkSheet(worksheet[this.celula.nomeHotel]).match(/[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/g)[0].replace(/[^\d]+/g,''))
        });


    }

    get range(){
        return `B2:B14`;
    }

    get celula(){
        return  {
            nomeHotel : `B2`,
            dataRelatorio : `P2`,
            periodo: `H6`
        };
    }

    // teste(){
    //     // console.log('Teste: ', DateConverter.converteDataRelatorio(this._dataRelatorio));
    //     console.log('Teste: ', this);
    // }

    retornaRelatorio(){
        return {
            _hotel: this._hotel,
            _periodoInicio : this._periodoInicio,
            _periodoFinal : this._periodoFinal,
            _dataRelatorio : this._dataRelatorio
        }
    }

}
module.exports = DadosRelatorioController;