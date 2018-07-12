var mongoose = require("mongoose");
var Product = mongoose.model("Product");

module.exports = {
  get_products: function(request, response) {
    Product.find({}, function(err, products) {
      if (err) {
        console.log("Oops! Something went wrong!");
        response.json({ message: "something went wrong" });
      } else {
        console.log("Here are all the products and products found.");
        response.json({status: "success", products: products });
      }
    }).sort({ createdAt: -1 });
  },
  post_products: function(request, response) {
    console.log("POST DATA", request.body);
    var product = new Product({
      title: request.body.title,
      price: request.body.price,
      image_url: request.body.image_url
    });
    console.log("this is your info", product);
    product.save(function(err) {
      if (err) {
        console.log("something went wrong", err);

        for (var key in err.errors) {
          request.flash("registration", err.errors[key].message);
        }
        response.json(err);
      } else {
        console.log("successfully added a user and their product!");
        response.json(product);
      }
    });
  },
  showProduct: function(request, response) {
    var id = request.params.id; //or request.params['id'];
    console.log("The product id requested is:", id);
    Product.findOne({ _id: id }, function(err, product) {
      if (err) {
        console.log("something went wrong", err);
        response.json(err);
      } else {
        console.log(product);
        response.json({status: "success", product: product });
      }
    });
  },
  updateProduct: function(request, response) {
    var id = request.params.id; //or request.params['id'];
    console.log("The product id requested is:", id);
    Product.update(
      { _id: id },
      {
        title: request.body.title,
        price: request.body.price,
        image_url: request.body.image_url
      },
      function(err, product) {
        if (err) {
          console.log("something went wrong", err);
          return response.json(err);
        } else {
          console.log("Successfully edited a product!");
          response.json({status: "success", product});
        }
      }
    );
  },
  deleteProduct: function(request, response) {
    var id = request.params.id; //or request.params['id'];
    console.log("The product id requested is:", id);
    Product.remove({ _id: id }, function(err) {
      if (err) {
        console.log("something went wrong", err);
        response.json(err);
      } else {
        console.log("Product has successfully been deleted!");
        response.json("Product Deleted");
      }
    });
  }
};
