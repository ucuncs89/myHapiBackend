const { ProductModel } = require("../models/product");
const { responseSuccess, responseFailed } = require("../utils/response");
exports.ProductList = async function (request, h) {
  try {
    const result = await { ...request.pre };
    return responseSuccess(h, "Login Sucessfully", result, 201);
  } catch (error) {
    console.log(error);
    return responseFailed(error, 400);
  }
};
