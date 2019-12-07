const userController = require("../controllers/userController");

module.exports = function(app) {
  // express routes
  //   create
  app.post("/api/create", emailController.create);

  app.get("/api/:id", emailController.find);

  app.put("/api/:id", emailController.update);
};
