const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const reactionSchema = require(`./Reaction`);

const betSchema = new Schema({
  desc: {
    type: String,
    minlength: 1,
    maxlength: 400,
    trim: true,
  },
  participants: {
    type: String,
  },
  betAuthor: {
    type: String,
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
  winner: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      // required: true,
    },
  ],
  reactions: [reactionSchema],
});

const Bet = model("Bet", betSchema);

module.exports = Bet;
