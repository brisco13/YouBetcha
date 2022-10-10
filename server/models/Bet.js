const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require(`./reaction`);

const betSchema = new Schema({
  desc: {
    type: String,
    required: 'You must describe the bet!',
    minlength: 1,
    maxlength: 400,
    trim: true,
  },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
      // required: true,
    },
  ],
  betAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  postImage: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      reactions: [reactionSchema],
    },
  ],
  winner: [{
      type: Schema.Types.ObjectId,
      ref: "user",
      // required: true,
    },],
  reactions: [reactionSchema]
});

const Bet = model('Bet', betSchema);

module.exports = Bet;
