const { Schema, model } = require("mongoose");

const file1Schema = new Schema({
  attribute1: {
    type: String,
    required: true,
  },
  attribute2: {
    type: String,
    required: true,
  },
  attribute3: {
    type: Number,
  },
  attribute4: {
    type: Number,
  },
});

const file1 = model("file1", file1Schema);

module.exports = file1;
