const { Note, SubCategory, Category, Subject } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const subCategoriesServices = require("./subcategoriesServices");
const subjectServices = require("./subjectsServices");

exports.findByUrl = async (url) => {
  let note = await Note.findOne({ where: { url: url } });
  return note;
};

exports.findAll = async () => {
  let notes = await Note.findAll({
    include: [
      { model: SubCategory, include: [Category] },
      { model: Subject, as: "subject" },
    ],
  });
  return notes;
};

exports.searchByQueryString = async (queryString) => {
  queryString.toLowerCase();
  let notes = await Note.findAll({
    where: {
      [Op.or]: [
        {
          title: sequelize.where(
            sequelize.fn("LOWER", sequelize.col("title")),
            "LIKE",
            "%" + queryString + "%"
          ),
        },
        {
          include: {
            model: SubCategory,
            as: "Sub-Category",
            where: {
              name: sequelize.where(
                sequelize.fn("LOWER", sequelize.col("name")),
                "LIKE",
                "%" + queryString + "%"
              ),
            },
          },
        },
        {
          include: {
            model: Category,
            as: "Category",
            where: {
              name: sequelize.where(
                sequelize.fn("LOWER", sequelize.col("name")),
                "LIKE",
                "%" + queryString + "%"
              ),
            },
          },
        },
      ],
    },
  });
  return notes;
};

exports.create = async (note) => {
  const {
    title,
    fiel_title_pre,
    fiel_title,
    field_description,
    fiel_img_primary,
    field_content,
    urlSubCategory,
    idSubject,
  } = note;
  let noteCreated = await Note.create({
    title: title,
    fiel_title_pre: fiel_title_pre,
    fiel_title: fiel_title,
    field_description: field_description,
    fiel_img_primary: fiel_img_primary,
    field_content: field_content,
  });
  let subcategory = await subCategoriesServices.findByUrl(urlSubCategory);
  let subject = await subjectServices.findById(idSubject);
  noteCreated.setSubCategory(subcategory);
  subject.setNote(noteCreated);
  return noteCreated;
};

exports.change = async (id, body) => {
  let note = await Note.update(body, {
    where: { id: id },
    individualHooks: true,
    returning: true,
    plain: true,
  });
  return note;
};

exports.delete = async (id) => {
  let note = await Note.destroy({ where: { id: id } });
  return note;
};
