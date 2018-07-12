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

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect("mongodb://localhost/basic_mongoose");
var UserSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true, minlength: 3 },
    last_name: { type: String, required: true, maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    email: { type: String, required: true }
  },
  {
    timestamps: true
  }
);
mongoose.model("User", UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model("User"); // We are retrieving this Schema from our Models, named 'User'

app.get("/", function(request, response) {
  User.find({}, function(err, users) {
    if (err) {
      console.log("Oops! Something went wrong!");
      response.render("Index");
    } else {
      console.log("Here are all the users found.");
      response.render("Index", { users: users });
    }
    // This is the method that finds all of the users from the database
    // Notice how the first parameter is the options for what to find and the second is the
    //   callback function that has an error (if any) and all of the users
    // Keep in mind that everything you want to do AFTER you get the users from the database must
    //   happen inside of this callback for it to be synchronous
    // Make sure you handle the case when there is an error, as well as the case when there is no error
  });
  //   response.render("Index", { users: users });
});

app.post("/users", function(request, response) {
  console.log("POST DATA", request.body);
  // create a new User with the name and age corresponding to those from request.body
  var user = new User({
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    age: request.body.age,
    email: request.body.email
  });
  console.log(user);
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  user.save(function(err) {
    // if there is an error console.log that something went wrong!
    if (err) {
      console.log("something went wrong", err);
      // adjust the code below as needed to create a flash message with the tag and content you would like
      for (var key in err.errors) {
        request.flash("registration", err.errors[key].message);
      }
      // redirect the user to an appropriate route
      response.redirect("/");
    } else {
      // else console.log that we did well and then redirect to the root route
      console.log("successfully added a user!");
      response.redirect("/");
    }
  });
});

app.post("/clear", function(request, response) {
  // ...delete all records of the User Model
  User.remove({}, function(err) {
    if (err) {
        console.log("Oops! Something went wrong!");
        response.redirect("/");
      } else {
        console.log("Here are all the users found.");
        response.redirect("/");
      }
    // This code will run when the DB has attempted to remove all matching records to {}
});
// response.render("Index",);
});
// app.post('/users', function(request, response) {
//     console.log("POST DATA", request.body);
//     // This is where we would add the user from req.body to the database.
//     response.redirect('/');
// })

app.listen(8000, function() {
  console.log("listening on port 8000");
});
