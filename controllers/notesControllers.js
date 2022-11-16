const notesServices = require("../services/notesServices.js");

// GET ALL NOTES
exports.index = (req, res) => {
  notesServices
    .findAll()
    .then((notes) => res.status(200).send(notes))
    .catch((err) => res.status(400).send(err));
};

// GET NOTE BY URL
exports.findByUrl = (req, res) => {
  const { url } = req.params;
  notesServices
    .findByUrl(url)
    .then((note) => res.status(200).send(note))
    .catch((err) => res.status(400).send(err));
};

// SEARCH NOTE
exports.searchByQueryString = (req, res) => {
  const { queryString } = req.query;
  notesServices
    .searchByQueryString(queryString)
    .then((notes) => res.status(200).send(notes))
    .catch((err) => res.status(400).send(err));
};

//ADMIN CONTROLLERS

// CREATE NEW NOTE
exports.createNote = (req, res) => {
  const note = req.body;
  notesServices
    .create(note)
    .then((createdNote) => res.status(201).send(createdNote))
    .catch((err) => res.status(400).send(err));
};

// CHANGE NOTE
exports.changeNote = (req, res) => {
  const { id } = req.params;
  notesServices
    .change(id, req.body)
    .then((updatedNote) => res.status(200).send(updatedNote))
    .catch((err) => res.status(404).send(err));
};

// DELETE NOTE
exports.deleteNote = (req, res) => {
  const { id } = req.params;
  notesServices
    .delete(id)
    .then(() => res.status(204).send("Note deleted"))
    .catch((err) => res.status(404).send(err));
};
