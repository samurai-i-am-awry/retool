const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// datatype for URL and how to store it

const toolSchema = new Schema({
  type: { type: String, required: true },
  condition: { type: String, required: true },
  price: { type: Number, required: true },
  manufacturer: { type: String, required: true },
  min_rental_time: { type: Date, required: true }, 
  picture_url: { type: String, required: true },
  deposit: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Tool = mongoose.model("Tool", toolSchema);

module.exports = Tool;
