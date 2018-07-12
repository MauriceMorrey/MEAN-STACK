var mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/quoting"); // use with modules.exports on line 19

var QuoteSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: [true, "Name cannot be blank"],
        minlength: [3, "Name needs to be at least 3 characters long."]
      },
      myQuote: { type: String, required: [true, "Quote cannot be blank"] }
    },
    {
      timestamps: true
    }
  );

// module.exports = mongoose.model("Quote", QuoteSchema);
mongoose.model("Quote", QuoteSchema);
