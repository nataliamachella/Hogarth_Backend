const typeContentServices = require("../services/typeContentServices");

typeContent = [
  {
    name: "BloqueA",
    position: 1,
    urlCategory: "Actualidad",
  },
  {
    name: "BloqueB",
    position: 2,
    urlCategory: "Calidad_de_Vida",
  },
  {
    name: "BloqueE",
    position: 3,
    urlCategory: "Amores",
  },
  {
    name: "BloqueF",
    position: 4,
    urlCategory: "Amores",
  },
  {
    name: "Widget",
    position: 5,
  },
];

module.exports = function () {
  return typeContent.map((item) => typeContentServices.create(item));
};
