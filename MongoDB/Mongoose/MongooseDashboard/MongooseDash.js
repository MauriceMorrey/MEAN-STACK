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
mongoose.connect("mongodb://localhost/dog_breeds");
var DogSchema = new mongoose.Schema(
  {
    dog_name: { type: String, required: "dog name cannot be blank", minlength: 3 },
    dog_breed: { type: String, required: "dog name cannot be blank", maxlength: 20 },
    age: { type: Number, min: 1, max: 150 },
    speed: { type: Number, min: 1, max: 150 }
  },
  {
    timestamps: true
  }
);
mongoose.model("Dog", DogSchema); // We are setting this Schema in our Models as 'Dog'
var Dog = mongoose.model("Dog");  // We are retrieving this Schema from our Models, named 'Dog'

//All Routes go here
//Root route first

app.get("/", function(request, response) {
  Dog.find({}, function(err, dogs) {
    if (err) {
      console.log("Oops! Something went wrong!");
      response.render("Index");
    } else {
      console.log("Here are all the dogs found.");
      response.render("Index", { dogs: dogs });
    }
  });
});

//Add a new dog

app.get("/newDog", function(request, response) {
  response.render("newDog");  
});

//POST route for new dog

app.post("/newDog", function(request, response) {
  console.log("POST DATA", request.body);
  
  var dog = new Dog({
    dog_name: request.body.dog_name,
    dog_breed: request.body.dog_breed,
    age: request.body.age,
    speed: request.body.speed
  });
  console.log(dog);
  // Try to save that new dog to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  dog.save(function(err) {
    // if there is an error console.log that something went wrong!
    if (err) {
      console.log("something went wrong", err);

      for (var key in err.errors) {
        request.flash("registration", err.errors[key].message);
      }
      // redirect the dog to an appropriate route
      response.redirect("/newDog");
    } else {
      // else console.log that we did well and then redirect to the root route
      console.log("successfully added a dog!");
      response.redirect("/");
    }
  });
});

//Route that displays information about one dog.

app.get("/showDog/:id", function(request, response) {
  var id = request.params.id; //or request.params['id'];
  console.log("The dog id requested is:", id);
  Dog.findOne({_id: id}, function(err, dog) {
      if(err){
      console.log("something went wrong", err);
      }
      else{
          console.log(dog);
          response.render("showDog", {dog: dog});
      }
  });
});

// Route that shows a form to edit an existing dog.

app.get('/editDog/:id', function(request, response) {
  var id = request.params.id; //or request.params['id'];  
  console.log('The dog id requested is:', id);
  Dog.findOne({_id: id}, function(err, dog) {
      if(err){
      console.log("something went wrong", err);         
      }
      else{
          console.log(dog);
          response.render("editDog", {dog: dog});
      }
  });
});

//POST route for editDog above

app.post('/editDog/:id', function(request, response) {
  var id = request.params.id; //or request.params['id'];    
  console.log('The dog id requested is:', id);
  Dog.update({_id: id}, {dog_name: request.body.dog_name, dog_breed: request.body.dog_breed, age: request.body.age, speed: request.body.speed }, function(err){
      if(err){
      console.log("something went wrong", err);                   
      }
      else{
          console.log('Successfully edited a dog!')
          response.redirect('/')
      }
  });
});

// POST route for DELETING  a specific dog

app.post('/deleteDog/:id', function(request, response) {
  var id = request.params.id; //or request.params['id'];      
  console.log('The dog id requested is:', id);
  Dog.remove({_id: id}, function(err){
      if(err){
      console.log("something went wrong", err);                             
      }
      else{
          console.log('Dog has successfully been deleted!')
          response.redirect('/')
      }
  });
});


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
});