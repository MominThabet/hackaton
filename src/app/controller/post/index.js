const postController = require('./postController.js');
const { Ok } = require('../../../utils/responses/success/successes');
const {
  InternalServerError,
  BadRequest,
} = require('../../../utils/responses/error/errors');
module.exports.getAllPost = async (req, res, next) => {
  try {
    const { message, data, code } = await postController.getAllPost();

    if (code === 0) {
      return res.status(200).json({
        data,
      });
    }

    return res.status(500).json({
      error: 'error',
    });
  } catch (err) {
    console.log(err);
    return next(new InternalServerError(req));
  }
};

module.exports.addPost = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { message, data, code } = await postController.addPost({
      userId,
      ...req.body,
    });

    if (code === 0) {
      return res.status(200).json({
        data,
      });
    }

    return res.status(500).json({
      error: 'error',
    });
  } catch (err) {
    console.log(err, 'index.js');
    return next(new InternalServerError(req));
  }
};

module.exports.editPost = async (req, res, next) => {
  const userId = req.user._id;
  const postId = req.params.postId;
  console.log(req.params);
  try {
    const { message, data, code } = await postController.editPost({
      userId,
      postId,
      ...req.body,
    });

    if (code === 0) {
      return next(new Ok(message, data));
    }

    return next(new BadRequest(message));
  } catch (err) {
    console.log(err);
    return next(new InternalServerError(req));
  }
};

module.exports.deletePost = async (req, res, next) => {
  try {
    const { message, data, code } = await userController.deletePost({
      ...req.body,
    });

    if (code === 0) {
      return next(new Success(message, data));
    }

    return next(new BadRequest(message));
  } catch (err) {
    console.log(err);
    return next(new InternalServerError(req));
  }
};
