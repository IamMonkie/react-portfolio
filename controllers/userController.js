const fb = require("../models/usersSchema");

module.exports = {
  // Find User, sort them by date, send them back to the user
  find: function(req, res) {
    fb.Users.find({ firebaseId: req.params.id }).then(function(fbUsers) {
      res.json(fbUsers);
    });
  },

  // get user id from firebase

  //   create new user
  create: function(req, res) {
    fb.Users.create(req.body).then(fbResult => {
      res.json(fbResult);
    });
  },

  // Delete the specified Users
  delete: function(req, res) {
    fb.Users.remove({ _id: req.params.id }).then(function(fbUsers) {
      res.json(fbUsers);
    });
  },
  // Update the specified Users
  update: function(req, res) {
    fb.Users.findOneAndUpdate(
      { firebaseId: req.params.id },
      { $set: { services: req.body } },
      { new: true }
    ).then(function(fbUsers) {
      res.json(fbUsers);
    });
  }
};
