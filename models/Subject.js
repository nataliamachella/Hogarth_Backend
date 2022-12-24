const s = require("sequelize");
const db = require("../config/db");

class Subject extends s.Model {}

Subject.init(
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
    image: {
      type: s.BLOB("long"),
    },
  },
  { sequelize: db, modelName: "subject" }
);

module.exports = Subject;
