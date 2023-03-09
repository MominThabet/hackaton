const {
  InternalServerError,
  BadRequest,
} = require('../../../utils/responses/error/errors');
const { Ok } = require('../../../utils/responses/success/successes');
const { login } = require('../../service/user/login');
module.exports = async (req, res, next) => {
  try {
    const { message, data, code } = await login(req.body);
    if (code == 0) {
      return next(new Ok(message, data));
    }
    return next(new BadRequest(message));
  } catch (e) {
    console.log(e);
    next(new InternalServerError());
  }
};
