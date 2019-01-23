const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// datatype for URL and how to store it

const toolSchema = new Schema({
  tool_type: { type: String},
  condition: { type: String},
  manufacturer: { type: String},
  min_rental_time: { type: String},
  price_per_hour: { type: String}, 
  picture_url: { type: String},
  deposit: { type: String},
  phone_number: { type: String},
  date: { type: Date, default: Date.now }
});

const Tool = mongoose.model("Tool", toolSchema);

module.exports = Tool;
