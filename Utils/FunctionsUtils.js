class FunctionsUtils {

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
}

module.exports = FunctionsUtils;