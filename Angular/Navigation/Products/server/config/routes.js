var Products = require("../controllers/products.js");
var path=require('path')


module.exports = function(app) {
    app.get("/api/products", function(request, response) {
        Products.get_products(request, response);
      });
    
      app.post("/api/products", function(request, response) {
        Products.post_products(request, response);
      });
    
      app.get("/api/showProduct/:id", function(request, response) {
        Products.showProduct(request, response);
      });
    
      app.put("/api/updateProduct/:id", function(request, response) {
        Products.updateProduct(request, response);
      });
    
      app.delete("/api/deleteProduct/:id", function(request, response) {
        Products.deleteProduct(request, response);
      });

      app.all("*", function(request,response,next) {
        response.sendFile(path.resolve("./public/dist/public/index.html"))
      });

};
