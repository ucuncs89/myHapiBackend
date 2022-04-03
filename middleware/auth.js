const jwt = require("jsonwebtoken");
const UserModel = require("../models/user");
const { responseFailed } = require("../utils/response");

const checkJwtToken = async (jwtToken) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        if (!jwtToken) {
          return responseFailed({
            message: "unauthorized, Please Login",
            statusCode: 401,
          });
        }
        var decodedJwt = jwt.verify(jwtToken, "secret");
        if (!decodedJwt) {
          return reject({ message: "error JWT", statusCode: 401 });
        }
        const detailUser = await checkUserLogin(decodedJwt);
        resolve(detailUser);
      } catch (error) {
        reject(error);
      }
    })();
  });

const checkUserLogin = async (user) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        if (!user) {
          return reject({
            message: "unauthorized, Please Login",
            statusCode: 401,
          });
        }
        const detailUser = await UserModel.query()
          .findById(user.id)
          .select("id", "email", "name");
        if (!detailUser) {
          return reject({
            message: "User Not Found or JWT invalid",
            statusCode: 401,
          });
        }
        resolve(detailUser);
      } catch (error) {
        reject(error);
      }
    })();
  });

exports.detailAuth = async function (request, h) {
  try {
    const jwtToken = request.headers.authorization;
    const detailJwt = await checkJwtToken(jwtToken);
    return detailJwt;
  } catch (error) {
    return responseFailed(error);
  }
};
