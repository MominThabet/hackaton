/**
 *
 * @param error Type of GeneralError
 * @param req
 * @param res
 * @returns {*}
 */
module.exports.handleError = (error, req, res) => {
  const { statusCode, message, data } = error;
  console.log(error);

  return res.status(statusCode).json({
    statusCode,
    status: 'failure',
    message: message,
    data: data,
  });
};
