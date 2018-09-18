/*
******************************************************* 
* IMPORT DEPENDENCIES
*******************************************************
*/

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require('cors');


/*
******************************************************* 
* INITIALIZE EXPRESS AND FIREBASE ADMIN SDK
*******************************************************
*/

const app = express();//initialize express

/*
******************************************************* 
* DEFINE PATHS
*******************************************************
*/

app.use(express.static(path.join(__dirname, "dist"))); //Define path for static assets
app.set("views", path.join(__dirname, "dist")); //Define path for views
app.set("view engine", "html"); //Define view engine as EJS
app.use(cors());

/*
******************************************************* 
* GLOBALLY DECLARE BODY PARSER 
*******************************************************
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
******************************************************* 
*GET request handler for index route
*******************************************************
*/
app.get("/", (req, res) => res.render("index"));

/*
******************************************************* 
* SET PORT
*******************************************************
*/
const PORT = process.env.PORT || 5000; //Port is assigned at runtime by Heroku or 5000 by default
app.listen(PORT, () => console.log(`Listening on ${PORT}`));