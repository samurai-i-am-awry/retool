const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/retool"
);

const toolSeed = [
  {
    type: "Hammer", 
    condition: "Fair", 
    price: 12, 
    manufacturer: "Home Depot", 
    min_rental_time: 2, 
    picture_url: "lkajdlaj;fja.aldjalfj", 
    deposit: 10, 
    date: new Date(Date.now())
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
