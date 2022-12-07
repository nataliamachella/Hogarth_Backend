const categoriesServices = require("../services/categoriesServices.js");

// GET ALL CATEGORIES
exports.index = (req, res, next) => {
  categoriesServices
    .findAll()
    .then((categories) => res.status(200).send(categories))
    .catch(next);
};

// GET Category BY URL
exports.findByUrl = (req, res, next) => {
  const { url } = req.params;
  categoriesServices
    .findByUrl(url)
    .then((category) => res.status(200).json(category))
    .catch(next);
};

//ADMIN CONTROLLERS

// CREATE NEW category
exports.createCategory = (req, res, next) => {
  const category = req.body;
  categoriesServices
    .create(category)
    .then((createdCategory) => res.status(201).send(createdCategory))
    .catch(next);
};

// CHANGE Category
exports.changeCategory = (req, res, next) => {
  const id = req.params.id;
  categoriesServices
    .change(id, req.body)
    .then((updatedCategory) => res.status(200).send(updatedCategory))
    .catch(next);
};

// DELETE Category
exports.deleteCategory = (req, res, next) => {
  const id = req.params.id;
  categoriesServices
    .delete(id)
    .then(() => res.status(204).send("Category deleted"))
    .catch(next);
};
