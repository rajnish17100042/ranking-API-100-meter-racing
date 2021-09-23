const express = require("express");
const router = express.Router();

// include the collection schema
const Player = require("../models/playerSchema");

// route for the home page
router.get("/", (req, res) => {
  res.send("Hello from the home page");
});

// add a single palyer in the ranking list
router.post("/api/v1/player", async (req, res) => {
  const data = req.body;
  console.log(data);

  const { rank, name, dob, country, score } = req.body;
  // server side validation
  if (!rank || !name || !dob || !country || !score) {
    return res
      .status(422)
      .json({ error: "Please fill all the details properly" });
  }

  try {
    const player = new Player(req.body);

    //add the data to the database
    const playerAdded = await player.save();

    if (playerAdded) {
      res.status(201).json({ result: playerAdded });
    }
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// export the router
module.exports = router;
