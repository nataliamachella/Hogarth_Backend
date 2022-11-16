const User = require("./User");
const Subject = require("./Subject");
const SubCategorie = require("./Subcategories");
const Note = require("./Notes");
const Categorie = require("./Categories");

Categorie.hasMany(SubCategorie);
SubCategorie.belongsTo(Categorie);
SubCategorie.hasMany(Note);
Note.belongsTo(SubCategorie);
Note.belongsToMany(Subject, {
  through: "notes_subject",
  as: "tags",
  foreignKey: "id_subject",
});
Subject.belongsToMany(Note, {
  through: "notes_subject",
  as: "tags",
  foreignKey: "id_notes",
});

module.exports = { User, Subject, SubCategorie, Note, Categorie };
