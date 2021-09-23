const express = require("express");
const app = express();

// defining the port
const port = process.env.PORT || 3000;

// requiring the database connection
require("./db/conn");
const router = require("./routers/route");

// add middleware  for the app to understand the incoming json request
app.use(express.json());

app.use(router);
// configure the server on the port number 3000
app.listen(port, (req, res) => {
  console.log(`Server is running on the port ${port}`);
});
