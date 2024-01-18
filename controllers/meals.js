import { Meal } from "../models/meal.js"

function newMeal(req, res){  
  Meal.find({})
  .then(meals => {
    res.render('meals/new', {
      meals
    });
  })
}


export {
  newMeal as new,
}