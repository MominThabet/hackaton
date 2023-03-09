const  Post  = require("../../models/post");
const bcrypt = require("bcrypt");

module.exports.getAllPost = async (data) => {
  try {
    let post = await Post.find({userId:"6408bbfd42e9ef20a539c0df"});
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
  const { userId, description, image } = data;
  try {
    const post = await Post.create({
      userId,
      description,
      image,
    });
    return { code: 0, message: "commonSuccess.message", data: { post } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.editPost = async (data) => {
  const { userId, description, image } = data;
  try {
    const post = await Post.findOne({
      userId,
      description,
    });

    if (!post) {
      return { code: 1, message: "post.notFoundUser", data: null };
    }

    post.userId = userId;
    post.description = description;

    if(image){
      post.image = image;
    }

    await post.save();

    return { code: 0, message: "commonSuccess.message", data: user };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.deletePost = async (data) => {
  const { name, title, description } = data;
  try {
    const post = await Post.findOne({
      userId,
      description,
    });

    if (!post) {
      return { code: 1, message: "user.notFoundUser", data: null };
    }

    post.deleteOne({
      userId,
      description,
    });

    return { code: 0, message: "commonSuccess.message", data: user };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.sharePost = async (data) => {
  const { postId , email , action } = data;
  try {

    const post = await Post.findOne({
      userId,
      description,
    });

    if (!post) {
      return { code: 1, message: "user.notFoundUser", data: null };
    }

    post.deleteOne({
      userId,
      description,
    });

    return { code: 0, message: "commonSuccess.message", data: user };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

