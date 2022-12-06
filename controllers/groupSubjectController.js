const subject = require("../seed/subject");
const groupSubjectsServices = require("../services/groupSubjectServices");

// GET ALL SUBJECTS
exports.index = (req, res, next) => {
  groupSubjectsServices
    .findAll()
    .then((subjects) => res.status(200).send(subjects))
    .catch(next);
};

exports.findInUse = (req, res, next) => {
  groupSubjectsServices
    .findInUse()
    .then((group) => {
      let subjects = group.subjects
        .map((subject) => {
          let randomNum = Math.round(
            Math.random() * (subject.note.length - 0) + 0
          );
          let { name, image } = subject;
          let random = subject.note[randomNum];
          return { name, image, random };
        })
        .map((subject) => {
          let { name, image, random } = subject;
          let urlNote = `/${random.subCategory.category.url}/${random.subCategory.url}/${random.url}`;
          return { name, image, urlNote };
        });
      let { id, question, inUse } = group;
      res.send({ id, question, inUse, subjects });
    })
    .catch(next);
};

// GET SUBJECT BY ID
exports.findById = (req, res, next) => {
  const id = req.params.id;
  groupSubjectsServices
    .findById(id)
    .then((subject) => res.status(200).send(subject))
    .catch(next);
};

//ADMIN CONTROLLERS

// CREATE NEW SUBJECT
exports.createSubject = (req, res, next) => {
  groupSubjectsServices
    .create(req.body)
    .then((createdSubject) => res.status(201).send(createdSubject))
    .catch(next);
};

// CHANGE SUBJECT
exports.changeSubject = (req, res, next) => {
  const id = req.params.id;
  groupSubjectsServices
    .change(id, req.body)
    .then((updatedSubject) => res.status(200).send(updatedSubject))
    .catch(next);
};

// DELETE SUBJECT
exports.deleteSubject = (req, res, next) => {
  const id = req.params.id;
  groupSubjectsServices
    .delete(id)
    .then(() => res.status(204).send("Subject deleted"))
    .catch(next);
};
