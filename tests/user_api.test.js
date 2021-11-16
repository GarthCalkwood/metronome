const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/user");
const bcrypt = require("bcrypt");
const helper = require("./test_helper");

beforeEach(async () => {
  await User.deleteMany({});

  const passwordHash = await bcrypt.hash("password", 10);
  const user = new User({
    username: "root",
    name: "root",
    passwordHash
  });

  await user.save();
});

test("creating a new user succeeds", async () => {
  const usersAtStart = await helper.usersInDb();

  const userToAdd = {
    username: "newUser",
    name: "New User",
    password: "newUserPassword"
  };

  await api
    .post("/api/users")
    .send(userToAdd)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  const usersAtEnd = await helper.usersInDb();
  expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

  const usernames = usersAtEnd.map(user => user.username);
  expect(usernames).toContain(userToAdd.username);
});

test("creating a new user fails if the username is already taken", async () => {
  const usersAtStart = await helper.usersInDb();

  const userToAdd = {
    username: "root",
    name: "Invalid User",
    password: "invalidUserPassword"
  };

  const result = await api
    .post("/api/users")
    .send(userToAdd)
    .expect(400)
    .expect("Content-Type", /application\/json/);

  expect(result.body.error).toContain("`username` to be unique");

  const usersAtEnd = await helper.usersInDb();
  expect(usersAtEnd).toHaveLength(usersAtStart.length);
});

afterAll(() => {
  mongoose.connection.close();
});