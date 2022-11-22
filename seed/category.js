const { Category } = require("../models");

const fakeCategories = [
  {
    name: "Actualidad",
  },
  {
    name: "Calidad de Vida",
  },
  {
    name: "Liderazgo",
  },
  {
    name: "Turismo",
  },
  {
    name: "Amores",
  },
  {
    name: "Homefullness",
  },
  {
    name: "Tendencias",
  },
];
module.exports = function () {
  return Category.bulkCreate(fakeCategories);
};
