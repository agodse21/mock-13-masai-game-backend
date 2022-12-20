const express = require("express");
const { UserController } = require("../controllers/user.controller");

const UserRouter = express.Router();
UserRouter.post("/adduser",  UserController.AddUser);
UserRouter.get("/randomeword",UserController.GenrateRandomWord)
module.exports = {
  UserRouter,
};
