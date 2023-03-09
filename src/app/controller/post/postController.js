const Post = require('../../models/post');
const bcrypt = require('bcrypt');

module.exports.getAllPost = async (data) => {
  try {
    let post = await Post.find({ userId: '6408bbfd42e9ef20a539c0df' });
    if (!post) {
      return { code: 1, message: 'We dont have Post', data: null };
    }
    return { code: 0, message: 'commonSuccess.message', data: { post } };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports.addPost = async (data) => {
  const { description, userId } = data;

  try {
    const post = await Post.create({
      userId,
      description,
    });
    return { code: 0, message: 'commonSuccess.message', data: { post } };
  } catch (error) {
    console.log(error, 'dsadsada');
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
      return { code: 0, message: 'commonSuccess.message', data: user };
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
  const { postId, email, action } = data;
  try {
    const post = await Post.findOne({
      userId,
      description,
    });

    if (!post) {
      return { code: 1, message: 'user.notFoundUser', data: null };
    }

    post.deleteOne({
      userId,
      description,
    });

    return { code: 0, message: 'commonSuccess.message', data: user };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
