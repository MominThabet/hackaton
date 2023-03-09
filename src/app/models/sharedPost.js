const mongoose = require('mongoose');

const sharedPostSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: 'users',
    required: true,
  },
  receiverEmail: {
    type: String,
    required: true,
  },
  postId:{
      type: mongoose.Schema.ObjectId
  },    
  Action:{
      type: String,
      enum:["Viewed only" , "Viewed only and edit"],
      required: true,
  }
  });
const sharedPost = mongoose.model('sharedPost', sharedPostSchema);
module.exports = sharedPost;