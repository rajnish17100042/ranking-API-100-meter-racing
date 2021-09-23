const express = require("express");
const router = express.Router();

// include the collection schema
const Player = require("../models/playerSchema");

// route for the home page
router.get("/", (req, res) => {
  res.send("Hello from the home page");
});

// adding a single palyer in the ranking list
router.post("/api/v1/player", async (req, res) => {
  const data = req.body;
  //   console.log(data);

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

// getting all the players in increasing order of their rank
router.get("/api/v1/player", async (req, res) => {
  try {
    // get all the players from the database in sorted order
    const players = await Player.find({}).sort({ rank: 1 });
    res.status(201).json({ results: players });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// getting a single player with the help of rank of a player
router.get("/api/v1/player/:rank", async (req, res) => {
  const rank = req.params.rank;
  try {
    // get all the players from the database in sorted order
    const player = await Player.find({ rank });
    res.status(201).json({ result: player });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// updating the rank of a player with the help of id
router.patch("/api/v1/player/:id", async (req, res) => {
  const _id = req.params.id;
  const rank = req.body;
  try {
    // update the player with the new Rank
    const player = await Player.findByIdAndUpdate(_id, rank, { new: true });
    res.status(201).json({ rupdated_player: player });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// deleting a player from the ranking list using id
router.delete("/api/v1/player/:id", async (req, res) => {
  const _id = req.params.id;
  const rank = req.body;
  try {
    // update the player with the new Rank
    const player = await Player.findByIdAndDelete(_id);
    res.status(201).json({ deleted_player: player });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

// export the router
module.exports = router;
