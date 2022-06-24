const mongoose = require("mongoose");

const kittenSchema = mongoose.Schema({
  name: { type: String, default: "" },
  color: { type: String, default: "" },
  age: { type: Number, default: 0 },
});

const Kitten = mongoose.model("Kitten", kittenSchema);

module.exports = Kitten;
