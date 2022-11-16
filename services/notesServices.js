const { Note } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const subcategoriesServices = require("../services/subcategoriesServices.js");

exports.findByUrl = async (url) => {
  let note = await Note.findOne({ where: { url: url } });
  return note;
};

exports.findAll = async () => {
  let notes = await Note.findAll();
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
        {},
        {},
      ],
    },
  });
  return notes;
};

exports.searchBySubcategory = async (subCategory) => {
  let subCategorie = await subcategoriesServices(subCategory);
  let notes = await Note.findAll({
    where: { id_subcategory: subCategorie.id },
  });
  return notes;
};

//Se le debe pasar los datos de la note y el id de subcategory como id_subcategory
exports.create = async (note) => {
  let noteCreated = await Note.create(note);
  return noteCreated;
};

exports.change = async (id, body) => {
  let note = await Note.update(body, {
    where: { id: id },
    returning: true,
    plain: true,
  });
  return note;
};

exports.delete = async (id) => {
  let note = await Note.destroy({ where: { id: id } });
  return note;
};
