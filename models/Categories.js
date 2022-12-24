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
    description: {
      type: s.STRING,
      allowNull: false,
    },
    image: {
      type: s.STRING,
      allowNull: false,
    },
    url: {
      type: s.STRING,
    },
  },
  { sequelize: db, modelName: "categories" }
);

Categorie.beforeBulkCreate((categories, options) => {
  categories.map((categorie) => {
    if (categorie.name) {
      categorie.url = categorie.name.replace(/\s+/g, "_").replace(/\W/g, "");
      options.fields.push("url");
    }
  });
});

Categorie.beforeValidate((categorie, options) => {
  if (categorie.name) {
    categorie.url = categorie.name.replace(/\s+/g, "_").replace(/\W/g, "");
    options.fields.push("url");
  }
});

Categorie.beforeUpdate((categorie, options) => {
  categorie.url = categorie.name.replace(/\s+/g, "_").replace(/\W/g, "");
  options.fields.push("url");
});

module.exports = Categorie;
