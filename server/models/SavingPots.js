const mongoose = require("mongoose");
const { Schema } = mongoose;

const SavingPotsSchema = new Schema({
  first_name: String,

});

mongoose.model("SavingPots", SavingPotsSchema);
