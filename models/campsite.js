const mongoose = require("mongoose"); // import mongoose
const Schema = mongoose.Schema; // makes short hand to mongoose.Schema function

// instantiates a new object - first arg (required) object contains definition for schema via its properties; second arg - various configuration options
const commentSchema = new Schema(
  {
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const campsiteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    comments: [commentSchema],
  },
  {
    timestamps: true,
    // when new document created from schema, mongoose gives it createdAt & updatedAt properties
  }
);

// first argument should be capitalized singular of the lower-case plural collection ('campsites'), second arg - schema
const Campsite = mongoose.model("Campsite", campsiteSchema);

module.exports = Campsite;
