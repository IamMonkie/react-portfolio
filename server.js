const express = requre("express");
const mongoose = requrie("mongoose");
const bodyParser = require("body-parser");

const app = express();

// body parser middleware
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(`ERROR: ${err}`));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
