const subjectsServices = require("../services/subjectsServices.js");

// GET ALL SUBJECTS
exports.index = (req, res) => {
    subjectsServices
    .findAll()
    .then((subjects) => res.status(200).send(subjects))
    .catch((err) => res.status(400).send(err));
};

// GET SUBJECT BY ID
exports.findById = (req, res) => {
  const id = req.params.id;
  subjectsServices
    .findById(id)
    .then((subject) => res.status(200).send(subject))
    .catch((err) => res.status(400).send(err));
};

//ADMIN CONTROLLERS

// CREATE NEW SUBJECT
exports.createSubject = (req, res) => {
  const subject = req.body;
  subjectsServices
    .create(subject)
    .then((createdSubject) => res.status(201).send(createdSubject))
    .catch((err) => res.status(400).send(err));
};

// CHANGE SUBJECT
exports.changeSubject = (req, res) => {
  const id = req.params.id;
  subjectsServices
    .change(id, req.body)
    .then((updatedSubject) => res.status(200).send(updatedSubject))
    .catch((err) => res.status(404).send(err));
};

// DELETE SUBJECT
exports.deleteSubject = (req, res) => {
  const id = req.params.id;
  subjectsServices
    .delete(id)
    .then(() => res.status(204).send("Subject deleted"))
    .catch((err) => res.status(404).send(err));
};
