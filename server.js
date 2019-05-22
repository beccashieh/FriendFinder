const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const nodemon = require("nodemon");

const app = express();
const PORT = process.env.PORT || 8080
 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});