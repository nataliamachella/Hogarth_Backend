const { TypeContent } = require("../models");

exports.findAll = async () => {
  let typeContent = await TypeContent.findAll();
  return typeContent;
};

exports.findByName = async (name) => {
  let typeContent = await TypeContent.findOne({ where: { name: name } });
  return typeContent;
};

exports.create = async (typeContent) => {
  let typeContentCreated = await TypeContent.create(typeContent);
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
