var mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/quoting"); // use with modules.exports on line 19

var AuthorSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Name cannot be blank"],
        minlength: [3, "Name needs to be at least 3 characters long."]
      }
    },
    {
      timestamps: true
    }
  );

// module.exports = mongoose.model("Author", AuthorSchema);
mongoose.model("Author", AuthorSchema);
