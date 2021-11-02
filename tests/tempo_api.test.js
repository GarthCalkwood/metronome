const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const tempo = require("../models/tempo");
const api = supertest(app);
const Tempo = require("../models/tempo");
const helper = require("./test_helper");

beforeEach(async () => {
  await Tempo.deleteMany({});
  let tempoObject = new Tempo(helper.initialTempos[0]);
  await tempoObject.save();
  tempoObject = new Tempo(helper.initialTempos[1]);
  await tempoObject.save();
});

test("tempos are returned as json", async () => {
  await api
    .get("/api/tempos")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("all tempos can be retreived", async () => {
  const response = await api.get("/api/tempos");

  expect(response.body.length).toEqual(helper.initialTempos.length);
});

test("a specific tempo can be retreived", async () => {
  const tempos = await helper.temposInDb();

  const tempoToRetreive = tempos[0];

  const retreivedTempo = await api
    .get(`/api/tempos/${tempoToRetreive._id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(retreivedTempo.body).toEqual(JSON.parse(JSON.stringify(tempoToRetreive)));
});

test("a valid tempo can be added", async () => {
  const validTempo = {
    name: "valid tempo",
    tempo: 120
  };

  await api
    .post("/api/tempos")
    .send(validTempo)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  const temposAtEnd = await helper.temposInDb();
  expect(temposAtEnd).toHaveLength(helper.initialTempos.length + 1);

  const names = temposAtEnd.map(tempo => tempo.name);
  expect(names).toContain(validTempo.name);
});

test("an invalid tempo is not added", async () => {
  const invalidTempo = {
    tempo: 120
  };

  await api
    .post("/api/tempos")
    .send(invalidTempo)
    .expect(400);

  const temposAtEnd = await helper.temposInDb();
  expect(temposAtEnd).toHaveLength(helper.initialTempos.length);
});

test("a tempo can be deleted", async () => {
  const temposAtStart = await helper.temposInDb();
  const tempoToDelete = temposAtStart[0];

  await api
    .delete(`/api/tempos/${tempoToDelete._id}`)
    .expect(204);

  const temposAtEnd = await helper.temposInDb();
  expect(temposAtEnd).toHaveLength(temposAtStart.length - 1);

  const tempoNames = temposAtEnd.map(tempo => tempo.name);
  expect(tempoNames).not.toContain(tempoToDelete.name);
})

afterAll(() => {
  mongoose.connection.close();
})