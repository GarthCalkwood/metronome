const bcrypt = require("bcrypt");
const userRouter = require("express").Router();
const User = require("../models/user");

userRouter.post("/", async (req, res, next) => {
  const body = req.body;

  const passwordHash = await bcrypt.hash(body.password, 10);

  const newUser = new User({
    username: body.username,
    name: body.name,
    passwordHash, 
  });
  
  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    next(err);
  };
});

module.exports = userRouter;