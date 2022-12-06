const typeContentServices = require("../services/typeContentServices");
const notesServices = require("../services/notesServices.js");

exports.index = (req, res, next) => {
  typeContentServices
    .findAll()
    .then((typeContent) =>
      notesServices
        .findByCategoryForBlock(typeContent.map((item) => item.urlCategory))
        .then((notes) => {
          let arr = typeContent.map((type) => {
            let notesArr = notes
              .filter((note) => note.subCategory)
              .filter(
                (note) => note.subCategory.category.url === type.urlCategory
              );
            let { name, id, position, urlCategory, categoryId, category } =
              type;
            return {
              name,
              position,
              urlCategory,
              id,
              categoryId,
              category,
              notesArr,
            };
          });
          res.send(arr);
        })
    )
    .catch(next);
};

exports.findByName = (req, res, next) => {
  const { name } = req.params;
  typeContentServices
    .findByName(name)
    .then((typeContent) => res.send(typeContent))
    .catch(next);
};

exports.createTypeContent = (req, res, next) => {
  const typeContent = req.body;
  typeContentServices
    .create(typeContent)
    .then((createdTypeContent) => res.send(createdTypeContent))
    .catch(next);
};

exports.changeTypeContent = (req, res, next) => {
  const { id } = req.params;
  const typeContent = req.body;
  typeContentServices
    .change(id, typeContent)
    .then((createdTypeContent) => res.send(createdTypeContent))
    .catch(next);
};

exports.deleteTypeContent = (req, res, next) => {
  const { id } = req.params;
  typeContentServices
    .create(id)
    .then(() => res.status(204).send("Category deleted"))
    .catch(next);
};

//subcategory

exports.indexBC = (req, res, next) => {
  typeContentServices
    .findAllBC()
    .then((typeContent) => res.send(typeContent))
    .catch(next);
};

exports.findByNameBC = (req, res, next) => {
  const { name } = req.params;
  typeContentServices
    .findByNameBC(name)
    .then((typeContent) => res.send(typeContent))
    .catch(next);
};

exports.findByCategoryBC = (req, res, next) => {
  const { url } = req.params;
  typeContentServices
    .findByCategoryBC(url)
    .then((typeContent) => {
      let typeContentFilter = typeContent.filter(
        (block) => block.subCategory !== null
      );
      notesServices
        .findBySubCategoryForBlock(
          typeContentFilter.map((item) => item.urlSubCategory)
        )
        .then((notes) => {
          let arr = typeContentFilter.map((type) => {
            let notesArr = notes
              .filter((note) => note.subCategory)
              .filter((note) => note.subCategory.url === type.urlSubCategory);
            let { name, id, position, urlSubCategory, categoryId, category } =
              type;
            return {
              name,
              position,
              urlSubCategory,
              id,
              categoryId,
              category,
              notesArr,
            };
          });
          res.send(arr);
        });
    })
    .catch(next);
};

exports.createTypeContentBC = (req, res, next) => {
  const typeContent = req.body;
  typeContentServices
    .createBC(typeContent)
    .then((createdTypeContent) => res.send(createdTypeContent))
    .catch(next);
};

exports.changeTypeContentBC = (req, res, next) => {
  const { id } = req.params;
  const typeContent = req.body;
  typeContentServices
    .changeBC(id, typeContent)
    .then((createdTypeContent) => res.send(createdTypeContent))
    .catch(next);
};

exports.deleteTypeContentBC = (req, res, next) => {
  const { id } = req.params;
  typeContentServices
    .createBC(id)
    .then(() => res.status(204).send("Category deleted"))
    .catch(next);
};
