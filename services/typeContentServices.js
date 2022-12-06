const {
  TypeContent,
  Category,
  TypeContentCat,
  SubCategory,
} = require("../models");
const categoriesServices = require("./categoriesServices.js");
const subcategoriesServices = require("./subcategoriesServices.js");

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
  let beforeTypeContent = await TypeContent.findOne({ where: { id: id } });
  await TypeContent.update(
    { position: beforeTypeContent.position },
    {
      where: { position: position },
    }
  );
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

//Subcategory

exports.findAllBC = async () => {
  let typeContent = await TypeContentCat.findAll({
    include: [SubCategory],
    order: [["id", "ASC"]],
  });
  return typeContent;
};

exports.findByNameBC = async (name) => {
  let typeContent = await TypeContentCat.findOne({ where: { name: name } });
  return typeContent;
};

exports.findByCategoryBC = async (url) => {
  let typeContent = await TypeContentCat.findAll({
    where: { urlCategory: url },
    include: [
      {
        model: SubCategory,
        include: [{ model: Category, where: { url: url } }],
      },
    ],
    order: [["id", "ASC"]],
  });
  return typeContent;
};

exports.createBC = async (typeContent) => {
  let typeContentCreated = await TypeContentCat.create(typeContent);
  if (typeContent.urlSubCategory) {
    let subCategory = await subcategoriesServices.findByUrl(
      typeContent.urlSubCategory
    );
    typeContentCreated.setSubCategory(subCategory);
  }
  return typeContentCreated;
};

exports.changeBC = async (id, body) => {
  const { name, urlSubCategory, position, category } = body;
  let beforeTypeContent = await TypeContentCat.findOne({ where: { id: id } });
  let findOldTypeContent = await TypeContentCat.findAll({
    where: { position: position, urlCategory: category },
  });
  await TypeContentCat.update(
    { position: beforeTypeContent.position },
    {
      where: { id: findOldTypeContent[0].id },
    }
  );
  let typeContent = await TypeContentCat.update(
    { name: name, urlSubCategory: urlSubCategory, position: position },
    {
      where: { id: id },
      returning: true,
      plain: true,
    }
  );
  if (urlSubCategory) {
    let subCategory = await subcategoriesServices.findByUrl(urlSubCategory);
    typeContent[1].setSubCategory(subCategory);
  }
  return typeContent;
};

exports.deleteBC = async (id) => {
  let typeContent = await TypeContentCat.destroy({ where: { id: id } });
  return typeContent;
};
