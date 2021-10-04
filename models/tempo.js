const config = require("../utils/config");
const logger = require("../utils/logger");
const mongoose = require("mongoose");

const url = config.MONGODB_URI;

mongoose.connect(url)
  .then(result => {
    logger.info("connected to MongoDB");
  })
  .catch(error => {
    logger.error("Error connecting to MongoDB: ", error.message);
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