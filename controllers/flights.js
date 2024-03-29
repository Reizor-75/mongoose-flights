import { Flight } from "../models/flight.js"
import { Meal } from "../models/meal.js"

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
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // Format the date for the value attribute of the input
  const departsDate = dt.toISOString().slice(0, 16);
  res.render('flights/new', {
    departsDate
  });
}

function create(req, res){ 
  if(req.body.departs === ""){
    let curDate = new Date();
    curDate.setFullYear(curDate.getFullYear() + 1);
    req.body.departs = curDate;
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights');
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new');
  });
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.flightId)
  .then(flight =>{
    res.redirect('/flights');
  })  
  .catch(err => {
    console.log(err);
    res.redirect('/');
  });
}

function show(req, res){
  Flight.findById(req.params.flightId)
  .populate("meals")
  .then(flight =>{
    Meal.find ({ _id: {$nin: flight.meals}})
    .then(meals =>{
      res.render('flights/show',{
        flight:flight,
        meals
      });
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/flights');
  });
}

function edit(req, res){
  Flight.findById(req.params.flightId)
  .then(flight => {
    res.render('flights/edit', {
      flight: flight
    });
  })
  .catch(err => {
    console.log(err);
    res.redirect('/flights');
  });
}

function update(req, res){
  Flight.findByIdAndUpdate(req.params.flightId, req.body, {new:true})
  .then( flight =>{
    res.redirect(`/flights/${flight._id}`);
  })
  .catch(err => {
    console.log(err);
    res.redirect('/flights');
  });
}

function createTicket(req, res){
  Flight.findById(req.params.flightId)
  .then(flight => {
    flight.tickets.push(req.body);
    flight.save()
    .then( () =>{
      res.redirect(`/flights/${flight._id}`);
    })
    .catch(err => {
      console.log(err);
      res.redirect('/flights');
    })
  })
  .catch(err => {
    console.log(err);
    res.redirect('/flights');
  });
}

function addMeal(req, res){
  Flight.findById(req.params.flightId)
  .then(flight =>{
    flight.meals.push(req.body.mealId);
    flight.save()
    .then(() =>{
      res.redirect(`flights/${flight._id}`);
    })
    .catch(err => {
      console.log(err);
      res.redirect('/flights');
    });
  })
  .catch(err => {
    console.log(err);
    res.redirect('/flights');
  });
}

export {
  index,
  newFlight as new,
  create,
  deleteFlight as delete,
  show,
  edit,
  update,
  createTicket,
  addMeal
}