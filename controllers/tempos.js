const temposRouter = require("express").Router();
const Tempo = require("../models/tempo");

temposRouter.get("/", (req, res) => {
  Tempo.find({}).then(results => {
    res.json(results);
  })
})

temposRouter.get("/:id", (req, res, next) => {
  Tempo.findById(req.params.id)
    .then(tempo => {
      res.json(tempo)
    })
    .catch(error => next(error))
})

temposRouter.delete("/:id", (req, res, next) => {
  Tempo.findByIdAndDelete(req.params.id)
    .then(results => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

temposRouter.post("/", (req, res, next) => {
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

  newTempo.save()
    .then(result => {
      res.json(newTempo);
    })
    .catch(error => next(error))
})

temposRouter.put("/:id", (req, res, next) => {
  const body = req.body;

  const newTempo = {
    name: body.name,
    tempo: body.tempo,
  }

  Tempo.findByIdAndUpdate(req.params.id, newTempo, {new: true})
    .then(updatedTempo => {
      res.json(updatedTempo)
    })
    .catch(error => next(error))
})

module.exports = temposRouter