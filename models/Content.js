const s = require("sequelize");
const db = require("../config/db");

class Content extends s.Model {}

Content.init(
  {
    id: {
      type: s.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    field_content: {
      type: s.TEXT,
    },
    position: {
      type: s.INTEGER,
    },
  },
  { sequelize: db, modelName: "content" }
);

module.exports = Content;
