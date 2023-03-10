const postController = require('./postController.js');
const { Created, Ok } = require('../../../utils/responses/success/successes');
const {
  InternalServerError,
  BadRequest,
} = require('../../../utils/responses/error/errors');
module.exports.getAllPost = async (req, res, next) => {
  try {
    const user = req.user;
    const { message, code, data } = await postController.getAllPost(user, {
      ...req.body,
    });
    if (!data) {
      data = 'no posts';
    }
    if (code === 0) {
      return next(new Ok(message, { data }));
      // return res.status(200).json({
      //   data,
      // });
    }

    return next(new BadRequest(message, data));
  } catch (err) {
    // console.log(err);
    return next(new InternalServerError(req));
  }
};

module.exports.addPost = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { message, data, code } = await postController.addPost({
      userId,
      ...req.body,
      req,
    });

    if (code === 0) {
      return res.status(200).json({
        data,
      });
    }

    return res.status(500).json({
      error: message,
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

module.exports.sharePost = async (req, res, next) => {
  try {
    console.log(req.params);
    const { message, data, code } = await postController.sharePost({
      ...req.body,
      ...req.params,
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
    console.log(err);
    return next(new InternalServerError(req));
  }
};
