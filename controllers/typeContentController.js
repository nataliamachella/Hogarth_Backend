const typeContentServices = require("../services/typeContentServices");
exports.index = (req, res) => {
  typeContentServices
    .findAll()
    .then((subjects) => res.status(200).send(subjects))
    .catch((err) => res.status(400).send(err));
};

exports.findByName = (req, res, next) => {
  const { name } = req.params;
  typeContentServices
    .findByName(name)
    .then((typeContent) => res.send(typeContent))
    .catch(() => res.send(next));
};

exports.createTypeContent = (req, res, next) => {
  const typeContent = req.body;
  typeContentServices
    .create(typeContent)
    .then((createdTypeContent) => res.send(createdTypeContent))
    .catch(() => res.send(next));
};

exports.changeTypeContent = (req, res, next) => {
  const { id } = req.params;
  const typeContent = req.body;
  typeContentServices
    .change(id, typeContent)
    .then((createdTypeContent) => res.send(createdTypeContent))
    .catch(() => res.send(next));
};

exports.deleteTypeContent = (req, res, next) => {
  const { id } = req.params;
  typeContentServices
    .create(id)
    .then(() => res.status(204).send("Category deleted"))
    .catch(() => res.send(next));
};
