/* const chaii = require('chai');
const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos
const routers = require('../controllers/RecordsController'); // Arquivo a ser testado
chaii.use(http);
chaii.use(subSet);


// Os atributos do objeto será testado
const recordsSchema =  {
    matchTotal: matchTotal, 
    matchVictory: matchVictory, 
    maxScore: maxScore, 
    minScore: minScore, 
    maxRecord: maxRecord, 
    minRecord: minRecord
}

describe('Teste das funcoes', () => {
    it('getRecords', () => {
        const records = routers.index;
        // Verifica se está retornando um array no tamanho correto
        chaii.expect(records.length).to.be.eql(1);

        // Verifica se as caracteristicas dos objetos no array é igual ao matchSchema
        chaii.expect(records).to.containSubset([recordsSchema]);
    });
});
*/
