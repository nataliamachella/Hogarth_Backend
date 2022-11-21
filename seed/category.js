const { Category } = require("../models");

module.exports = function () {
  return Category.create({
    name: "Noticias Actuales",
  });
};
