const typeContentServices = require("../services/typeContentServices");

typeContentCat = [
  {
    name: "BloqueA",
    position: 1,
    urlSubCategory: "Noticias_Locales",
    urlCategory: "Actualidad",
  },
  {
    name: "BloqueB",
    position: 1,
    urlSubCategory: "Espiritualidad",
    urlCategory: "Calidad_de_Vida",
  },
  {
    name: "BloqueD",
    position: 2,
    urlSubCategory: "Astrologia",
    urlCategory: "Calidad_de_Vida",
  },
  {
    name: "BloqueE",
    position: 1,
    urlSubCategory: "Belleza",
    urlCategory: "Tendencias",
  },
  {
    name: "BloqueF",
    position: 2,
    urlSubCategory: "Squad",
    urlCategory: "Actualidad",
  },
];

module.exports = function () {
  return typeContentCat.map((item) => typeContentServices.createBC(item));
};
