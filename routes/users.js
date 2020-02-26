const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// get all
router.get("/", async (req, res) => {
  try {
    const users = await userController.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
/*// get one
  app.get("/:id", userController.find);
  // create one
  app.post("/", userController.create);
  // update one
  app.patch("/:id", userController.update);
  // delete one
  app.delete("/:id", userController.delete);*/

// get one
router.get("/:id", (req, res) => {
  res.send("user id: " + req.params.id);
});

// create one
router.post("/", (req, res) => {
  res.send("Hello World. I am creating one");
});

// update one
router.patch("/:id", (req, res) => {
  res.send("Hello World. I am updating one");
});

// delete one
router.get("/:id", (req, res) => {
  res.send("Hello World. I am deleting one");
});

module.exports = router;
