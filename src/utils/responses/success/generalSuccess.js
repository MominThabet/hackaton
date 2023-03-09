class GeneralSuccess {
  constructor(statusCode, message, data = undefined) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

/**
 * @type {{
 *  GeneralSuccess : GeneralSuccess
 * }}
 */

module.exports = {
  GeneralSuccess,
};
