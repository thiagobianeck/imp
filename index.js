const XLSX  = require('xlsx');
const fs = require('fs');
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
const geraRelatorio = require('./geradorJson');


const relatorio = new Relatorio(nomeArquivo);
const relatorioCompleto = geraRelatorio.geraRelatorioServerJson(relatorio);

fs.writeFile(__dirname + '/relatorioCompleto.json', relatorioCompleto, err => {
    console.log(err || 'Arquivo salvo!')
});

