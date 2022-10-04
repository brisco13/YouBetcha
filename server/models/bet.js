const { Schema, model } = require("mongoose");

const betSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  users: [userSchema],
  betDescription: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  comments: [commentSchema],
  // winner: [user_id],
  //loser: [user_id],
  reactions: [reactionSchema],
});

const Bet = model("bet", betSchema);

module.exports = Bet;
