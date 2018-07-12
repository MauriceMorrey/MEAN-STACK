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

var id = 1;
var users = [];
var chats = [];
app.get("/", function(request, response) {
  // console.log(request);
  // console.log(response);
  response.render("Index", { users: users, chats: chats });
});

io.on("connection", function(socket) {
  console.log("made socket connection", socket.id);

  if (!find_user(socket.id)) {
    socket.emit("prompt", { id: socket.id });
  }
  socket.on("create_user", function(user) {
    users.push(user);
    io.emit("new_user", user);
  });
  socket.on("send", function(data) {
    console.log(data);
    console.log(socket.id);
    user = find_user(socket.id);
    chats.push({ message: data.message, user: user.name });
    io.emit("new_message", { message: data.message, user: user.name });
  });
  socket.on("disconnect", function() {
    console.log(socket.id + "disconnected");
    for (let i in users) {
      if (users[i].id == socket.id) {
        users.splice(i, 1);
      }
    }
    console.log(users);
    io.emit("delete_user", { id: socket.id });
    if (users.length <= 0) {
      chats = [];
    }
  });
});
function find_user(id) {
  for (let i in users) {
    if (users[i].id == id) sers[i];
    }alse;
}
