const express = require("express");
const app = express();

// defining the port
const port = process.env.PORT || 3000;

// requiring the database connection
require("./db/conn");

// configure the server on the port number 3000
app.listen(port, (req, res) => {
  console.log(`Server is running on the port ${port}`);
});
