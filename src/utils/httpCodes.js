/**
 * @type {{
 *  OK: number ,
 *  CREATED: number,
 *  INTERNAL_SERVER_ERROR: number,
 *  BAD_REQUEST: number,
 *  UNAUTHORIZED: number,
 *  ACCESS_DENIED: number,
 *  UNPROCESSABLE_ENTITY: number,
 *  NOT_FOUND: number,
 * }}
 */

module.exports = {
  OK: 200,
  CREATED: 201,

  INTERNAL_SERVER_ERROR: 500,

  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  ACCESS_DENIED: 403,
  UNPROCESSABLE_ENTITY: 422,
  NOT_FOUND: 404,
};
