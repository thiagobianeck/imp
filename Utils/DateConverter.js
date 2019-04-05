const DateFormater = require('fast-date-format');

class DateConverter {
    static textoParaData(texto) {
        let data = texto.split('/');
        let [dia, mes, ano] = [parseInt(data[0]), parseInt(data[1])-1, this.converteAnoDoisDigitos(data[2])];
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
}

module.exports = DateConverter;