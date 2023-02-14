const mongoose = require("mongoose");
const { Schema } = mongoose;

const ExpenseTrackerSchema = new Schema({
  first_name: String,
  

});

mongoose.model("ExpenseTracker", ExpenseTrackerSchema);
