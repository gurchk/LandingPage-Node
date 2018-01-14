const express = require('express');
const landingController = require('./controllers/landingController');
// Express APP
const app = express();

// Template engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'));

// Listen to port
app.listen(3000);
console.log("Listening on port 3000");

// Fire controller
landingController(app);

