const Cidade = require('../models/Cidade');
const defaults = require('../Utils/Defaults');

class EnderecoController {

    static separaEndereco(enderecoCompleto) {
        if(typeof enderecoCompleto !== 'string') {
            enderecoCompleto = `${enderecoCompleto}`;
        }
        let newAddr = enderecoCompleto.split(',');
        let validaBloco1 = newAddr[newAddr.length-3] && newAddr[newAddr.length-3].match(/\d{1,}/g);
        let validaBloco2 = newAddr[newAddr.length-2];
        let validaBloco3 = newAddr[newAddr.length-1];
        let validaBloco4 = validaBloco3 && newAddr[newAddr.length-1].split(' ')[2];
        return {
            _rua : validaBloco1 ? newAddr[newAddr.length-3].match(/\D+/g)[0].trim() : defaults.rua,
            _numero : validaBloco1 ? newAddr[newAddr.length-3].match(/\d{1,}/g)[0] : defaults.numero,
            _bairro : validaBloco1 ? newAddr[newAddr.length-3].match(/\D+/g)[1].trim() : defaults.bairro,
            _cidade : new Cidade(validaBloco2 ? newAddr[newAddr.length-2].trim() : ''),
            _estado : validaBloco3 ? newAddr[newAddr.length-1].split(' ')[1].trim() : defaults.estado,
            _cep : validaBloco4 ? newAddr[newAddr.length-1].split(' ')[2].replace(/[^\d]+/g,'') : defaults.cep,
            _obs : enderecoCompleto
        };
    }

    static  retornaEndereco(enderecoCompleto){
        if (enderecoCompleto) {
            return this.separaEndereco(enderecoCompleto);
        } else {
            return this.retornaEnderecoDefault();
        }
    }

    static retornaEnderecoDefault() {
        return {
            _rua : defaults.rua,
            _numero : defaults.numero,
            _bairro : defaults.bairro,
            _cidade : new Cidade(),
            _estado : defaults.estado,
            _cep : defaults.cep,
            _obs: defaults.naodefinido
        };
    }

    static jsonObject(endereco){
        return {
            rua : endereco.rua,
            numero : endereco.numero,
            bairro : endereco.bairro,
            cidade : endereco.cidade.jsonObjectReturn(),
            estado : endereco.estado,
            cep : endereco.cep,
            obs : endereco.obs
        }
    }
}
module.exports = EnderecoController;