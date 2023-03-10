const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});
const post = mongoose.model('post', postSchema);
module.exports = post;
