const mongoose = require("mongoose");

// create schema for the collection

const playerSchema = new mongoose.Schema({
  ranking: {
    type: number,
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
    type: Date,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
});
