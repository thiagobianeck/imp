const FunctionsUtils = require('../Utils/FunctionsUtils');

class PlanilhaController {

    static retornaPlanilha(startLine, endLine,indexPlanilha, colunaRastreio){
        let planilha = {
            _colunaRastreio : colunaRastreio ? colunaRastreio : 'I'
        };

        let indexPlanilhaObj = FunctionsUtils.validaLimites(indexPlanilha,0,2,0);
        let padraoStartLine = 22;
        if(indexPlanilha > 0) padraoStartLine = 4;
        let startLineObj = FunctionsUtils.validaLimites(startLine,0,65535,padraoStartLine);
        let endLineObj = FunctionsUtils.validaLimites(endLine,0,65535,65535);

        Object.assign(planilha, {
            _startLine : startLineObj,
            _endLine : endLineObj,
            _indexPlanilha : indexPlanilhaObj,
        });

        return planilha;
    }

    static jsonObject(planilha){
        return {
            startLine : planilha.startLine,
            endLine : planilha.endLine,
            indexPlanilha : planilha.indexPlanilha,
            colunaRastreio : planilha.colunaRastreio
        };
    }


}
module.exports = PlanilhaController;