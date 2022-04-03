const jwt = require("jsonwebtoken");
exports.createToken = async function (user) {
  try {
    const generateToken = jwt.sign(
      { id: user.id, email: user.email },
      "secret",
      { algorithm: "HS256", expiresIn: "24h" }
    );
    return generateToken;
  } catch (error) {
    return error;
  }
};
