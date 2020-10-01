import express from 'express'
import MatchsController from './controllers/MatchsController'
import RecordsController from './controllers/RecordsController'

const routes = express.Router();
const matchsController = new MatchsController()
const recordsController = new RecordsController()

routes.post('/matchs', matchsController.create)
routes.get('/matchs', matchsController.index)
routes.delete('/matchs', matchsController.delete)

routes.get('/records', recordsController.index)

export default routes;