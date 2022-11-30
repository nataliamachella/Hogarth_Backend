const { TypeContent } = require("../models");
const typeContentServices = require("../services/typeContentServices");

module.exports = function () {
  return TypeContent.bulkCreate([
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
      name: "Widget",
      position: 4,
    },
  ]);
};
