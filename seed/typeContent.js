const typeContentServices = require("../services/typeContentServices");

module.exports = function () {
  return typeContentServices.create({
    name: "Clasico",
    type: "<p> <p>",
  });
};
