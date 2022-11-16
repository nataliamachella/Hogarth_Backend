const { SubCategorie } = require("../models");
const sequelize = require("sequelize");

// exports.findAll = async () =>{

// }

exports.findByUrl = async (url) => {
  let subCategorie = await SubCategorie.findOne({ where: { url: url } });
  return subCategorie;
};

// exports.create = async (subcategorie) =>{

// }

// exports.change = async (id, body) =>{

// }

// exports.delete = async (id) =>{

// }
