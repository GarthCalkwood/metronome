const express = require("express");
require("express-async-errors");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const tempoRouter = require("./controllers/tempos");
const userRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const middleware = require("./utils/middleware");
const config = require("./utils/config");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch(err => {
    logger.error("Error connecting to MongoDB:", error.message);
  });

morgan.token("tempo", (req, res) => JSON.stringify(req.body));

app.use(express.static("client/build"));
app.use(express.json());
app.use(cors());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms - :tempo"));

app.use("/api/tempos", tempoRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;