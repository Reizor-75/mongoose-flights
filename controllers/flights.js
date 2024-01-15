import { Flight } from "../models/flight.js"

function index(req, res){  
  Flight.find({})
  .then( flights =>{
    res.render('flights/index', {
      flights:flights
    })
  })
  .catch(error =>{
    console.log(error);
    res.redirect('/');
  })
}

function newFlight(req, res){  
  res.render('flights/new', {});
}

function create(req, res){
  if(req.body.depars === ""){
    let curDate = new Date();
    req.body.departs = curDate.setFullYear(curDate.getFullYear() + 1)
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

export {
  index,
  newFlight as new,
  create,
}