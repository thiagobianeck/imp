const defaults = require('../Utils/Defaults');
const DocumentoController = require('../controllers/DocumentoController');

class Documento {

    constructor(tipoDocto = '', nroDocto = '') {
        Object.assign(this, DocumentoController.retornaDocumento(tipoDocto, nroDocto));
    }

    get tipoDocto() {
        return this._tipoDocto;
    }

    get nroDocto() {
        return this._nroDocto;
    }

    jsonObjectReturn(){
        return DocumentoController.jsonObject(this);
    }

    paraJson() {
        return JSON.stringify(this.jsonObjectReturn());
    }
}

module.exports = Documento;