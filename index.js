const config = require("./utils/config");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const temposRouter = require("./controllers/tempos");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

morgan.token("tempo", (req, res) => JSON.stringify(req.body));

const app = express();

app.use(express.static("client/build"));
app.use(express.json());
app.use(cors());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms - :tempo"));

app.use("/api/tempos", temposRouter)

app.use(middleware.errorHandler);

const PORT = config.PORT;
app.listen(PORT, () => {
  logger.info("Running on port ", PORT);
})