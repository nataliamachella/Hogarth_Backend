const Sequelize = require("sequelize");
const db = new Sequelize(
  "revista",
  "revista_user",
  "m9uh5Tnr7QGm15PXuVUzdePiPLb1tqDj",
  {
    host: "dpg-cejco1la4991ihmh14tg-a",
    dialect: "postgres",
    logging: false,
  }
);

module.exports = db;
