const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  // You can add other fields like userId, date, etc., based on your requirements
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
