require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


// IMPORT YOUR SCHEMAS HERE
require("./models/userModel"); //This is just an example. Don't forget to delete this
require("./models/ExpenseTracker");
require("./models/SavingPots");
require("./models/ChatBot");


const app = express();

mongoose.set('strictQuery', true)


// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING,{
useNewUrlParser: true,
});


//send an error if unable to connect to db or send sucess message
var db = mongoose.connection;
db.on('error', console.log.bind( 'connection error:'));
db.once('open', function(){
  console.log("Connected to database")
});


app.use(bodyParser.json());

// IMPORT YOUR API ROUTES HERE
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
require("./routes/userRoutes")(app); 

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
