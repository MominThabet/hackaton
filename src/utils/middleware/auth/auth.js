const { verifyAccessToken } = require('../../jwt');
const { Unauthorized } = require('../../responses/error/errors');
const User = require('../../../model/user');

module.exports.isAuthenticated = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return next(new Unauthorized('Unauthorized 1'));
  }
  if (!authorization.startsWith('Bearer')) {
    return next(new Unauthorized('Unauthorized 2'));
  }
  const split = authorization.split('Bearer ');
  if (split.length !== 2) {
    return next(new Unauthorized('Unauthorized 3'));
  }
  const token = split[1];
  try {
    const decodedToken = verifyAccessToken(token);

    if (!decodedToken) {
      return next(new Unauthorized('Unauthorized No Token'));
    }
    const user = await User.findOne({ _id: decodedToken.data.id });
    if (!user) {
      return next(new Unauthorized('Unauthorized 4'));
    }

    req.user = user;
    return next();
  } catch (err) {
    console.log(err);
    return next(new Unauthorized('Unauthorized 5'));
  }
};
