const groupSubjectsServices = require("../services/groupSubjectServices");

module.exports = function () {
  return groupSubjectsServices.create({
    name: "Emotions",
    question: "Como te sentis hoy?",
    inUse: true,
  });
};
