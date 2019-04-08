const XLSX  = require('xlsx');
const nomeArquivo = 'relatorio.xls';
const workbook = XLSX.readFile(nomeArquivo);
const Endereco = require('./models/Endereco');
const utils = require('./Utils/FunctionsUtils');
const defaults = require('./Utils/Defaults');
const DatasCheck = require('./models/DataCheck');
const Documento = require('./models/Documento');
const Hotel = require('./models/Hotel');
const Hospede = require('./models/Hospede');
const Planilha = require('./models/Planilha');
const Relatorio = require('./models/Relatorio');
const DadosRelatorioController = require('./controllers/DadosRelatorioController');

function processaExcel(planilha, relatorio = '', validaCPF = false) {

            let worksheet = workbook.Sheets[planilha.nome];
            let rangeHospede = XLSX.utils.sheet_to_json(worksheet, {header: ["dados"], range : planilha.range});
            let registro = 0;

            return new Promise((resolve, reject) => {

                try {
                    rangeHospede.forEach(function (item) {
                        let linhaAtual = item['__rowNum__'];
                        let celula = planilha.celulas(linhaAtual);

                        let valida = utils.validaWorkSheet(worksheet[celula.tipoDocto]) &&
                            utils.validaWorkSheet(worksheet[celula.tipoDocto]) === 'CPF' &&
                            utils.validaWorkSheet(worksheet[celula.docto]);

                        if (valida || !validaCPF){
                            let nomeHospede = item.dados;
                            let data_nascimento = utils.validaWorkSheet(worksheet[celula.dataNasc]);
                            let nacionalidade = utils.validaWorkSheet(worksheet[celula.nacionalidade]);
                            let uh = utils.validaWorkSheet(worksheet[celula.uh]);
                            let profissao = utils.validaWorkSheet(worksheet[celula.profissao]);
                            let email = utils.validaWorkSheet(worksheet[celula.email]);

                            let docto = new Documento(
                                utils.validaWorkSheet(worksheet[celula.tipoDocto]),
                                utils.validaWorkSheet(worksheet[celula.docto])
                            );
                            let datasCheck = new DatasCheck(
                                utils.validaWorkSheet(worksheet[celula.dataCheckIn]),
                                utils.validaWorkSheet(worksheet[celula.dataCheckOut])
                            );
                            let endereco = new Endereco(utils.validaWorkSheet(worksheet[celula.endereco]));
                            let hospede = new Hospede(datasCheck,uh,nomeHospede,endereco,docto,data_nascimento,nacionalidade,profissao,email);

                            relatorio.addHospedes(hospede, registro);
                            registro++;
                        }
                    });
                    resolve(relatorio);

                }catch(e) {
                    reject(e);
                }

            });
}

function processaPlanilhas(relatorio, linhas = '', validaCPF = false){
    let numPlanilhas = workbook.Props.Worksheets;
        for (let i = 0; i < numPlanilhas; i++) {
            let planilha = new Planilha(null,linhas,i);
            planilha.setnome(workbook.SheetNames[planilha.indexPlanilha]);
            processaExcel(planilha, relatorio, validaCPF);
        }
    return relatorio;
}

function geraRelatorioHospedes(relatorio, linhas = '', validaCPF = false) {
    let relatorioHospedes = processaPlanilhas(relatorio,linhas, validaCPF);
    return relatorioHospedes.hospedesJson;
}


function geraRelatorioServerJson(relatorio, linhas = '', validaCPF = false){
    let relatorioGeral = processaPlanilhas(relatorio,linhas, validaCPF);
    return relatorioGeral.relatorioCompleto;
}

module.exports = {geraRelatorioHospedes, geraRelatorioServerJson};



