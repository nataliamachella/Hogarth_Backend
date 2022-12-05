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
