const DateFormater = require('fast-date-format');

class DateConverter {
    static textoParaData(texto) {
        let data = texto.split('/');
        let ano = 0;

        if(data[2].length === 4) ano = parseInt(data[2]);
        if(data[2].length === 2) ano = this.converteAnoDoisDigitos(data[2]);

        let [dia, mes] = [parseInt(data[0]), parseInt(data[1])-1];
        return new Date(ano, mes, dia);
    }

    static dataParaTexto(data, separador = '/') {
        let dia = this.ajustaZeroInicio(data.getDate());
        let mes = this.ajustaZeroInicio(data.getMonth() + 1);
        let ano = data.getFullYear();
        return `${dia}${separador}${mes}${separador}${ano}`;
    }

    static dataCompleta(data) {
        return `${data.getDate()} de ${this.retornaNomeMes(data.getMonth())} de ${data.getFullYear()}`;
    }

    static retornaNomeMes(indiceMes) {
        let mes = [null,'Janeiro', 'Fevereiro', 'Março', 'Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
        return mes[indiceMes];
    }

    static converteAnoDoisDigitos(anoDoisDigitos) {
        let ano = 0;
        if(typeof anoDoisDigitos === 'string') {
            anoDoisDigitos = parseInt(anoDoisDigitos);
        }
        let formataData = new DateFormater('YY');
        let anoAtual = parseInt(formataData.format());
        if (anoDoisDigitos <= anoAtual){
            ano =  anoDoisDigitos + 2000;
        } else {
            ano = anoDoisDigitos + 1900;
        }
        return ano;
    }

    static corrigeStringDataDoisDigitos(dataString) {
        return this.dataParaTexto(this.textoParaData(dataString));
    }

    static ajustaZeroInicio(diaOuMes, zeros = '0') {
        let numero = 0;
        if(typeof diaOuMes === 'string'){
            numero = parseInt(diaOuMes)
        } else {
            numero = diaOuMes;
        }
        if (numero < 10) {
            return `${zeros}${diaOuMes}`;
        }
        return `${diaOuMes}`;
    }

    static converteDataRelatorio(dataRelatorio){
        let dataSplit = dataRelatorio.split(' ');
        let horaSplit = dataSplit[4].split(':');
        let timeObj = {
            dia: parseInt(dataSplit[0]),
            mes: this.converteParaNumeroMesStringCurto(dataSplit[1]),
            ano: parseInt(dataSplit[2]),
            hora: parseInt(horaSplit[0])-3,
            minutos: parseInt(horaSplit[1])
        };
        return new Date(timeObj.ano,timeObj.mes,timeObj.dia,timeObj.hora,timeObj.minutos);
    }

    static converteParaNumeroMesStringCurto(mesString) {
        let mes = mesString.toLowerCase();
        let mesCurtoArray = ['jan', 'fev', 'mar', 'abr','mai','jun','jul','ago','set','out','nov','dez'];
        let indice = 0;
        for (let i = 0; i < mesCurtoArray.length; i++) {
            if(mesCurtoArray[i] === mes){
                indice = i;
                break;
            }
        }
        return indice;
    }
}

module.exports = DateConverter;