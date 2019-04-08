const DateConverter = require('../Utils/DateConverter');
const Cidade = require('../models/Cidade');
const defaults = require('../Utils/Defaults');
const FunctionsUtils = require('../Utils/FunctionsUtils');
const cidadesCodigo = require('../Utils/codigocidade');

class DataCheckController {

    static jsonObject(dataCheck){
        return {
            check_in_date : (typeof dataCheck.checkInDate !== 'string') ? DateConverter.dataParaTexto(dataCheck.checkInDate) : dataCheck.checkInDate,
            check_out_date : (typeof dataCheck.checkOutDate !== 'string') ? DateConverter.dataParaTexto(dataCheck.checkOutDate) : dataCheck.checkOutDate,
        }
    }

    static retornaDataCheck(checkInDate='',checkOutDate=''){
        if(!checkInDate && !checkOutDate){
            return this.retornaDataCheckDefault();
        } else {
            return {
                _checkInDate : checkInDate ? DateConverter.textoParaData(checkInDate) : defaults.checkIn,
                _checkOutDate : checkOutDate ? DateConverter.textoParaData(checkOutDate) : defaults.checkOut
            };
        }
    }

    static retornaDataCheckDefault() {
        return {
            _checkInDate : defaults.checkIn,
            _checkOutDate : defaults.checkOut
        };
    }
}
module.exports = DataCheckController;