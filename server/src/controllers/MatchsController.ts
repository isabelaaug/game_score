import { Request, Response } from 'express'
import db from '../database/connection'
export default class MatchsController {

    /**
     * GET - Requisição de consulta na tabela de placares (matchs).
     *
     * @param {Request} request
     * @param {Response} response 
     * @return {*} - Retorna todos os placares registrados no banco de dados.
     * @memberof MatchsController
     */
    async index(request: Request, response: Response) {
        const itemsMatchs = await db('matchs').orderBy('match_date')
        const serializedMatchs = itemsMatchs.map(itemMatch => {
            return {
                id: itemMatch.id,
                match_score: itemMatch.match_score, 
                match_date: itemMatch.match_date, 
            }
        })
    
        return response.json(serializedMatchs)
    }

    /**
     * POST - Requisição inserção de dados nas tabelas de placares (matchs), 
     * pontuações (scores) e recordes (records).
     *
     * @param {Request} request
     * @param {Response} response
     * @return {*} - Insere placar, pontuação mínima, pontuação máxima e recordes no banco de dados.
     * @memberof MatchsController
     */
    async create(request: Request, response: Response) {
        
        try {
            const itemsMatchs = await db('matchs').select('*')
            const serializedMatchs = itemsMatchs.map(itemMatch => {
                return {
                    match_score: itemMatch.match_score,
                }
            })

            var matchsScoresArray = serializedMatchs.map(item => item.match_score)

            var lastMaxScore = matchsScoresArray.reduce(function (a, b) {
                return Math.max(a, b);
            })

            var lastMinScore = matchsScoresArray.reduce(function (a, b) {
                return Math.min(a, b);
            })

        } catch (err) {
            lastMaxScore = 0
            lastMinScore = 0
        }

        try{
            const itemsRecords = await db('records').select('*');
            const serializedRecords = itemsRecords.map(itemRecord => {
                return {
                    max_record: itemRecord.max_record,  
                    min_record: itemRecord.min_record, 
                }
            })

            var recordMaxArray = serializedRecords.map(item => item.max_record)
            var lastMaxRecord = recordMaxArray.reduce(function(a, b) {
                return Math.max(a, b);
            })

            var recordMinArray = serializedRecords.map(item => item.min_record)
            var lastMinRecord = recordMinArray.reduce(function(a, b) {
                return Math.max(a, b);
            })

        } catch (err) {
            lastMaxRecord = -1
            lastMinRecord = 0
        }

        const {
            match_score,
            match_date
        } = request.body

        const trx = await db.transaction()

        try {
            const insertedScore = await trx('matchs').insert({
                match_score,
                match_date
            })

            const match_id = insertedScore[0]

            const maxScore = trx('matchs').max('match_score')
            const minScore = trx('matchs').min('match_score')

            const bestScores = await trx('scores').insert({
                match_id,   
                max_score: maxScore,
                min_score: minScore,
            })

            const score_id = bestScores[0]

            var maxRecord = 0
            var minRecord = 0

            if (lastMaxScore < match_score) {
                maxRecord = lastMaxRecord + 1
            } else {
                maxRecord = lastMaxRecord
            }

            if (lastMinScore > match_score) {
                minRecord = lastMinRecord + 1
            } else {
                minRecord = lastMinRecord
            }

            const totalRecords = await trx('records').insert({  
                score_id,
                max_record: maxRecord,
                min_record: minRecord,
            })

            await trx.commit()
            return response.status(201).send()

        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while creating new match'
            })
        }
    }

    /**
     * DELETE - Requisição exclusão de dados nas tabelas de placares (matchs), 
     * pontuações (scores) e recordes (records), utilizando ID da partida como referência.
     * 
     * @param {Request} request
     * @param {Response} response
     * @return {*} - Exclui placar, pontuação mínima, pontuação máxima e recordes do ID no banco de dados.
     * @memberof MatchsController
     */
    async delete(request: Request, response: Response) {
        
        const {
            id,
        } = request.headers

        const trx = await db.transaction()

        try {
            const deleteMatch = await trx('matchs').where('id', id).del()
            const deleteScore = await trx('scores').where('match_id', id).del()
            const deleteRecord = await trx('records').where('score_id', id).del()

            await trx.commit()
            return response.status(201).send()
            
        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Unexpected error while deleting match'
            })
        }
    }
}