var mongoose = require("mongoose");


var DogSchema = new mongoose.Schema(
    {
      dog_name: { type: String, required: "dog name cannot be blank", minlength: 3 },
      dog_breed: { type: String, required: "dog name cannot be blank", maxlength: 20 },
      age: { type: Number, min: 1, max: 150 },
      speed: { type: Number, min: 1, max: 150 }
    },
    {
      timestamps: true
    }
  );

mongoose.model("Dog", DogSchema);