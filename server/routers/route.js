const express = require("express");
const router = express.Router();

// route for the home page
router.get("/", (req, res) => {
  res.send("Hello from the home page");
});

// export the router
module.exports = router;
