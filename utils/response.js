const Boom = require("@hapi/boom");

exports.responseSuccess = (h, message, data, code) => {
  const responseMessage = {};

  responseMessage.success = true;
  responseMessage.message = message;
  responseMessage.status_code = code;

  if (data) {
    responseMessage.data = data;
  }

  return h.response(responseMessage).code(code || 200);
};

exports.responseFailed = (error, code) => {
  switch (code) {
    case 400:
      return Boom.badRequest(error.message);

    case 401:
      return Boom.unauthorized(error.message);

    case 403:
      return Boom.forbidden(error.message);

    default:
      return Boom.badRequest(error.message);
  }
};
