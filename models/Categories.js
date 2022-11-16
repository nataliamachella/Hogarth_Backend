const s = require("sequelize");
const db = require("../config/db");

class Categorie extends s.Model {}

Categorie.init(
  {
    id: {
      type: s.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: s.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "categories" }
);

module.exports = Categorie;
