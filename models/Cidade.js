const CidadeController = require('../controllers/CidadeController');

class Cidade {

    constructor(nome = ''){
        Object.assign(this, CidadeController.retornaCidade(nome));
    }

    get nome() {
        return this._nome;
    }

    get codigo() {
        return this._codigo;
    }

    jsonObjectReturn(){
        return CidadeController.jsonObject(this);
    }

    paraJson() {
        return JSON.stringify(this.jsonObjectReturn());
    }

}
module.exports = Cidade;