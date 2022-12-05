const noteSeed = require("./note");
const subCategorySeed = require("./subcategories");
const categorySeed = require("./category");
const subjectSeed = require("./subject");
const typeContentSeed = require("./typeContent");

module.exports = function () {
  return categorySeed().then(() => {
    subCategorySeed();
    subjectSeed()
      .then(() => {
        typeContentSeed();
        noteSeed();
      })
      .then(() => console.log("Database Seedeada"))
      .catch((err) => console.log(err));
  });
};
