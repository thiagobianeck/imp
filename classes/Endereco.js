const Defaults = require('../Utils/Defaults');
const FunctionsUtils = require('../Utils/FunctionsUtils');
const Cidade = require('../classes/Cidade');

class Endereco {

    constructor(enderecoCompleto = '' ) {
        if (enderecoCompleto) {
            if(typeof enderecoCompleto !== 'string') {
                enderecoCompleto = `${enderecoCompleto}`;
            }
            this.separaEndereco(enderecoCompleto);
        } else {
            let enderecoDefault = Defaults.endereco();
            Object.assign(this, {
                _rua : enderecoDefault.rua,
                _numero : enderecoDefault.numero,
                _bairro : enderecoDefault.bairro,
                _cidade : enderecoDefault.cidade,
                _estado : enderecoDefault.estado,
                _cep : enderecoDefault.cep,
            });
        }
    }

    separaEndereco(endereco) {
        let newAddr = endereco.split(',');
        Object.assign(this, {
            _rua : newAddr[newAddr.length-3].match(/\D+/g) ? newAddr[newAddr.length-3].match(/\D+/g)[0].trim() : '',
            _numero : newAddr[newAddr.length-3].match(/\d{1,}/g) ? newAddr[newAddr.length-3].match(/\d{1,}/g)[0] : '',
            _bairro : newAddr[newAddr.length-3].match(/\D+/g)[1] ? newAddr[newAddr.length-3].match(/\D+/g)[1].trim() : '',
            _cidade : new Cidade(newAddr[newAddr.length-2].trim()),
            _estado : newAddr[newAddr.length-1].split(' ')[1] ? newAddr[newAddr.length-1].split(' ')[1].trim() : '',
            _cep : newAddr[newAddr.length-1].split(' ')[2] ? newAddr[newAddr.length-1].split(' ')[2].replace(/[^\d]+/g,'') : '',
            _obs : endereco
        });
        // Object.freeze(this);
    }

    get enderecoCompleto() {
        return this._enderecoCompleto;
    }

    get numero() {
        return this._numero;
    }

    get rua() {
        return this._rua;
    }

    get bairro() {
        return this._bairro;
    }

    get cidade() {
        return this._cidade;
    }

    get cidadeSAc() {
        return FunctionsUtils.retirarAcentuacao(this._cidade);
    }

    get cep() {
        return this._cep;
    }

    get estado() {
        return this._estado;
    }

    paraJson() {
        return '{"endereco" : '+this.paraString()+'}';
    }


    paraString() {
        return '{"rua": "'+this.rua+'", "numero": "'+this.numero+'","bairro": "'+this.bairro+'","cidade": '+this.cidade.paraString()+',"estado": "'+this.estado+'","cep": "'+this.cep+'"}';
    }
}

module.exports = Endereco;
