const { TypeContent, Category } = require("../models");
const categoriesServices = require("../services/categoriesServices.js");

exports.findAll = async () => {
  let typeContent = await TypeContent.findAll({
    include: [Category],
    order: [["id", "ASC"]],
  });
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
  const { name, urlCategory, position } = body;
  let typeContent = await TypeContent.update(
    { name: name, urlCategory: urlCategory, position: position },
    {
      where: { id: id },
      returning: true,
      plain: true,
    }
  );
  if (urlCategory) {
    let category = await categoriesServices.findByUrl(urlCategory);
    typeContent[1].setCategory(category);
  }
  return typeContent;
};

exports.delete = async (id) => {
  let typeContent = await TypeContent.destroy({ where: { id: id } });
  return typeContent;
};
