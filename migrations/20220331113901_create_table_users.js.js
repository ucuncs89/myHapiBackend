exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id");
    table.string("email", 100).notNullable().unique();
    table.text("password").notNullable();
    table.string("name", 100).notNullable();
    table.boolean("is_active");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
