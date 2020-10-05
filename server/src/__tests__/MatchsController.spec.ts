/*const chaii = require('chai');
//const http = require('chai-http'); // Extensão da lib chai p/ simular requisições http
//const subSet = require('chai-subset'); // Extensao da lib chai p/ verificar objetos
//const routers = require('../controllers/MatchsController'); // Arquivo a ser testado

//chaii.use(http);
//chaii.use(subSet);


// Atributos do objeto será testado 
const matchSchema =  {
    // match_score: match_score => match_score,
    // match_date: match_date => match_date,
    // match_result: match_result => match_result,
}

describe('Teste das funcoes', () => {

    it('addMatch', () => {
        const match = routers.create(28, '04/01/2020', 'Empate');
        // Verifica se as caracteristicas do objeto match é igual ao matchSchema
        chaii.expect(match).to.containSubset(matchSchema);
    });

    it('getMatchs', () => {

        routers.create(30, '04/01/2020', 'Empate');
        routers.create(45, '04/01/2020', 'Derrota');
        const matchs = routers.index;
        // Verifica se está retornando um array no tamanho correto
        chaii.expect(matchs.length).to.be.eql(3);
        // Verifica se as caracteristicas dos objetos no array é igual ao matchSchema
        chaii.expect(matchs).to.containSubset([matchSchema]);
    });

    it('deleteMatchs', () => {
        routers.delete(30);
        const matchs = routers.index;
        // Verifica se está retornando um array no tamanho correto
        chaii.expect(matchs.length).to.be.eql(2);
        // Verifica se as caracteristicas dos objetos no array é igual ao matchSchema
        chaii.expect(matchs).to.containSubset([matchSchema]);
    });
});

*/