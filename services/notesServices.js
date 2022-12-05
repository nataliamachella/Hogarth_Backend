const { Note, SubCategory, Category, Subject, Content } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const subCategoriesServices = require("./subcategoriesServices");
const subjectServices = require("./subjectsServices");

exports.findByUrl = async (url) => {
  let note = await Note.findOne({
    where: { url: url },
    include: [
      { model: SubCategory, include: [Category] },
      { model: Subject, as: "subject" },
      { model: Content },
    ],
  });
  return note;
};

exports.findAll = async () => {
  let notes = await Note.findAll({
    include: [
      { model: SubCategory, include: [Category] },
      { model: Subject, as: "subject" },
      { model: Content },
    ],
  });
  return notes;
};

exports.searchByQueryString = async (queryString) => {
  let str = queryString.toLowerCase();
  let notes = await Note.findAll({
    where: {
      [Op.or]: [
        {
          title: sequelize.where(
            sequelize.fn("LOWER", sequelize.col("title")),
            "LIKE",
            "%" + str + "%"
          ),
        },
        {
          "$subCategory.name$": sequelize.where(
            sequelize.fn("LOWER", sequelize.col("subCategory.name")),
            "LIKE",
            "%" + str + "%"
          ),
        },
      ],
    },
    include: [
      { model: SubCategory, include: [Category] },
      { model: Subject, as: "subject" },
      { model: Content },
    ],
  });
  return notes;
};

exports.findByCategory = async (url) => {
  const notes = await Note.findAll({
    include: [
      {
        model: SubCategory,
        include: [{ model: Category, where: { url: url } }],
      },
    ],
    order: [["id", "DESC"]],
  });
  return notes;
};

exports.findByCategoryForBlock = async (url) => {
  const notes = await Note.findAll({
    include: [
      {
        model: SubCategory,
        include: [
          { model: Category, where: { url: url }, attributes: ["url", "name"] },
        ],
        attributes: ["url", "name"],
      },
    ],
    attributes: ["id", "title"],
    order: [["id", "DESC"]],
  });
  return notes;
};

exports.create = async (note) => {
  const {
    title,
    field_title_pre,
    field_title,
    field_description,
    author,
    field_img_primary,
    field_content,
    urlSubCategory,
    idSubject,
  } = note;
  let noteCreated = await Note.create({
    title: title,
    field_title_pre: field_title_pre,
    field_title: field_title,
    field_description: field_description,
    author: author,
    field_img_primary: field_img_primary,
    field_content: field_content,
  });
  let subcategory = await subCategoriesServices.findByUrl(urlSubCategory);
  let subject = await subjectServices.findById(idSubject);
  noteCreated.setSubCategory(subcategory);
  subject.setNote(noteCreated);
  return noteCreated;
};

exports.change = async (id, body) => {
  const {
    title,
    field_title_pre,
    field_title,
    field_description,
    author,
    field_img_primary,
    field_content,
    urlSubCategory,
    idSubject,
  } = body;
  let noteUpdate = await Note.update(
    {
      title: title,
      field_title_pre: field_title_pre,
      field_title: field_title,
      field_description: field_description,
      author: author,
      field_img_primary: field_img_primary,
      field_content: field_content,
    },
    {
      where: { id: id },
      individualHooks: true,
      returning: true,
      plain: true,
    }
  );
  let subcategory = await subCategoriesServices.findByUrl(urlSubCategory);
  let subject = await subjectServices.findById(idSubject);
  noteUpdate[1].setSubCategory(subcategory);
  subject.setNote(noteUpdate[1]);
  return noteUpdate;
};

exports.deleteContent = async (id) => {
  let content = await Content.destroy({ where: { id: id } });
  return content;
};

exports.delete = async (id) => {
  let note = await Note.destroy({ where: { id: id } });
  return note;
};
