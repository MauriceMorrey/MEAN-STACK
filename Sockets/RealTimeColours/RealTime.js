var express = require("express");
var socket = require("socket.io");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();
var server = app.listen(4000, function() {
  console.log("listening for requests on port 4000,");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./Views"));
app.set("view engine", "ejs");

// Socket setup & pass server
var io = socket(server);

app.get("/", function(request, response) {
    // console.log(request);  
    // console.log(response);
    return response.render("Index");
});

io.on("connection", function(socket) {
    console.log("made socket connection", socket.id);
})