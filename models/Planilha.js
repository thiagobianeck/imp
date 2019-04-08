const PlanilhaController = require('../controllers/PlanilhaController');

class Planilha {

    constructor(startLine='', endLine='',indexPlanilha='', colunaRastreio='') {
        Object.assign(this, PlanilhaController.retornaPlanilha(startLine, endLine, indexPlanilha, colunaRastreio));
    }

    get range(){
        return `${this._colunaRastreio}${this._startLine}:${this._colunaRastreio}${this._endLine}`;
    }

    setnome(value){
        if(value){
            Object.assign(this, {_nome : value});
        }
    }

    get nome(){
        return this._nome;
    }

    get startLine() {
        return this._startLine;
    }

    set startLine(value) {
        this._startLine = value;
    }

    get endLine() {
        return this._endLine;
    }

    set endLine(value) {
        this._endLine = value;
    }

    get indexPlanilha() {
        return this._indexPlanilha;
    }

    set indexPlanilha(value) {
        this._indexPlanilha = value;
    }

    get colunaRastreio() {
        return this._colunaRastreio;
    }

    set colunaRastreio(value) {
        this._colunaRastreio = value;
    }

    jsonObjectReturn(){
        return PlanilhaController.jsonObject(this);
    }

    paraJson() {
        return JSON.stringify(this.jsonObjectReturn());
    }

    celulas(linhaAtual){
        return  {
            tipoDocto : `U${linhaAtual+1}`,
            docto : `Y${linhaAtual+1}`,
            dataNasc : `L${linhaAtual+1}`,
            nacionalidade : `R${linhaAtual+1}`,
            uh : `G${linhaAtual+1}`,
            dataCheckIn : `B${linhaAtual+1}`,
            dataCheckOut : `D${linhaAtual+1}`,
            profissao : `O${linhaAtual+1}`,
            email : `C${linhaAtual+3}`,
            endereco : `C${linhaAtual+6}`,
        };
    }

}

module.exports = Planilha;
