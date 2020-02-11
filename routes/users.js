const express = require("express");
const userController = require("../controllers/userController");

module.exports = function(app) {
  // express routes
  //   create
  app.post("/api/create", userController.create);

  app.get("/api/:id", userController.find);

  app.put("/api/:id", userController.update);
};
