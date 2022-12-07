const subjectsServices = require("../services/subjectsServices.js");

sub = [
  {
    name: "😍",
    idGroup: 1,
  },
  {
    name: "😃",
    idGroup: 1,
  },
  {
    name: "😐",
    idGroup: 1,
  },
  {
    name: "🙁",
    idGroup: 1,
  },
  {
    name: "😭",
    idGroup: 1,
  },
];

module.exports = function () {
  return sub.map((item) => subjectsServices.create(item));
};
