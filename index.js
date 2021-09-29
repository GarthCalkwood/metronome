require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const Tempo = require("./models/tempo");

morgan.token("tempo", (req, res) => JSON.stringify(req.body));

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms - :tempo"));
app.use(express.static("client/build"));

app.get("/api/tempos", (req, res) => {
  Tempo.find({}).then(results => {
    res.json(results);
  })
})

app.get("/api/tempos/:id", (req, res) => {
  Tempo.findById(req.params.id).then(tempo => {
    res.json(tempo)
  })
})

app.delete("/api/tempos/:id", (req, res) => {
  Tempo.findByIdAndDelete(req.params.id)
    .then(results => {
      res.status(204).end()
    })
    .catch(error => {
      console.log(error)
      res.status(400)
    })
})

app.post("/api/tempos", (req, res) => {
  const body = req.body;

  if (!body.name) {
    return res.status(400).json({
      error: "name missing",
    })
  }

  const newTempo = new Tempo({
    name: body.name,
    tempo: body.tempo ? body.tempo : 120,
  });

  newTempo.save().then(result => {
    console.log(`Added ${body.name}: ${body.tempo} BPM to saved tempos`);
    res.json(newTempo);
  })
})

app.put("/api/tempos/:id", (req, res) => {
  const body = req.body;

  const newTempo = {
    name: body.name,
    tempo: body.tempo,
  }

  Tempo.findByIdAndUpdate(req.params.id, newTempo, {new: true})
    .then(updatedTempo => {
      res.json(updatedTempo)
    })
    .catch(error => {
      console.log(error)
      res.status(400)
    })
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Running on port ", PORT);
})