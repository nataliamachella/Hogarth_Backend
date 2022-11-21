const subcategoriesServices = require("../services/subcategoriesServices.js");

module.exports = function () {
  return subcategoriesServices.create({
    name: "Noticias Locales",
    urlCategory: "Noticias_Actuales",
  });
};
