const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

module.exports = function(app) {
  // express routes

  // get all users
  // router.get("/", (req, res) => {});
  // res.send("Hello World");

  // create new user
  app.post("/api/create", userController.create);

  // find user
  app.get("/api/:id", userController.find);

  // update user
  app.patch("/api/:id", userController.update);
};

// delete user
app.delete("/api/:id", userController.delete);
