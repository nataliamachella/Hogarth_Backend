const { Category, SubCategory, Note, Subject } = require("../models");
const sequelize = require("sequelize");

exports.findAll = async () => {
  let category = await Category.findAll({
    include: [
      {
        model: SubCategory,
        include: [
          { model: Note, include: [{ model: Subject, as: "subject" }] },
        ],
      },
    ],
  });
  return category;
};

exports.findByUrl = async (url) => {
  let category = await Category.findOne({ where: { url: url } });
  return category;
};

exports.create = async (category) => {
  let categoryCreated = await Category.create(category);
  return categoryCreated;
};

exports.change = async (id, body) => {
  let category = await Category.update(body, {
    where: { id: id },
    individualHooks: true,
    returning: true,
    plain: true,
  });
  return category;
};

exports.delete = async (id) => {
  let category = await Category.destroy({ where: { id: id } });
  return category;
};
