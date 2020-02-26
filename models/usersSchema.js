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
  photo: [
    {
      type: String /*update type to image */,
      required: false,
      data: Buffer,
      contentType: String
    }
  ],
  admin: [
    {
      type: String,
      required: true
    }
  ],
  creationDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
