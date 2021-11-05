const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const tempo = require("../models/tempo");
const api = supertest(app);
const Tempo = require("../models/tempo");
const helper = require("./test_helper");

beforeEach(async () => {
  await Tempo.deleteMany({});
  await Tempo.insertMany(helper.initialTempos);
});

describe("Retreiving initial tempos", () => {
  test("returns all tempos", async () => {
    const response = await api.get("/api/tempos");

    expect(response.body.length).toEqual(helper.initialTempos.length);
  });

  test("returns the tempos as json", async () => {
    await api
      .get("/api/tempos")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

describe("Viewing a specific tempo", () => {
  test("succeeds with a valid id", async () => {
    const tempos = await helper.temposInDb();

    const tempoToRetreive = tempos[0];

    const retreivedTempo = await api
      .get(`/api/tempos/${tempoToRetreive.id}`)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(retreivedTempo.body).toEqual(JSON.parse(JSON.stringify(tempoToRetreive)));
  });

  test("fails with a nonexistent id", async () => {
    const nonExistingId = await helper.nonExistingId();

    await api
      .get(`/api/tempos/${nonExistingId}`)
      .expect(404);
  });
});

describe("Adding a tempo", () => {
  test("succeeds with valid data", async () => {
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

  test("fails with invalid data", async () => {
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
});

describe("Deleting a tempo", () => {
  test("succeeds with a valid id", async () => {
    const temposAtStart = await helper.temposInDb();
    const tempoToDelete = temposAtStart[0];

    await api
      .delete(`/api/tempos/${tempoToDelete.id}`)
      .expect(204);

    const temposAtEnd = await helper.temposInDb();
    expect(temposAtEnd).toHaveLength(temposAtStart.length - 1);

    const tempoNames = temposAtEnd.map(tempo => tempo.name);
    expect(tempoNames).not.toContain(tempoToDelete.name);
  });
})

describe("Editing a tempo", () => {
  test("succeeds with a valid id", async () => {
    const temposAtStart = await helper.temposInDb();
    const tempoToEdit = temposAtStart[0];
  
    const newTempo = {
      name: "edited",
      tempo: 80
    };
  
    await api
      .put(`/api/tempos/${tempoToEdit.id}`)
      .send(newTempo)
      .expect("Content-Type", /application\/json/);
  
    const temposAtEnd = await helper.temposInDb();
    const tempoNames = temposAtEnd.map(tempo => tempo.name);
  
    expect(tempoNames).not.toContain(tempoToEdit.name);
    expect(tempoNames).toContain(newTempo.name);
  });
});

afterAll(() => {
  mongoose.connection.close();
});