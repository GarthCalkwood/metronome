const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

morgan.token("tempo", (req, res) => JSON.stringify(req.body));

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan(":method :url :status :res[content-length] - :response-time ms - :tempo"));
app.use(express.static("client/build"));

let tempos = [
  {
    id: 1,
    name: "Moonlight Sonata",
    tempo: 60,
  },
  {
    id: 2,
    name: "C major scale",
    tempo: 120,
  },
]

app.get("/info", (req, res) => {
  res.send(
    `<h3>There are ${tempos.length} saved tempos</h3>
    <p>${new Date}</p>`
  )
})

app.get("/api/tempos", (req, res) => {
  res.json(tempos);
})

app.get("/api/tempos/:id", (req, res) => {
  const id = Number(req.params.id);
  const tempo = tempos.find(tempo => tempo.id === id);

  if (!tempo) {
    res.status(404).end();
  } else {
    res.json(tempo);
  }
})

app.delete("/api/tempos/:id", (req, res) => {
  const id = Number(req.params.id);
  tempos = tempos.filter(tempo => tempo.id !== id);
  
  res.status(204).end();
})

const generateId = () => {
  const maxId = Math.max(...tempos.map(tempo => tempo.id));
  return maxId + 1;
}

app.post("/api/tempos", (req, res) => {
  const body = req.body;

  if (!body.name) {
    return res.status(400).json({
      error: "name missing",
    })
  }

  const newTempo = {
    id: generateId(),
    name: body.name,
    tempo: body.tempo ? body.tempo : 120,
  };

  tempos = tempos.concat(newTempo);

  res.json(newTempo)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Running on port ", PORT);
})