const s = require("sequelize");
const db = require("../config/db");

class Note extends s.Model {}

Note.init(
  {
    id: {
      type: s.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: s.TEXT,
      allowNull: false,
    },
    field_title_pre: {
      type: s.TEXT,
      allowNull: false,
    },
    field_title: {
      type: s.TEXT,
      allowNull: false,
    },
    field_description: {
      type: s.TEXT,
      allowNull: false,
    },
    field_img_primary: {
      type: s.BLOB("long"),
      allowNull: false,
    },
    field_content: {
      type: s.TEXT,
      allowNull: false,
    },
    url: {
      type: s.VIRTUAL,
      get() {
        return this.title.replace(/\s+/g, "_").replace(/\W/g, "");
      },
    },
    date: {
      type: s.DATE,
      allowNull: false,
    },
    id_subcategory: {
      type: s.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "note" }
);

module.exports = Note;
