const subjectsServices = require("../services/subjectsServices.js");
const { Subject } = require("../models");

const fakeSubjetcts = [ 
  {
    name: "triste",
  },
  {
    name: "feliz",
  },
  {
    name: "encantado"
  },
  {
    name: "deprimido"
  },
  {
    name: "confundido"
  }
]
module.exports = function () {
  return Subject.bulkCreate(fakeSubjetcts);
};
