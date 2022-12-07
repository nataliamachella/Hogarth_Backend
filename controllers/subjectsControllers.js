const subjectsServices = require("../services/subjectsServices.js");

// GET ALL SUBJECTS
exports.index = (req, res, next) => {
  subjectsServices
    .findAll()
    .then((subjects) => res.status(200).send(subjects))
    .catch(next);
};

// GET SUBJECT BY ID
exports.findById = (req, res, next) => {
  const id = req.params.id;
  subjectsServices
    .findById(id)
    .then((subject) => res.status(200).send(subject))
    .catch(next);
};

//ADMIN CONTROLLERS

// CREATE NEW SUBJECT
exports.createSubject = (req, res, next) => {
  const subject = req.body;
  subjectsServices
    .create(subject)
    .then((createdSubject) => res.status(201).send(createdSubject))
    .catch(next);
};

// CHANGE SUBJECT
exports.changeSubject = (req, res, next) => {
  const id = req.params.id;
  subjectsServices
    .change(id, req.body)
    .then((updatedSubject) => res.status(200).send(updatedSubject))
    .catch(next);
};

// DELETE SUBJECT
exports.deleteSubject = (req, res, next) => {
  const id = req.params.id;
  subjectsServices
    .delete(id)
    .then(() => res.status(204).send("Subject deleted"))
    .catch(next);
};
