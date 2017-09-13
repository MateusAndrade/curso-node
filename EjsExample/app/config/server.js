const express = require('express');
const app = express();
const path = require("path");

// Import static files
app.use(express.static('./app/public'));

//seta a engine de views do express;
app.set('view engine','ejs');
app.set('views','app/views');

module.exports = app;
