const jwt = require('jsonwebtoken');
require('dotenv').config();

const createAccessToken = (object) => {
  const token = jwt.sign(
    {
      data: object,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    },
    process.env.JWT_ACCESS_KEY
  );
  return token;
};
const createRefreshToken = (object) => {
  const token = jwt.sign(
    {
      data: object,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    },
    process.env.JWT_REFRESH_KEY
  );
  return token;
};
const createRecoveryToken = (object) => {
  const token = jwt.sign(
    {
      data: object,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
    },
    process.env.JWT_RECOVERY_KEY
  );
  return token;
};
const verifyAccessToken = (token) => {
  return jwt.verify(token, process.env.JWT_ACCESS_KEY);
};
const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_KEY);
};
const verifyRecoveryToken = (token) => {
  return jwt.verify(token, process.env.JWT_RECOVERY_KEY);
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  createRecoveryToken,
  verifyAccessToken,
  verifyRefreshToken,
  verifyRecoveryToken,
};
