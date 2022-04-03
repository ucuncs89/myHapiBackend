module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "asdf1234",
      database: "test_app_db",
    },
  },
};
