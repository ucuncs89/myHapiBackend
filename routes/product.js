const Joi = require("joi");
const { ProductList } = require("../controllers/productController");
const { checkAuth } = require("../middleware/auth");

module.exports = [
  {
    method: "GET",
    path: "/products",
    options: {
      // pre: [{ method: checkAuth, assign: "checkAuth" }],
      handler: ProductList,
      description: "Get todo",
      notes: "Returns a todo item by the id passed in the path",
      tags: ["api"], // ADD THIS TAG
    },
  },
];
