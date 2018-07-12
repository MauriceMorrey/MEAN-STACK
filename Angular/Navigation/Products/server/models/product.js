var mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/quoting"); // use with modules.exports on line 19

var ProductSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "Title cannot be blank"],
        minlength: [3, "Title needs to be at least 3 characters long."]
      },
      price: {
        type: Number,
        required: [true, "Price cannot be blank"],
        
      },
      image_url: {
        type: String,
        required: [true, "Image-Url cannot be blank"],
      }
    },
    {
      timestamps: true
    }
  );

// module.exports = mongoose.model("Product", ProductSchema);
mongoose.model("Product", ProductSchema);
