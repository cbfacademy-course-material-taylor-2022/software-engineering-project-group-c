const mongoose = require("mongoose");
const { Schema } = mongoose;

const ChatBotSchema = new Schema({
  first_name: String,

});

mongoose.model("ChatBot", ChatBotSchema);
