class FunctionsUtils {

    static contarArgumentos(argumentos) {
        let total = 0;
        for (let i = 0; i < argumentos.length; i++) {
            if(argumentos[i]) total++;
        }
        return total;
    }

    static retirarAcentuacao(texto) {
        let charsInvalidos = 'àèìòùâêîôûäëïöüáéíóúãõçñÀÈÌÒÙÂÊÎÔÛÄËÏÖÜÁÉÍÓÚÃÕÇÑ';
        let charsValidos =   'aeiouaeiouaeiouaeiouaocnAEIOUAEIOUAEIOUAEIOUAOCN';
        let novoTexto = '';

        for (let i = 0; i < texto.length; i++) {
            let caractere = texto[i];
            for (let j = 0; j < charsInvalidos.length; j++) {
                if (caractere == charsInvalidos[j]){
                    caractere = charsValidos[j];
                    break;
                }
            }
            novoTexto += caractere;
        }
        return novoTexto;
    }

    static validaLimites(valor, minimo, maximo, padrao){
        if (!valor){
            return padrao;
        } else {
            if (valor <= minimo){
                return minimo;
            } else if (valor > maximo){
                return maximo;
            } else {
                return valor;
            }
        }
    }

    static validaWorkSheet(campo){
        if (campo) {
            return campo.v;
        }
        return '';
    }
}

module.exports = FunctionsUtils;