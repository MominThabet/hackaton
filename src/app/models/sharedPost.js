const mongoose = require('mongoose');

const sharedPostSchema = new mongoose.Schema({
  receiverEmail: {
    type: String,
    required: true,
  },
<<<<<<< HEAD
  postId: {
    type: mongoose.Schema.ObjectId,
  },
  Action: {
    type: String,
    enum: ['Viewed only', 'Viewed only and edit'],
    required: true,
  },
});
=======
  postId:{
      type: mongoose.Schema.ObjectId
  },    
  action:{
      type: String,
      enum:["Viewed only" , "Viewed only and edit"],
      required: true,
  }
  });
>>>>>>> origin/Post
const sharedPost = mongoose.model('sharedPost', sharedPostSchema);
module.exports = sharedPost;
