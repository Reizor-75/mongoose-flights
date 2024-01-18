import { Router } from 'express'
import * as mealsCTRL from "../controllers/meals.js"

const router = Router()

// GET localhost:3000/flights
router.get('/new', mealsCTRL.new)

export { router }
