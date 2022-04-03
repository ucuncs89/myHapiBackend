const { ProductModel } = require("../models/product");
const { responseSuccess, responseFailed } = require("../utils/response");
exports.ProductList = async function (request, h) {
  try {
    const result = { ...request };
    return responseSuccess(h, "Login Sucessfully", { ...request.auth }, 201);
  } catch (error) {
    console.log(error);
    return responseFailed(error, 400);
  }
};
