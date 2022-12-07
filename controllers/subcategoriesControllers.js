const subcategoriesServices = require("../services/subcategoriesServices.js");

// GET ALL SUBCATEGORIES
exports.index = (req, res, next) => {
  subcategoriesServices
    .findAll()
    .then((subcategories) => res.status(200).send(subcategories))
    .catch(next);
};

// GET subCategorie BY ID
exports.findByUrl = (req, res, next) => {
  const { url } = req.params;
  subcategoriesServices
    .findByUrl(url)
    .then((subCategory) => res.status(200).send(subCategory))
    .catch(next);
};

exports.findByCategory = (req, res, next) => {
  const { name } = req.params;
  subcategoriesServices
    .findByCategory(name)
    .then((subCategory) => res.send(subCategory))
    .catch(next);
};

//ADMIN CONTROLLERS

// CREATE NEW subCategory
exports.createSubCategory = (req, res, next) => {
  const subCategory = req.body;
  subcategoriesServices
    .create(subCategory)
    .then((createdsubCategory) => res.status(201).send(createdsubCategory))
    .catch(next);
};

// CHANGE subCategory
exports.changeSubCategory = (req, res, next) => {
  const id = req.params.id;
  subcategoriesServices
    .change(id, req.body)
    .then((updatedSubcategory) => res.status(200).send(updatedSubcategory))
    .catch(next);
};

// DELETE subCategory
exports.deleteSubcategory = (req, res, next) => {
  const id = req.params.id;
  subcategoriesServices
    .delete(id)
    .then(() => res.status(204).send("Subcategory deleted"))
    .catch(next);
};
