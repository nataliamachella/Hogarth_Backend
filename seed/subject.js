const subjectsServices = require("../services/subjectsServices.js");

module.exports = function () {
  return subjectsServices.create({
    name: "triste",
  });
};
