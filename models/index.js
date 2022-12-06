const User = require("./User");
const Subject = require("./Subject");
const SubCategory = require("./Subcategories");
const Note = require("./Notes");
const Category = require("./Categories");
const TypeContent = require("./TypeContent");
const TypeContentCat = require("./TypeContentCat");
const GroupSubject = require("./GroupSubject");

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

TypeContent.belongsTo(Category);
Category.hasMany(TypeContent);

TypeContentCat.hasOne(SubCategory);

GroupSubject.hasMany(Subject);
Subject.belongsTo(GroupSubject);

module.exports = {
  User,
  Subject,
  SubCategory,
  Note,
  Category,
  TypeContent,
  TypeContentCat,
  GroupSubject,
};
