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
      type: s.STRING,
      allowNull: false,
    },
    // field_title_pre: {
    //   type: s.TEXT,
    //   // allowNull: false,
    // },
    // field_title: {
    //   type: s.TEXT,
    //   allowNull: false,
    // },
    // field_description: {
    //   type: s.TEXT,
    //   allowNull: false,
    // },
    // field_img_primary: {
    //   type: s.BLOB("long"),
    //   // allowNull: false,
    // },
    // field_content: {
    //   type: s.TEXT,
    //   allowNull: false,
    // },
    url: {
      type: s.STRING,
    },
    // date: {
    //   type: s.DATE,
    //   // allowNull: false,
    // },
  },
  { sequelize: db, modelName: "note" }
);
//Este hook es solo para hacer pruebas se puede borrar despues de terminar hacer pruebas
Note.beforeBulkCreate((notes, options) => {
  notes.map((note) => {
    if (note.title) {
      note.url = note.title.replace(/\s+/g, "_").replace(/\W/g, "");
      options.fields.push("url");
    }
  });
});

Note.beforeValidate((note, options) => {
  if (note.title) {
    note.url = note.title.replace(/\s+/g, "_").replace(/\W/g, "");
    options.fields.push("url");
  }
});

Note.beforeUpdate((note, options) => {
  note.url = note.title.replace(/\s+/g, "_").replace(/\W/g, "");
  options.fields.push("url");
});

module.exports = Note;
