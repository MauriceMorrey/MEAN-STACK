var mongoose = require("mongoose");
var Author = mongoose.model("Author");

module.exports = {
    get_authors: function(request, response) {
        Author.find({}, function(err, authors) {
          if (err) {
            console.log("Oops! Something went wrong!");
            response.json({message:"something went wrong"});
          } else {
            console.log("Here are all the authors and authors found.");
            response.json({ authors: authors });
          }
        }).sort({ createdAt: -1 });
      },
      post_authors: function(request, response) {
        console.log("POST DATA", request.body);
        var author = new Author({
          name: request.body.name,
          
        });
        console.log("this is your info", author);
        author.save(function(err) {
          if (err) {
            console.log("something went wrong", err);
    
            for (var key in err.errors) {
              request.flash("registration", err.errors[key].message);
            }
            response.json(err);
          } else {
            console.log("successfully added a user and their author!");
            response.json(author);
          }
        });
      },
      showAuthor: function(request, response) {
        var id = request.params.id; //or request.params['id'];
        console.log("The author id requested is:", id);
        Author.findOne({ _id: id }, function(err, author) {
          if (err) {
            console.log("something went wrong", err);
            response.json(err);
          } else {
            console.log(author);
            response.json({ author: author });
          }
        });
    },
    updateAuthor: function(request, response) {
        var id = request.params.id; //or request.params['id'];
        console.log("The author id requested is:", id);
        Author.update(
          { _id: id },
          {
            name: request.body.name,
            
          },
          function(err, author) {
            if (err) {
              console.log("something went wrong", err);
              return response.json(err);
            } else {
              console.log("Successfully edited a author!");
              response.json(author);
            }
          }
        );
      },
      deleteAuthor: function(request, response) {
        var id = request.params.id; //or request.params['id'];
        console.log("The author id requested is:", id);
        Author.remove({ _id: id }, function(err) {
          if (err) {
            console.log("something went wrong", err);
            response.json(err);
          } else {
            console.log("Author has successfully been deleted!");
            response.json("Author Deleted");
          }
        });
      }
}