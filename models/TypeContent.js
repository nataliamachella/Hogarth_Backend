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
      type: s.TEXT,
    },
    type: {
      type: s.TEXT,
    },
  },
  { sequelize: db, modelName: "typeContent" }
);

module.exports = TypeContent;
