const consultaCep = require('cep-promise');
const XLSX  = require('xlsx');
const workbook = XLSX.readFile('relatorio.xls');
const Endereco = require('./classes/Endereco');
const DatasCheck = require('./classes/CheckInOut');
const Documento = require('./classes/Documento');
const Hospede = require('./classes/Hospede');

function ProcessExcel(linhaFinal, sheet = 0, exigeCPF = true) {
    let selectedSheet = workbook.SheetNames[sheet];
    let worksheet = workbook.Sheets[selectedSheet];
    let coluna = 'I';
    let linhaInicial = 22;
    let range = `${coluna}${linhaInicial}:${coluna}${linhaFinal}`;
    let rangeHospede = XLSX.utils.sheet_to_json(worksheet, {header: ["dados"], range});

    rangeHospede.forEach(function (item, indice) {
        let linhaAtual = item['__rowNum__'];
        let cellTipoDocto = `U${linhaAtual+1}`;
        let cellDocto = `Y${linhaAtual+1}`;

        if ((worksheet[cellTipoDocto] && worksheet[cellTipoDocto].v === "CPF") || !exigeCPF ){

                //Celulas dos itens
                let cellDataNasc = `L${linhaAtual+1}`;
                let cellNacionalidade = `R${linhaAtual+1}`;
                cellTipoDocto = `U${linhaAtual+1}`;
                cellDocto = `Y${linhaAtual+1}`;
                let cellUH = `G${linhaAtual+1}`;
                let cellDataCheckIn = `B${linhaAtual+1}`;
                let cellDataCheckOut = `D${linhaAtual+1}`;
                let cellProfissao = `O${linhaAtual+1}`;
                let cellEmail = `C${linhaAtual+3}`;
                let cellEndereco = `C${linhaAtual+6}`;

                //Campos dos itens
                let nomeHospede = item.dados;
                let data_nascimento = worksheet[cellDataNasc] ? worksheet[cellDataNasc].v : '';
                let nacionalidade = worksheet[cellNacionalidade] ? worksheet[cellNacionalidade].v : '';
                let uh = worksheet[cellUH] ? worksheet[cellUH].v : '';
                let profissao = worksheet[cellProfissao] ? worksheet[cellProfissao].v : '';
                let email = worksheet[cellEmail] ? worksheet[cellEmail].v : '';

                let docto = new Documento(worksheet[cellTipoDocto].v, worksheet[cellDocto].v );
                let datasCheck = new DatasCheck(worksheet[cellDataCheckIn].v, worksheet[cellDataCheckOut].v);
                let endereco = new Endereco(worksheet[cellEndereco].v);
                let hospede = new Hospede(datasCheck,uh,nomeHospede,endereco,docto,data_nascimento,nacionalidade,profissao,email);

                console.log(hospede.paraJson());
                console.log('--------------------');

        }
    });

}

ProcessExcel(50,0,true);

