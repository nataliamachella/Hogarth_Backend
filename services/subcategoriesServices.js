const { SubCategory, Category, Note, Subject } = require("../models");
const categoriesServices = require("./categoriesServices.js");
const sequelize = require("sequelize");

exports.findAll = async () => {
  let subCategories = await SubCategory.findAll({
    include: [
      { model: Category },
      { model: Note, include: [{ model: Subject, as: "subject" }] },
    ],
  });
  return subCategories;
};

exports.findByUrl = async (url) => {
  let subCategory = await SubCategory.findOne({
    where: { url: url },
    include: [
      { model: Category },
      { model: Note, include: [{ model: Subject, as: "subject" }] },
    ],
  });
  return subCategory;
};

exports.findByCategory = async (name) => {
  let subCategory = await SubCategory.findAll({
    include: [
      { model: Category, where: { name: name } },
      { model: Note, include: [{ model: Subject, as: "subject" }] },
    ],
  });
  return subCategory;
};

//Falta revisar la creacion con la asociacion
exports.create = async (subcategory) => {
  const { name, urlCategory } = subcategory;
  let subCategory = await SubCategory.create({
    name: name,
  });
  let category = await categoriesServices.findByUrl(urlCategory);
  subCategory.setCategory(category);
  return subCategory;
};

exports.change = async (id, body) => {
  let subCategory = await SubCategory.update(body, {
    where: { id: id },
    returning: true,
    plain: true,
  });
  return subCategory;
};

exports.delete = async (id) => {
  let subCategory = await SubCategory.destroy({ where: { id: id } });
  return subCategory;
};
