import { Flight } from "../models/flight.js"

function index(req, res){  
  res.render('flights/index', {})
}

export {
  index
}