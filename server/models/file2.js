const { Schema, model } = require('mongoose');

const file2Schema = new Schema({
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

const file2 = model('file2', file2Schema);

module.exports = file2;
