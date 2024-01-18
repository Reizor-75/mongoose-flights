import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {
    type: String,
    match: /[A-F][!-9]\d?/
  },
  price:{
    type: Number,
    min: 0
  }
})

const fligtSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"]
  },
  airport: {    
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    require: true,
  },
  departs:{
    type: Date,
    default: function(){
      let curDate = new Date();
      curDate.setFullYear(curDate.getFullYear() + 1);
      return curDate;
    }
  },
  tickets: [ticketSchema],
  meals: [{type: Schema.Types.ObjectId, ref:"Meals"}]
});

const Flight = mongoose.model('Flight', fligtSchema);

export{
  Flight
}