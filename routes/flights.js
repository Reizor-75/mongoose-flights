import { Router } from 'express'
import * as flightsCTRL from "../controllers/flights.js"

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCTRL.index)
// GET localhost:3000/flights/new
router.get('/new', flightsCTRL.new)
// POST localhost:3000/flights/
router.post('/', flightsCTRL.create)
// GET localhost:3000/flights/:flightId
router.get('/:flightId', flightsCTRL.show)
// GET localhost:3000/flights/:flightId
router.get('/:flightId/edit', flightsCTRL.edit)
// DELETE localhost:3000/flights/:flightId
router.delete('/:flightId', flightsCTRL.delete)

export { router }
