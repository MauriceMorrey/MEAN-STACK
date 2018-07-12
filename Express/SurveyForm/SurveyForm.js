var express = require("express");

var app = express();

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

app.get("/", function(request, response) {
  response.render("Index");
});

app.post("/Results", function(request, response) {
  if ("count" in request.session) {
    request.session.count++;
  } else {
    request.session.count = 1;
  }
    (request.session.name = request.body.name),
    (request.session.location = request.body.location),
    (request.session.language = request.body.language),
    (request.session.comment = request.body.comment);
  response.render("Results", { session: request.session });
});

app.get("/reset", function(request, response) {
  request.session.count = 0;
  response.render("Results", { session: request.session });
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
