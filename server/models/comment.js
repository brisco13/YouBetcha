const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  // betID: [betSchema.id?] not sure how to link this one...
  body: {
    type: String,
    required: true,
  },
  reaction: [reactionSchema],
  //   user: [userSchema] or [user_id] ???
});

const Comment = model("comment", commentSchema);

module.exports = Comment;
