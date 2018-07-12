
var Quotes = require("../controllers/quotes.js");
module.exports = function(app) {
  app.get("/", function(request, response) {
    Quotes.index(request, response);
  });


  app.post("/quotes", function(request, response) {
    Quotes.post_quotes(request, response);
  });

  app.get("/quotes", function(request, response) {
    Quotes.get_quotes(request, response);
  });
  
};
