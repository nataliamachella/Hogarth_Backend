const notesServices = require("../services/notesServices.js");

// GET ALL NOTES
exports.index = (req, res, next) => {
  notesServices
    .findAll()
    .then((notes) => res.status(200).send(notes))
    .catch(next);
};

exports.findForPagination = (req, res, next) => {
  const { page } = req.params;
  notesServices
    .findAllPagination(page)
    .then((data) => {
      const { count: totalItems, rows: notes } = data;
      const currentPage = page ? +page : 0;
      const totalPages = Math.ceil(totalItems / 12) - 1;
      res.status(200).send({ totalItems, notes, totalPages, currentPage });
    })
    .catch(next);
};

exports.findForLimit = (req, res, next) => {
  const { limit } = req.params;
  notesServices
    .findAllWithLimit(limit)
    .then((notes) => res.status(200).send(notes))
    .catch(next);
};

// GET NOTE BY URL
exports.findByUrl = (req, res, next) => {
  const { url } = req.params;
  notesServices
    .findByUrl(url)
    .then((note) => res.status(200).send(note))
    .catch(next);
};

// SEARCH NOTE
exports.searchByQueryString = (req, res, next) => {
  const { queryString } = req.query;
  notesServices
    .searchByQueryString(queryString)
    .then((notes) => res.status(200).send(notes))
    .catch(next);
};

//Find by category url
exports.findByCategory = (req, res, next) => {
  const { url } = req.params;
  notesServices
    .findByCategory(url)
    .then((notes) => {
      let notesFilter = notes.filter((note) => note.subCategory !== null);
      res.status(200).send(notesFilter);
    })
    .catch(next);
};

//ADMIN CONTROLLERS

// CREATE NEW NOTE
exports.createNote = (req, res, next) => {
  const note = req.body;
  notesServices
    .create(note)
    .then((createdNote) => res.status(201).send(createdNote))
    .catch(next);
};

// CHANGE NOTE
exports.changeNote = (req, res, next) => {
  const { id } = req.params;
  notesServices
    .change(id, req.body)
    .then((updatedNote) => res.status(200).send(updatedNote))
    .catch(next);
};

exports.deleteContent = (req, res, next) => {
  const { id } = req.params;
  notesServices
    .deleteContent(id)
    .thne(() => res.status(204).send("Content deleted"))
    .catch(next);
};

// DELETE NOTE
exports.deleteNote = (req, res, next) => {
  const { id } = req.params;
  notesServices
    .delete(id)
    .then(() => res.status(204).send("Note deleted"))
    .catch(next);
};
