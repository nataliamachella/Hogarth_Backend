const subcategoriesServices = require("../services/subcategoriesServices.js");

// GET ALL SUBCATEGORIES
exports.index = (req, res) => {
  subcategoriesServices
    .findAll()
    .then((subcategories) => res.status(200).send(subcategories))
    .catch((err) => res.status(400).send(err));
};

// GET subCategorie BY ID
exports.findByUrl = (req, res) => {
  const { url } = req.params;
  subcategoriesServices
    .findByUrl(url)
    .then((subCategory) => res.status(200).send(subCategory))
    .catch((err) => res.status(400).send(err));
};

//ADMIN CONTROLLERS

// CREATE NEW subCategory
exports.createSubCategory = (req, res) => {
  const subCategory = req.body;
  subcategoriesServices
    .create(subCategory)
    .then((createdsubCategory) => res.status(201).send(createdsubCategory))
    .catch((err) => res.status(400).send(err));
};

// CHANGE subCategory
exports.changeSubCategory = (req, res) => {
  const id = req.params.id;
  subcategoriesServices
    .change(id, req.body)
    .then((updatedSubcategory) => res.status(200).send(updatedSubcategory))
    .catch((err) => res.status(404).send(err));
};

// DELETE subCategory
exports.deleteSubcategory = (req, res) => {
  const id = req.params.id;
  subcategoriesServices
    .delete(id)
    .then(() => res.status(204).send("Subcategory deleted"))
    .catch((err) => res.status(404).send(err));
};
