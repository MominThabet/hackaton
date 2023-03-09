const Post = require("../../models/post");
const SharedPost = require("../../models/sharedPost");
const bcrypt = require("bcrypt");

module.exports.getAllPost = async (data) => {
  try {
    let post = await Post.find({ userId: req.user._id });
    if (!post) {
      return { code: 1, message: "We dont have Post", data: null };
    }
    return { code: 0, message: "commonSuccess.message", data: { post } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.addPost = async (data) => {
  const { description, image } = data;
  try {
    const post = await Post.create({
      userId : req.user._id,
      description,
      image,
    });
    return { code: 0, message: "commonSuccess.message", data: { post } };
  } catch (error) {
    console.log(error, "dsadsada");
    throw new Error(error);
  }
};

module.exports.editPost = async (data) => {
  console.log('dsadas')
  const { postId, userId, description } = data;
  try {
    const post = await Post.findOne({
      postId
    });

    if (!post) {
      return { code: 1, message: "post.notFoundUser", data: null };
    }

    if (userId == post.userId) {
      post.description = description;
      await post.save();
      return { code: 0, message: "commonSuccess.message", data: user };
    }

    return { code: 1, message: "post.notFoundUser", data: null };
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
      return { code: 0, message: "commonSuccess.message", data: post };
    }

    return { code: 1, message: "post.deleteFailed", data: null };
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
      action
    });

    if (!sharedPost) {
      return { code: 1, message: "post.notFoundUser", data: null };
    }

    return { code: 0, message: "commonSuccess.message", data: sharedPost };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
