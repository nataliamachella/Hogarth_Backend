const s = require("sequelize");
const db = require("../config/db");

class SubCategory extends s.Model {}

SubCategory.init(
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
    url: {
      type: s.STRING,
    },
  },
  { sequelize: db, modelName: "subCategory" }
);

SubCategory.beforeValidate((subcategory, options) => {
  if (subcategory.name) {
    subcategory.url = subcategory.name.replace(/\s+/g, "_").replace(/\W/g, "");
    options.fields.push("url");
  }
});

SubCategory.beforeUpdate((subcategory, options) => {
  subcategory.url = subcategory.name.replace(/\s+/g, "_").replace(/\W/g, "");
  options.fields.push("url");
});

module.exports = SubCategory;
