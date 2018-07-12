var Dogs = require("../controllers/dogs.js");

module.exports = function(app) {
  app.get("/", function(request, response) {
    Dogs.index(request, response);
  });

  app.get("/newDog", function(request, response) {
    Dogs.get_newDog(request, response);
  });

  app.post("/newDog", function(request, response) {
    Dogs.post_newDog(request, response);
  });

  app.get("/showDog/:id", function(request, response) {
    Dogs.showDog(request, response);
  });

  app.get("/editDog/:id", function(request, response) {
    Dogs.get_editDog(request, response);
  });

  app.post("/editDog/:id", function(request, response) {
    Dogs.post_editDog(request, response);
  });

  app.post("/deleteDog/:id", function(request, response) {
    Dogs.deleteDog(request, response);
  });
};
