const { responseSuccess, responseFailed } = require("../utils/response");
exports.checkAuth = async function (request, h) {
  try {
    const result = { request };

    return responseSuccess(h, "check request", result, 201);
  } catch (error) {
    return responseFailed(error, 400);
  }
};
