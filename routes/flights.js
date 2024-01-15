import { Router } from 'express'
import * as flightsCTRL from "../controllers/flights.js"

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCTRL.index)
// GET localhost:3000/flights/new
router.get('/new', flightsCTRL.new)

export { router }
