const bcrypt = require("bcrypt");
const UserModel = require("../../models/user");
const saltRounds = 12;

exports.postRegisterAccount = async (data) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        resolve(data);
      } catch (error) {
        reject(error);
      }
    })();
  });
