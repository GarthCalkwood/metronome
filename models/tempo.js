const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

mongoose.connect(url)
  .then(result => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("Error connecting to MongoDB: ", error.message);
  });

const tempoSchema = new mongoose.Schema({
  name: String,
  tempo: Number,
});

module.exports = mongoose.model("Tempo", tempoSchema);