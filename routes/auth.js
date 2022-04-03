const Joi = require("joi");
const {
  registerAccount,
  loginAccount,
} = require("../controllers/authController");

module.exports = [
  {
    method: "POST",
    path: "/auth/register",
    options: {
      handler: registerAccount,
      description: "Get todo",
      notes: "Returns a todo item by the id passed in the path",
      tags: ["api"], // ADD THIS TAG
      validate: {
        payload: Joi.object({
          email: Joi.string().required().description("email"),
          name: Joi.string().required().description("name"),
          password: Joi.string().required().description("password"),
        }),
      },
    },
  },
  {
    method: "POST",
    path: "/auth/login",
    options: {
      handler: loginAccount,
      description: "Get todo",
      notes: "Returns a todo item by the id passed in the path",
      tags: ["api"], // ADD THIS TAG
      validate: {
        payload: Joi.object({
          email: Joi.string().required().description("email"),
          password: Joi.string().required().description("password"),
        }),
      },
    },
  },
];
