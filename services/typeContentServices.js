const { TypeContent } = require("../models");
const categoriesServices = require("../services/categoriesServices.js");

exports.findAll = async () => {
  let typeContent = await TypeContent.findAll({ order: [["id", "ASC"]] });
  return typeContent;
};

exports.findByName = async (name) => {
  let typeContent = await TypeContent.findOne({ where: { name: name } });
  return typeContent;
};

exports.create = async (typeContent) => {
  let typeContentCreated = await TypeContent.create(typeContent);
  if (typeContent.urlCategory) {
    let category = await categoriesServices.findByUrl(typeContent.urlCategory);
    typeContentCreated.setCategory(category);
  }
  return typeContentCreated;
};

exports.change = async (id, body) => {
  let typeContent = await TypeContent.update(body, {
    where: { id: id },
    individualHooks: true,
    returning: true,
    plain: true,
  });
  return typeContent;
};

exports.delete = async (id) => {
  let typeContent = await TypeContent.destroy({ where: { id: id } });
  return typeContent;
};
