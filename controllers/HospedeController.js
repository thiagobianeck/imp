const DateConverter = require('../Utils/DateConverter');
const Cidade = require('../models/Cidade');
const Documento = require('../models/Documento');
const DataCheck = require('../models/DataCheck');
const Endereco = require('../models/Endereco');
const defaults = require('../Utils/Defaults');
const FunctionsUtils = require('../Utils/FunctionsUtils');
const cidadesCodigo = require('../Utils/codigocidade');

class HospedeController {


    static retornaHospede(dataCheck, uh, nome, endereco, docto, dataNascimento, nacionalidade, profissao, email){
        return {
            _dataCheck : dataCheck ? dataCheck : new DataCheck(),
            _uh : uh ? uh : defaults.uh,
            _nome : nome ? nome : defaults.nome,
            _dataNascimento : dataNascimento ? DateConverter.textoParaData(dataNascimento) : defaults.data_nascimento,
            _nacionalidade : nacionalidade ? nacionalidade : defaults.nacionalidade,
            _docto : docto ? docto : new Documento(),
            _profissao : profissao ? profissao : defaults.profissao,
            _email : email ? email : defaults.email,
            _endereco : endereco ? endereco : new Endereco()
        }
    }

    static retornaHospedeDefault() {
        return {
            _dataCheck : new DataCheck(),
            _uh : defaults.uh,
            _nome : defaults.nome,
            _dataNascimento : defaults.data_nascimento,
            _nacionalidade : defaults.nacionalidade,
            _docto : new Documento(),
            _profissao : defaults.profissao,
            _email : defaults.email,
            _endereco : new Endereco()
        }
    }

    static jsonObject(hospede, id){
        return {
            id,
            data_check : hospede.dataCheck.jsonObjectReturn(),
            uh : hospede.uh,
            nome : hospede.nome,
            data_nascimento : (typeof  hospede.dataNascimento !== 'string') ? DateConverter.dataParaTexto(hospede.dataNascimento) : hospede.dataNascimento,
            nacionalidade : hospede.nacionalidade,
            docto : hospede.docto.jsonObjectReturn(),
            profissao : hospede.profissao,
            email : hospede.email,
            endereco : hospede.endereco.jsonObjectReturn()
        };
    }
}
module.exports = HospedeController;
