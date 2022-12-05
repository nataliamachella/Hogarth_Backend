const User = require("./User");
const Subject = require("./Subject");
const SubCategory = require("./Subcategories");
const Note = require("./Notes");
const Category = require("./Categories");
const Content = require("./Content");
const TypeContent = require("./TypeContent");

SubCategory.belongsTo(Category);
Category.hasMany(SubCategory);
Note.belongsTo(SubCategory);
SubCategory.hasMany(Note);
Note.belongsToMany(Subject, {
  through: "notes_subject",
  as: "subject",
  foreignKey: "id_subject",
});
Subject.belongsToMany(Note, {
  through: "notes_subject",
  as: "note",
  foreignKey: "id_notes",
});
Content.belongsTo(Note);
Note.hasMany(Content);

TypeContent.belongsTo(Category);
Category.hasMany(TypeContent);

module.exports = {
  User,
  Subject,
  SubCategory,
  Note,
  Category,
  Content,
  TypeContent,
};
