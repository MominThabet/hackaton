const { GeneralError } = require('./generalError');
const {
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
  UNAUTHORIZED,
  ACCESS_DENIED,
  UNPROCESSABLE_ENTITY,
  NOT_FOUND,
} = require('../../httpCodes');

class BadRequest extends GeneralError {
  constructor(message, data = undefined) {
    super(BAD_REQUEST, message, data);
  }
}

class InternalServerError extends GeneralError {
  constructor(message, data = undefined) {
    super(INTERNAL_SERVER_ERROR, message, data);
  }
}
class Unauthorized extends GeneralError {
  constructor(message, data = undefined) {
    super(UNAUTHORIZED, message, data);
  }
}

class AccessDenied extends GeneralError {
  constructor(message, data = undefined) {
    super(ACCESS_DENIED, message, data);
  }
}

class UnprocessableEntity extends GeneralError {
  constructor(message, data = undefined) {
    super(UNPROCESSABLE_ENTITY, message, data);
  }
}

class NotFound extends GeneralError {
  constructor(message, data = undefined) {
    super(NOT_FOUND, message, data);
  }
}
/**
 * @type {{
 *  BadRequest:BadRequest,
 *  InternalServerError:InternalServerError,
 *  Unauthorized:Unauthorized,
 *  AccessDenied:AccessDenied,
 *  UnprocessableEntity:UnprocessableEntity,
 *  NotFound:NotFound,
 *
 * }}
 */
module.exports = {
  BadRequest,
  InternalServerError,
  Unauthorized,
  AccessDenied,
  UnprocessableEntity,
  NotFound,
};
