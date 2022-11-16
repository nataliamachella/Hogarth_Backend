const subcategoriesServices = require("../services/subcategoriesServices.js");

// GET ALL SUBCATEGORIES
exports.index = (req, res) => {
  subcategoriesServices
    .findAll()
    .then((subcategories) => res.status(200).send(subcategories))
    .catch((err) => res.status(400).send(err));
};

// GET SUBCATEGORY BY ID
exports.findByUrl = (req, res) => {
  const { url } = req.params;
  subcategoriesServices
    .findByUrl(url)
    .then((subcategory) => res.status(200).send(subcategory))
    .catch((err) => res.status(400).send(err));
};

//ADMIN CONTROLLERS

// CREATE NEW SUBCATEGORY
exports.createSubcategory = (req, res) => {
  const subcategory = req.body;
  subcategoriesServices
    .create(subcategory)
    .then((createdSubcategory) => res.status(201).send(createdSubcategory))
    .catch((err) => res.status(400).send(err));
};

// CHANGE SUBCATEGORY
exports.changeSubcategory = (req, res) => {
  const id = req.params.id;
  subcategoriesServices
    .change(id, req.body)
    .then((updatedSubcategory) => res.status(200).send(updatedSubcategory))
    .catch((err) => res.status(404).send(err));
};

// DELETE SUBCATEGORY
exports.deleteSubcategory = (req, res) => {
  const id = req.params.id;
  subcategoriesServices
    .delete(id)
    .then(() => res.status(204).send("Subcategory deleted"))
    .catch((err) => res.status(404).send(err));
};
