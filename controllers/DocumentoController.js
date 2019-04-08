const Cidade = require('../models/Cidade');
const defaults = require('../Utils/Defaults');
const FunctionsUtils = require('../Utils/FunctionsUtils');
const cidadesCodigo = require('../Utils/codigocidade');

class DocumentoController {



    static retornaDocumento(tipoDocto = '', nroDocto = '') {
        return{
            _tipoDocto : tipoDocto ? tipoDocto : defaults.tipoDocto,
            _nroDocto : nroDocto ? nroDocto : defaults.numeroDocto
        };
    }

    static jsonObject(documento){
        return {
            tipo_docto : documento.tipoDocto,
            numero_docto : documento.nroDocto
        }
    }
}
module.exports = DocumentoController;