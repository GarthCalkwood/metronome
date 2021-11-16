const Tempo = require("../models/tempo");
const User = require("../models/user");

const initialTempos = [
  {
    name: "C major scale",
    tempo: 120
  },
  {
    name: "D minor scale",
    tempo: 100
  }
];

const nonExistingId = async () => {
  const tempo = new Tempo({
    name: "Will be deleted soon",
    tempo: 120
  })
  await tempo.save();
  await tempo.remove();

  return tempo._id.toString();
};

const temposInDb = async () => {
  const tempos = await Tempo.find({});
  return tempos.map(tempo => tempo.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map(user => user.toJSON());
};

module.exports = {
  initialTempos,
  nonExistingId,
  temposInDb,
  usersInDb
};