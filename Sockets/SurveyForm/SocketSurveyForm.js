var express = require("express");
var socket = require("socket.io");
var bodyParser = require("body-parser");

var app = express();
var server = app.listen(4000, function() {
  console.log("listening for requests on port 4000,");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
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

//Handle posting event
  socket.on("posting_form", function (data) {
      console.log(data);
    var random_number = Math.floor(Math.random() * 1000 + 1);
    // console.log(random_number);
    socket.emit("updated_message",data);
    socket.emit("random_number", {LuckyNumber:random_number});
  });

  // socket.on("posting_form", function(data){
  //   var random_number = Math.floor(Math.random() * 1000 + 1);
  //   socket.emit("random_number", random_number);   
  // })
});
