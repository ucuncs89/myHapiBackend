const { postRegisterAccount } = require("../services/auth/register");
const { responseSuccess, responseFailed } = require("../utils/response");

exports.registerAccount = async function (request, h) {
  try {
    let arr = ["a", "b", "c", "d"];
    const result = await postRegisterAccount({ ...request.payload, arr });
    return responseSuccess(h, "Register Sucessfully", result, 201);
  } catch (error) {
    return responseFailed(error, 400);
  }
};

exports.loginAccount = async function (request, h) {
  try {
    const result = await postRegisterAccount(request.payload);
    return responseSuccess(h, "Login Sucessfully", result, 201);
  } catch (error) {
    return responseFailed(error, 400);
  }
};
