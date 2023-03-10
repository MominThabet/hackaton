<<<<<<< HEAD
const Post = require('../../models/post');
const sharedPost = require('../../models/sharedPost');
const bcrypt = require('bcrypt');
=======
const Post = require("../../models/post");
const SharedPost = require("../../models/sharedPost");
const bcrypt = require("bcrypt");
const S3 = require("../../../utils/AWS/S3");
>>>>>>> origin/Post

module.exports.getAllPost = async (req) => {
  try {
<<<<<<< HEAD
    const { _id: userId, email: userEmail } = data;
    let posts = await Post.find({
      userId: userId,
    });

    let sharedPosts = await sharedPost.find({
      receiverEmail: userEmail,
    });

    const viewPosts = posts.concat(sharedPosts);

    if (!viewPosts) {
      return { code: 1, message: "you don't have any Posts", data: null };
=======
    let post = await Post.find({ userId: req.user._id });
    if (!post) {
      return { code: 1, message: "We dont have Post", data: null };
>>>>>>> origin/Post
    }

    return { code: 0, message: 'commonSuccess message', data: viewPosts };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.addPost = async (data) => {
<<<<<<< HEAD
  const { description, userId } = data;

=======
  const { description, req } = data;
  const userId = req.user._id;
>>>>>>> origin/Post
  try {
    let repeatedPost = await Post.findOne({
      userId,
      description,
    });
    if (repeatedPost) {
      return {
        code: 2,
        message: "Post is repeated in the same user change the content Ahmad ",
        data: null,
      };
    }
    const post = await Post.create({
      userId,
      description,
    });
<<<<<<< HEAD
    return { code: 0, message: 'commonSuccess.message', data: { post } };
  } catch (error) {
    console.log(error, 'dsadsada');
=======

    if (req.file) {
      const imageName = req.file.originalname;
      let image = await S3.upload({
        Bucket: "image-nodejs", // bucket name in aws
        Key: imageName, // name file
        Body: req.file.buffer,
        signatureVersion: "v4",
      }).promise();

      if (!image) {
        return { code: 2, message: "failed file upload", data: null };
      }
      post.image = image.Location;
      await post.save();
    }

    return { code: 0, message: "commonSuccess.message", data: { post } };
  } catch (error) {
    console.log(error);
>>>>>>> origin/Post
    throw new Error(error);
  }
};

module.exports.editPost = async (data) => {
  const { postId, userId, description } = data;
  try {
    const post = await Post.findOne({
      _id: postId,
    });

    if (!post) {
      return { code: 1, message: 'post not Found post', data: null };
    }
    console.log(userId, post.userId);
    if (userId == post.userId) {
      post.description = description;
      await post.save();
<<<<<<< HEAD
      return { code: 0, message: 'commonSuccess message', data: user };
=======
      return { code: 0, message: 'commonSuccess.message', data: user };
>>>>>>> origin/Post
    }

    return { code: 1, message: 'permission denied', data: null };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.deletePost = async (data) => {
  const { postId, userId, description } = data;
  try {
    const post = await Post.findOne({
      postId,
    });

    if (userId == post.userId) {
      post.deleteOne({
        userId,
        description,
      });
      await post.save();
      return { code: 0, message: 'commonSuccess.message', data: post };
    }

    return { code: 1, message: 'post.deleteFailed', data: null };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.sharePost = async (data) => {
  const { receiverEmail, postId, action } = data;
  try {
    const sharedPost = await SharedPost.create({
      receiverEmail,
      postId,
      action,
    });

<<<<<<< HEAD
    if (!post) {
      return { code: 1, message: 'user.notFoundUser', data: null };
    }

    post.deleteOne({
      userId,
      description,
    });

    return { code: 0, message: 'commonSuccess.message', data: user };
=======
    if (!sharedPost) {
      return { code: 1, message: "post.notFoundUser", data: null };
    }

    return { code: 0, message: "commonSuccess.message", data: sharedPost };
>>>>>>> origin/Post
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
