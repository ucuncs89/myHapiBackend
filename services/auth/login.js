const bcrypt = require("bcrypt");
const UserModel = require("../../models/user");
const { createToken } = require("../../utils/token");
const saltRounds = 12;

exports.postLoginAccount = async (data) =>
  new Promise((resolve, reject) => {
    (async () => {
      try {
        const { email, password } = data;
        let detailUser;
        const findEmail = await UserModel.query()
          .findOne({
            email,
          })
          .select("id", "email", "password");
        if (!findEmail) {
          return reject({ message: "Data Not Found", statusCode: 404 });
        }
        const comparePassword = bcrypt.compareSync(
          password,
          findEmail.password
        );
        if (!comparePassword) {
          return reject({ message: "Wrong Password", statusCode: 400 });
        }
        const token = await createToken(findEmail);

        resolve({ token: token });
      } catch (error) {
        reject(error);
      }
    })();
  });
