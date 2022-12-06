const typeContentServices = require("../services/typeContentServices");

typeContentCat = [
  {
    name: "BloqueA",
    position: 1,
    urlSubCategory: "Noticias_Locales",
  },
  {
    name: "BloqueB",
    position: 1,
    urlSubCategory: "Espiritualidad",
  },
  {
    name: "BloqueD",
    position: 2,
    urlSubCategory: "Astrologia",
  },
  {
    name: "BloqueE",
    position: 1,
    urlSubCategory: "Belleza",
  },
  {
    name: "BloqueF",
    position: 2,
    urlSubCategory: "Squad",
  },
];

module.exports = function () {
  return typeContentCat.map((item) => typeContentServices.createBC(item));
};
