class Documento {

    constructor(tipoDocto, nroDocto) {
        Object.assign(this, {
            _tipoDocto : tipoDocto,
            _nroDocto : nroDocto
        });
    }

    get tipoDocto() {
        return this._tipoDocto;
    }

    get nroDocto() {
        return this._nroDocto;
    }

    paraJson() {
        return '{ "documento" : ' + this.paraString() + '}';
    }

    paraString() {
        return '{"tipoDocto" : "' + this.tipoDocto + '",' +
            '"numeroDocto" : "' + this.nroDocto + '"}';
    }
}

module.exports = Documento;