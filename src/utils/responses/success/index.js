/**
 *
 * @param success type of GeneralSuccess
 * @param req
 * @param res
 * @returns {*}
 */

module.exports.handleSuccess = (success, req, res) => {
  const { statusCode, message, data } = success;
  return res.status(statusCode).json({
    statusCode,
    status: 'success',
    message: message,
    data: data,
  });
};
