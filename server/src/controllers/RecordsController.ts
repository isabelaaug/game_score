import { Request, Response } from 'express'
import db from '../database/connection'
export default class RecordsController {

    /**
     * GET - Requisição de consulta na tabela de placares (matchs), pontuações (scores) e recordes (records).
     *
     * @param {Request} request
     * @param {Response} response 
     * @return {*} - Retorna o número de partidas e vitória, pontuação mínima, pontuação máxima, quebra do recorde mínimo e 
     * quebra do recorde máximo registrados no banco de dados.
     * @memberof MatchsController
     */
    async index(request: Request, response: Response) {

        try {

            const itemsMatchs = await db('matchs').select('*')
            const serializedMatchs = itemsMatchs.map(itemMatch => {
                return {
                    match_total: itemMatch.id,
                    match_victory: itemMatch.match_result,  
                }
            })

            var matchTotalArray = serializedMatchs.map(item => item.match_total)
            var matchTotal = matchTotalArray.length

            var matchVictoryArray = serializedMatchs.map(item => item.match_victory)

            var count = 0;

            for(var i = 0; i < matchVictoryArray.length; ++i){
                if(matchVictoryArray[i] === 'Vitória'){
                    count++; 
                }          
            }
            
            var matchVictory = count
            
            const itemsScores = await db('scores').select('*')
            const serializedScores = itemsScores.map(itemScore => {
                return {
                    max_score: itemScore.max_score,
                    min_score: itemScore.min_score,
                }
            })

            var maxScoresArray = serializedScores.map(item => item.max_score)
            var maxScore = maxScoresArray.reduce(function (a, b) {
                return Math.max(a, b);
            })

            var minScoresArray = serializedScores.map(item => item.min_score)
            var minScore = minScoresArray.reduce(function (a, b) {
                return Math.min(a, b);
            })

            const itemsRecords = await db('records').select('*');
            const serializedRecords = itemsRecords.map(itemRecord => {
                return {
                    max_record: itemRecord.max_record,
                    min_record: itemRecord.min_record,
                }
            })

            var maxRecordsArray = serializedRecords.map(item => item.max_record)
            var maxRecord = maxRecordsArray.reduce(function (a, b) {
                return Math.max(a, b);
            })

            var minRecordsArray = serializedRecords.map(item => item.min_record)
            var minRecord = minRecordsArray.reduce(function (a, b) {
                return Math.max(a, b);
            })

            return response.json({ matchTotal, matchVictory, maxScore, minScore, maxRecord, minRecord,  })

        } catch (err) {
            return response.status(400).json({
                error: 'Unexpected error - no recorded values'
            })
        }
    }
}