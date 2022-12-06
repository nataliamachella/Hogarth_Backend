const s = require("sequelize");
const db = require("../config/db");

class GroupSubject extends s.Model {}

GroupSubject.init(
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
    question: {
      type: s.TEXT,
      allowNull: false,
    },
    inUse: {
      type: s.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "groupSubject" }
);

module.exports = GroupSubject;
