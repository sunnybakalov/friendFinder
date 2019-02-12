//app.post route is crucial
//when you hit submit button, is when the app.post is used

//dependencies
var express = require("express");
var path = require("path");

//set up Express
var app = express();
// var PORT = 9000;
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

server.use(express.static('./'));

// Routes
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });
  
  
  // Currying
  require("./app/routing/apiRoutes")(app)

  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });