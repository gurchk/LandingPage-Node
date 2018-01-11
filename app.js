const express = require('express');
const todoController = require('./controllers/landingController');

const app = express();

// Template Engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('./public'))

// Listen to port
app.listen(3000);
console.log("Listening on port 3000");

// Fire controllers
todoController(app);