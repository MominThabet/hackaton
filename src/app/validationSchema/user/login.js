const { checkSchema } = require('express-validator');
module.exports.login = checkSchema({
  email: {
    in: 'body',
    exists: {
      options: {
        checkFalsy: true,
      },
      errorMessage: () => 'name is required',
    },
    isString: {
      errorMessage: () => 'name should be String',
    },
    optional: false,
    custom: {
      options: (value) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(value);
      },
      errorMessage: () => 'wrong Email Format',
    },
  },
});
