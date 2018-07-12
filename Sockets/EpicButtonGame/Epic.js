var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(4000, function() {
  console.log("listening for requests on port 4000,");
});

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

var session = require("express-session");

app.use(
  session({
    secret: "couldbeanything",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

// Socket setup & pass server
var io = socket(server);

app.get("/", function(request, response) {
  if (request.session.count) {
    request.session.count++;
  } else {
    request.session.count = 1;
  }
//   console.log(request.session.count);
  return response.render("Index", { count: request.session.count });
});

// app.get("/reset", function(request, response) {
//   request.session.count = -1;
//   return response.redirect("/");
// });
var countingClicks = 0;
io.on("connection", function(socket) {
  console.log("made socket connection", socket.id);

   //all socket code goes here
   socket.on("pushing_button", function(data){
     console.log("count increased by=", socket.id)
     countingClicks++;
     io.sockets.emit("update_count", {count: countingClicks}); //emits to all sockets connected to the server
    //  socket.broadcast.emit("update_count", {count: countingClicks}); //broadcasts to all sockets but the one emitting
   });

   socket.on("resetting_count", function(data){
    console.log("count reset by=", socket.id)     
    countingClicks = 0;     
    io.sockets.emit("reset_count", {count: countingClicks});
    // socket.broadcast.emit("reset_count", {count: countingClicks}); //broadcasts to all sockets connected to the server but the one emitting
  });
});
