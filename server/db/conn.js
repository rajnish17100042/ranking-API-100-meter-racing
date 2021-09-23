const mongoose = require("mongoose");

// connect to the database
mongoose
  .connect("mongodb://127.0.0.1:27017/racing-100-meters")
  .then((req, res) => {
    console.log("database connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
