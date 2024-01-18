import { Router } from 'express'
import * as mealsCTRL from "../controllers/meals.js"

const router = Router()

// GET localhost:3000/meals/new
router.get('/new', mealsCTRL.new)
// POST localhost:3000/meals
router.post('/', mealsCTRL.create)

export { router }
