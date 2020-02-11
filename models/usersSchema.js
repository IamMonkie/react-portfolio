const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  firebaseId: {
    type: String,
    required: true,
    unique: true
  },
  services: [
    {
      type: String,
      required: true
    }
  ],
  admin: [
    {
      type: String,
      required: true
    }
  ]
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
