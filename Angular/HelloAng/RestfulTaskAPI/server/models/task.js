var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Name cannot be blank"],
      minlength: [3, "Name needs to be at least 3 characters long."]
    },
    description: {
      type: String,
      default: "",
      required: [true, "Description cannot be blank"]
    },
    completed: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

mongoose.model("Task", TaskSchema);
