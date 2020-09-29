import express from 'express'
import MatchsController from './controllers/MatchsController'
import RecordsController from './controllers/RecordsController'

const routes = express.Router();
const matchsController = new MatchsController()
const recordsController = new RecordsController()

routes.get('/matchs', matchsController.index)
routes.post('/matchs', matchsController.create)
routes.delete('/matchs', matchsController.delete)
routes.get('/records', recordsController.index)

export default routes;