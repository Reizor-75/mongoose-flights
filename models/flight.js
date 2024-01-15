import mongoose, { Schema } from "mongoose";

const Schema = mongoose.Schema;

const fligtSchema = new Schema({
  airline: {
    tpye: String,
    enum: ["American", "Southwest", "United"]
  },
  airport: {    
    tpye: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"
  },
  flightNo: {
    tpye: Number,
    min: 10,
    max:  9999
  },
  departs:{
    type: Date,
    default: function(){    
      let curDate = new Date();
      return curDate.setFullYear(curDate.getFullYear() + 1)
    }
  }
});