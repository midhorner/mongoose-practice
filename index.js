const mongoose = require("mongoose");
const Campsite = require("./models/campsite");

const url = "mongodb://localhost:27017/nucampsite"; // automattically connect to nucampsitedb in mongodb server
const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then(() => {
  console.log("Connected correctly to server");

  const newCampsite = new Campsite({
    name: "React Lake Campground",
    description: "test",
  });

  newCampsite
    .save() // mongoose method that saves document to database - returns promise
    .then((campsite) => {
      console.log(campsite);
      return Campsite.find(); // returns all documents based on the model as array - promise
    })
    .then((campsites) => {
      console.log(campsites); // logging array
      return Campsite.deleteMany(); // deletes all documents based on the model
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
      mongoose.connection.close();
    });
});
