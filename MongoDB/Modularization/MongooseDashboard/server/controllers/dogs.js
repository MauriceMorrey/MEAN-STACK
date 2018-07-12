var mongoose = require("mongoose");
var Dog = mongoose.model("Dog");

module.exports = {
  index: function(request, response) {
    Dog.find({}, function(err, dogs) {
      if (err) {
        console.log("Oops! Something went wrong!");
        response.render("Index");
      } else {
        console.log("Here are all the dogs found.");
        response.render("Index", { dogs: dogs });
      }
    });
  },
  get_newDog: function(request, response) {
    response.render("newDog");
  },
  post_newDog: function(request, response) {
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
  },
  showDog: function(request, response) {
    var id = request.params.id; //or request.params['id'];
    console.log("The dog id requested is:", id);
    Dog.findOne({ _id: id }, function(err, dog) {
      if (err) {
        console.log("something went wrong", err);
      } else {
        console.log(dog);
        response.render("showDog", { dog: dog });
      }
    });
  },
  get_editDog: function(request, response) {
    var id = request.params.id; //or request.params['id'];
    console.log("The dog id requested is:", id);
    Dog.findOne({ _id: id }, function(err, dog) {
      if (err) {
        console.log("something went wrong", err);
      } else {
        console.log(dog);
        response.render("editDog", { dog: dog });
      }
    });
  },
  post_editDog: function(request, response) {
    var id = request.params.id; //or request.params['id'];
    console.log("The dog id requested is:", id);
    Dog.update(
      { _id: id },
      {
        dog_name: request.body.dog_name,
        dog_breed: request.body.dog_breed,
        age: request.body.age,
        speed: request.body.speed
      },
      function(err) {
        if (err) {
          console.log("something went wrong", err);
        } else {
          console.log("Successfully edited a dog!");
          response.redirect("/");
        }
      }
    );
  },
  deleteDog: function(request, response) {
    var id = request.params.id; //or request.params['id'];
    console.log("The dog id requested is:", id);
    Dog.remove({ _id: id }, function(err) {
      if (err) {
        console.log("something went wrong", err);
      } else {
        console.log("Dog has successfully been deleted!");
        response.redirect("/");
      }
    });
  }
};
