const { Subject, Note } = require("../models");
const sequelize = require("sequelize");

exports.findAll = async () => {
  let subject = await Subject.findAll({
    include: [{ model: Note, as: "note" }],
  });
  return subject;
};

exports.findById = async (id) => {
  let subject = await Subject.findOne({ where: { id: id } });
  return subject;
};

exports.create = async (subject) => {
  let subjectCreated = await Subject.create(subject);
  return subjectCreated;
};

exports.change = async (id, body) => {
  let subject = await Subject.update(body, { id: id });
  return subject;
};

exports.delete = async (id) => {
  let subject = await Subject.destroy({ where: { id: id } });
  return subject;
};
