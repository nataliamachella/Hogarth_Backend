const {
  Subject,
  Note,
  GroupSubject,
  SubCategory,
  Category,
} = require("../models");
const sequelize = require("sequelize");

exports.findAll = async () => {
  let groupSubject = await GroupSubject.findAll();
  return groupSubject;
};

exports.findInUse = async () => {
  let groupSubject = await GroupSubject.findOne({
    where: { inUse: true },
    include: [
      {
        model: Subject,
        attributes: ["name", "image"],
        include: [
          {
            model: Note,
            as: "note",
            attributes: ["url"],
            include: [
              {
                model: SubCategory,
                attributes: ["url"],
                include: [{ model: Category, attributes: ["url"] }],
              },
            ],
          },
        ],
      },
    ],
  });
  return groupSubject;
};

exports.findById = async (id) => {
  let groupSubject = await GroupSubject.findOne({ where: { id: id } });
  return groupSubject;
};

exports.create = async (body) => {
  const { name, question, inUse } = body;
  let groupSubject = await GroupSubject.create({ name, question, inUse });
  return groupSubject;
};

exports.change = async (id, body) => {
  let groupSubject = await GroupSubject.update(body, { id: id });
  return groupSubject;
};

exports.delete = async (id) => {
  let groupSubject = await GroupSubject.destroy({ where: { id: id } });
  return groupSubject;
};
