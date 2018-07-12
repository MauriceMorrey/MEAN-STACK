var mongoose = require("mongoose");
var Quotes = mongoose.model("Quote"); 
// var Quotes = require("../models/quote.js"); 

module.exports = {
  index: function(request, response) {
    response.render("Index");
  },
  post_quotes: function(request, response) {
    console.log("POST DATA", request.body);
    var quote = new Quotes({
      name: request.body.name,
      myQuote: request.body.myQuote
    });
    console.log("this is your info", quote);
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
      }
    });
  },
  get_quotes: function(request, response) {
    Quotes.find({}, function(err, quotes) {
      if (err) {
        console.log("Oops! Something went wrong!");
        response.render("Quotes");
      } else {
        console.log("Here are all the quotes and quotes found.");
        response.render("Quotes", { quotes: quotes });
      }
    }).sort({ createdAt: -1 });
  }
};
