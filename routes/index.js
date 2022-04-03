var productRoutes = require("./product");
const authRoutes = require("./auth");

module.exports = [].concat(productRoutes, authRoutes);
