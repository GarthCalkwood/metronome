const mongoose = require("mongoose");

const tempoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tempo: {
    type: Number,
    min: 40,
    max: 200,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

tempoSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model("Tempo", tempoSchema);