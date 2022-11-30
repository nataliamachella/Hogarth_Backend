const s = require("sequelize");
const db = require("../config/db");

class TypeContent extends s.Model {}

TypeContent.init(
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
    urlCategory: {
      type: s.STRING,
    },
  },
  { sequelize: db, modelName: "typeContent" }
);

module.exports = TypeContent;
