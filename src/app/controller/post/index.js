const postController = require("./postController.js");
const { Ok, Created } = require("../../../utils/responses/success/successes");
const {
  InternalServerError,
  BadRequest,
} = require("../../../utils/responses/error/errors");
module.exports.getAllPost = async (req, res, next) => {
  try {
    const { message, data, code } = await postController.getAllPost();

    if (code === 0) {
        return res.status(200).json({
          data
        })
      }
  
      return res.status(500).json({
          error : "error"
      });
  } catch (err) {
    console.log(err);
    return next(new InternalServerError(req));
  }
};

module.exports.addPost = async (req, res, next) => {
  try {
    const { message, data, code } = await postController.addPost({
      ...req.body,
    });

    if (code === 0) {
      return res.status(200).json({
        data
      })
    }

    return res.status(500).json({
        error : "error"
    });
  } catch (err) {
    console.log(err ,'index.js');
    return next(new InternalServerError(req));
  }
};

module.exports.editPost = async (req, res, next) => {
  try {
    const { message, data, code } = await userController.editPost({
      ...req.body , ...req.params
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
