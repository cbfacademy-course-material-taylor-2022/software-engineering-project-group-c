const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {type: String, required: [true, 'Please add a name'] },
  lastName: {type: String, required: [true, 'Please add an last name'] },
  email: {type: String, required: [true, 'Please add an email'], unique:true},
  password: {type: String, required: [true, 'Please add a password'] },
},
{ timestamps: true});

mongoose.model("User", userSchema);
