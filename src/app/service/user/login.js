const User = require('../../../model/user');
const jwt = require('../../../utils/jwt');
require('dotenv').config();

module.exports.login = async (data) => {
  try {
    const { email } = data;
    const user = await User.findOne({ email });
    if (!user) {
      return { code: 2, message: 'user not found', data: null };
    }
    const accessToken = jwt.createAccessToken({
      id: user._id,
      name: user.name,
      email: user.email,
    });
    const refreshToken = jwt.createRefreshToken({
      id: user._id,
      name: user.name,
      email: user.email,
    });

    return {
      code: 0,
      message: 'logged in',
      data: { accessToken, refreshToken },
    };
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
