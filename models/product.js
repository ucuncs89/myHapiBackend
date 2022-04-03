"use strict";

const { Model } = require("objection");

class ProductModel extends Model {
  static get tableName() {
    return "products";
  }
}

module.exports = {
  ProductModel,
};
