import httpsStatus from 'http-status';

/**
 * @extends Error
 */

class ExtendableError extends Error {
  constructor(message, status, isPublic) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
    Error.captureStackTrace(this, this.constructor.name);
  }
}

/**
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  constructor(
    message,
    status = httpsStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
  ) {
    super(message, status, isPublic);
  }
}

export default APIError;
