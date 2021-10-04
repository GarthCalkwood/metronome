const config = require("../utils/config");
const mongoose = require("mongoose");

const url = config.MONGODB_URI;

mongoose.connect(url)
  .then(result => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("Error connecting to MongoDB: ", error.message);
  });

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