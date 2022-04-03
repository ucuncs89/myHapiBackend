exports.up = function (knex) {
  return knex.schema.createTable("products", function (table) {
    table.increments("id");
    table.string("name", 100).notNullable();
    table.text("description").notNullable();
    table.decimal("price").notNullable();
    table.integer("stock");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
