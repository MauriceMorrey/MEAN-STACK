var express = require("express");

var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("express-flash");

app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./Views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "couldbeanything",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);
app.use(flash());

mongoose.connect("mongodb://localhost/quoting");
var QuotesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name cannot be blank"],
      minlength: [3, "Name needs to be at least 3 characters long."]
    },
    myQuote: { type: String, required: [true, "Quote cannot be blank"]}
  },
  {
    timestamps: true
  }
);
mongoose.model("Quotes", QuotesSchema); // We are setting this Schema in our Models as 'Quotes'
var Quotes = mongoose.model("Quotes"); // We are retrieving this Schema from our Models, named 'Quotes'

app.get("/", function(request, response) {
  //   Quotes.find({}, function(err, quotes) {
  //     if (err) {
  //       console.log("Oops! Something went wrong!");
  //       response.render("Index");
  //     } else {
  //       console.log("Here are all the quotes found.");
  //       response.render("Index", { quotes: quotes });
  //     }
  //   }).sort({ createdAt: -1 });
  response.render("Index");
});

// Use native promises
mongoose.Promise = global.Promise;

app.post("/quotes", function(request, response) {
  console.log("POST DATA", request.body);
  var quote = new Quotes({
    name: request.body.name,
    myQuote: request.body.myQuote
  });
  console.log("this is your info",quote);
  quote.save(function(err) {
    if (err) {
      console.log("something went wrong", err);

      for (var key in err.errors) {
        request.flash("registration", err.errors[key].message);
      }
      response.redirect("/");
    } else {
      console.log("successfully added a user and their quote!");
      response.redirect("/quotes");
      //   Quotes.find({}, function(err, quotes) {
      //     if (err) {
      //       console.log("Oops! Something went wrong!");
      //       response.render("Quotes");
      //     } else {
      //       console.log("Here are all the quotes found.");
      //       response.render("Quotes", { quotes: quotes });
      //     }
      //   }).sort({ createdAt: -1 });
    }
  });
});

app.get("/quotes", function(request, response) {
  Quotes.find({}, function(err, quotes) {
    if (err) {
      console.log("Oops! Something went wrong!");
      response.render("Quotes");
    } else {
      console.log("Here are all the quotes and quotes found.");
      response.render("Quotes", { quotes: quotes });
    }
  }).sort({ createdAt: -1 });
  //   response.render("Quotes");
});

app.listen(8000, function() {
  console.log("listening on port 8000");
});
