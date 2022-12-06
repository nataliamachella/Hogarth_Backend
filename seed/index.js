const noteSeed = require("./note");
const subCategorySeed = require("./subcategories");
const categorySeed = require("./category");
const subjectSeed = require("./subject");
const groupSubjectSeed = require("./groupSubject");
const typeContentSeed = require("./typeContent");
const typeContentCatSeed = require("./typeContentCat");

module.exports = function () {
  return categorySeed().then(() => {
    subCategorySeed();
    groupSubjectSeed()
      .then(() => {
        subjectSeed().then(() => {
          typeContentSeed();
          typeContentCatSeed();
          noteSeed();
        });
      })
      .then(() => console.log("Database Seedeada"))
      .catch((err) => console.log(err));
  });
};
