const s = require("sequelize");
const db = require("../config/db");

class SubCategorie extends s.Model {}

SubCategorie.init(
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
    id_category: {
      type: s.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "subCategorie" }
);

module.exports = SubCategorie;
