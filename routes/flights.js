import { Router } from 'express'
import * as flightsCTRL from "../controllers/flights.js"

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCTRL.index)

export { router }
