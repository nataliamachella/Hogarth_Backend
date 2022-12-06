const { Subject, Note } = require("../models");
const groupSubjectsServices = require("../services/groupSubjectServices");

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

exports.create = async (body) => {
  const { idGroup, name, image } = body;
  let subjectCreated = await Subject.create({ name, image });
  let groupSubject = await groupSubjectsServices.findById(idGroup);
  subjectCreated.setGroupSubject(groupSubject);
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
