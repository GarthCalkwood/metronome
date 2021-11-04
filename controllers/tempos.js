const tempoRouter = require("express").Router();
const Tempo = require("../models/tempo");

tempoRouter.get("/", async (req, res) => {
  const results = await Tempo.find({});
  res.json(results);
});

tempoRouter.get("/:id", async (req, res, next) => {
  try {
    const tempo = await Tempo.findById(req.params.id);
    res.json(tempo);
  } catch (err) {
    next(err);
  };
});

tempoRouter.delete("/:id", async (req, res, next) => {
  try {
    await Tempo.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  };
});

tempoRouter.post("/", async (req, res, next) => {
  const body = req.body;

  if (!body.name) {
    return res.status(400).json({
      error: "name missing",
    });
  };

  const newTempo = new Tempo({
    name: body.name,
    tempo: body.tempo ? body.tempo : 120,
  });

  try {
    await newTempo.save();
    res.json(newTempo);
  } catch (err) {
    next(err);
  };
});

tempoRouter.put("/:id", async (req, res, next) => {
  const body = req.body;

  const newTempo = {
    name: body.name,
    tempo: body.tempo,
  };

  try {
    const updatedTempo = await Tempo.findByIdAndUpdate(req.params.id, newTempo, {new: true});
    res.json(updatedTempo);
  } catch (err) {
    next(err);
  }
});

module.exports = tempoRouter;