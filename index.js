"use strict";

const Hapi = require("@hapi/hapi");
let routes = require("./routes");
const Knex = require("knex");
const knexConfig = require("./knexfile");

const { Model } = require("objection");

const knex = Knex(knexConfig.development);
const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
const Pack = require("./package");

Model.knex(knex);
const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: "localhost",
  });
  const swaggerOptions = {
    info: {
      title: "Test API Documentation",
      version: Pack.version,
    },
    documentationPath: "/docs",
    securityDefinitions: {
      jwt: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
        "x-keyPrefix": "Bearer ",
      },
    },
    security: [{ jwt: [] }], // THIS WAS THE KEY. Without this, the Authorization headers are never sent, but with them they are!
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  server.route(routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
