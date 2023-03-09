const User = require('../../../model/user');
const jwt = require('../../../utils/jwt');
require('dotenv').config();

module.exports.signup = async (data) => {
  try {
    const { name, email } = data;
    const isUser = await User.findOne({ email });
    if (isUser) {
      return { code: 2, message: 'used email', data: null };
    }
    const user = await User.create({
      name,
      email,
    });
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
      message: 'user signed',
      data: {
        accessToken,
        refreshToken,
      },
    };
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};
