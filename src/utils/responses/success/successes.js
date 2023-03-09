const { GeneralSuccess } = require('./generalSuccess');
const { OK, CREATED } = require('../../httpCodes');

class Ok extends GeneralSuccess {
  constructor(message, data = undefined) {
    super(OK, message, data);
  }
}
class Created extends GeneralSuccess {
  constructor(message, data = undefined) {
    super(CREATED, message, data);
  }
}
/**
 * @type {{
 *  Ok:Ok,
 *  Created:Created,
 * }}
 */
module.exports = {
  Ok,
  Created,
};
