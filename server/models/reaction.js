const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  // commentID: [commentSchema.id??]
  object: {
    type: String,
    //type = emojis/characters?
    required: true,
  },
  // user: [userSchema.id??]
});

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;
