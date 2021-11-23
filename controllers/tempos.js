const tempoRouter = require("express").Router();
const Tempo = require("../models/tempo");
const User = require("../models/user");

tempoRouter.get("/", async (req, res) => {
  const results = await Tempo
    .find({}).populate("user", {username: 1, name: 1});
    
  res.json(results);
});

tempoRouter.get("/:id", async (req, res, next) => {
  try {
    const tempo = await Tempo.findById(req.params.id);
    if (tempo) {
      res.json(tempo);
    } else {
      res.status(404).end();
    }
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

  const user = await User.findById(body.userId);

  const newTempo = new Tempo({
    name: body.name,
    tempo: body.tempo ? body.tempo : 120,
    user: user._id,
  });

  try {
    const savedTempo = await newTempo.save();
    user.tempos = user.tempos.concat(savedTempo._id);
    await user.save();
    res.json(savedTempo);
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