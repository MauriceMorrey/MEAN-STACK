var Authors = require("../controllers/authors.js");
var path=require('path')


module.exports = function(app) {
    app.get("/api/authors", function(request, response) {
        Authors.get_authors(request, response);
      });
    
      app.post("/api/authors", function(request, response) {
        Authors.post_authors(request, response);
      });
    
      app.get("/api/showAuthor/:id", function(request, response) {
        Authors.showAuthor(request, response);
      });
    
      app.put("/api/updateAuthor/:id", function(request, response) {
        Authors.updateAuthor(request, response);
      });
    
      app.delete("/api/deleteAuthor/:id", function(request, response) {
        Authors.deleteAuthor(request, response);
      });

      app.all("*", function(request,response,next) {
        response.sendFile(path.resolve("./public/dist/public/index.html"))
      });

};
