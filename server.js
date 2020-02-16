require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const app = express();

// DB Config
//if deployed, use the deployed database, otherwise use local database

const db = process.env.mongoURI || "mongodb://localhost/DATABASE_URL";

// connect to mongo Database
mongoose
  .connect(db, { useNewUrlParser: true }, { useUnifiedTopology: true })
  .then(() => console.log("Connected to Database..."))
  .catch(err => console.log(`ERROR: ${err}`));

// Server
// Listen to port
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// define middleware
app.use(express.json());
app.use(bodyParser.json());

//const userRouter = require("./routes/users.js");
//app.use("./routes/users.js");
