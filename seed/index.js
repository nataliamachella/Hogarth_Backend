const noteSeed = require("./note");

module.exports = function () {
    return noteSeed()
      .then(() => console.log("Database Seedeada"))
      .catch((err) => console.log(err));
  };