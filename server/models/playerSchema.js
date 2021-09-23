const mongoose = require("mongoose");

// create schema for the collection

const playerSchema = new mongoose.Schema({
  rank: {
    type: Number,
    require: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  dob: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    required: true,
    trim: true,
  },
  event: {
    type: String,
    default: "100 meter",
  },
});

// creating the collection

const Player = new mongoose.model("Player", playerSchema);

module.exports = Player;
