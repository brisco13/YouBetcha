const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  winCount: {
    type: Number,
  },
  betCount: {
    type: Number,
  },
  bets: [betSchema],
  // friends: [user_id]???
});

const User = model("user", userSchema);

module.exports = User;
