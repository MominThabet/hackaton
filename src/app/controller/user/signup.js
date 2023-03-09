const {
  InternalServerError,
  BadRequest,
} = require('../../../utils/responses/error/errors');
const { Ok } = require('../../../utils/responses/success/successes');
const { signup } = require('../../service/user/signup');
module.exports = async (req, res, next) => {
  try {
    const { message, data, code } = await signup(req.body);
    if (code == 0) {
      return next(new Ok(message, data));
    }
    return next(new BadRequest(message));
  } catch (e) {
    console.log(e);
    return next(new InternalServerError());
  }
};
