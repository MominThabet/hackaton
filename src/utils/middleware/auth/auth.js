const { verifyAccessToken } = require('../../jwt');
const { AccessDenied, Unauthorized } = require('../../responses/error/errors');
const User = require('../../../model/user');

module.exports.isAuthenticated = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return next(new Unauthorized('Unauthorized'));
  }
  if (!authorization.startsWith('Bearer')) {
    return next(new Unauthorized('Unauthorized'));
  }

  const split = authorization.split('Bearer ');
  if (split.length !== 2) {
    return next(new Unauthorized('Unauthorized'));
  }
  const token = split[1];

  try {
    const decodedToken = verifyAccessToken(token);

    if (!decodedToken) {
      return next(new Unauthorized('Unauthorized'));
    }

    const user = await User.findOne({ _id: decodedToken.data.id });
    if (!user) {
      return next(new Unauthorized('Unauthorized'));
    }

    if (user.isDeleted) {
      return next(new AccessDenied('Deleted Account'));
    }
    if (user.isBlocked) {
      return next(new AccessDenied('Blocked Account'));
    }
    req.user = user;
    return next();
  } catch (err) {
    console.log(err);
    return next(new Unauthorized('Unauthorized'));
  }
};
