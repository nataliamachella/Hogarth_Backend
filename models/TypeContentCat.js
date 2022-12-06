const s = require("sequelize");
const db = require("../config/db");

class TypeContentCat extends s.Model {}

TypeContentCat.init(
  {
    id: {
      type: s.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: s.STRING,
    },
    position: {
      type: s.INTEGER,
    },
    urlSubCategory: {
      type: s.STRING,
    },
    urlCategory: {
      type: s.STRING,
    },
  },
  { sequelize: db, modelName: "typeContentCat" }
);

module.exports = TypeContentCat;
