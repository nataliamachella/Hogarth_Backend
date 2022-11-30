const categoriesServices = require("../services/categoriesServices.js");

// GET ALL CATEGORIES
exports.index = (req, res) => {
  categoriesServices
    .findAll()
    .then((categories) => res.status(200).send(categories))
    .catch((err) => res.status(400).send(err));
};

// GET Category BY URL
exports.findByUrl = (req, res) => {
  const { url } = req.params;
  categoriesServices
    .findByUrl(url)
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).send(err));
};

//ADMIN CONTROLLERS

// CREATE NEW category
exports.createCategory = (req, res) => {
  const category = req.body;
  categoriesServices
    .create(category)
    .then((createdCategory) => res.status(201).send(createdCategory))
    .catch((err) => res.status(400).send(err));
};

// CHANGE Category
exports.changeCategory = (req, res) => {
  const id = req.params.id;
  categoriesServices
    .change(id, req.body)
    .then((updatedCategory) => res.status(200).send(updatedCategory))
    .catch((err) => res.status(404).send(err));
};

// DELETE Category
exports.deleteCategory = (req, res) => {
  const id = req.params.id;
  categoriesServices
    .delete(id)
    .then(() => res.status(204).send("Category deleted"))
    .catch((err) => res.status(404).send(err));
};
