const subjectsServices = require("../services/subjectsServices.js");

sub = [
  {
    name: "triste",
    idGroup: 1,
  },
  {
    name: "feliz",
    idGroup: 1,
  },
  {
    name: "encantado",
    idGroup: 1,
  },
  {
    name: "deprimido",
    idGroup: 1,
  },
  {
    name: "confundido",
    idGroup: 1,
  },
];

module.exports = function () {
  return sub.map((item) => subjectsServices.create(item));
};
