const bcrypt = require("bcrypt");
const UserModel = require("../../models/user");
const saltRounds = 12;

exports.postRegisterAccount = async (data) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const { email, name, password } = data;
        let passwordHash = await bcrypt.hash(password, saltRounds);
        const result = await UserModel.query().insert({
          email,
          name,
          password: passwordHash,
        });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })();
  });
