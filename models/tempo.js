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
  }
});

module.exports = mongoose.model("Tempo", tempoSchema);