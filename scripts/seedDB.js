const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/retool"
);

const toolSeed = [
  {
    tool_type: "Hammer",
    condition: "Fair", 
    manufacturer: "Home Depot",
    min_rental_time: "hour",
    price_per_hour: "two",
    picture_url: "ladjfa;ldfa",
    deposit: "one",
    phone_number: "twentythree",
    description: "This is a tool",
    date: "test"
  }
  
];

db.Tool
  .remove({})
  .then(() => db.Tool.collection.insertMany(toolSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
