const { Note } = require("../models");

const fakeNotes = [
  {
    title: "Incendios en el Delta quema intencional, sequía y falta de acción",
    field_content: [
      {
        field_content:
          "Los incendios en el Delta siguen avanzando, la sequía y la dirección del viento no ayudan las columnas de humo invaden miles de hectáreas sin poder ponerle fin al problema.&nbsp;",
        position: 1,
        nameTypeContent: "Clasico",
      },
    ],
    urlSubCategory: "Noticias_Locales",
    idSubject: 1,
  },
];

module.exports = function () {
  return Note.bulkCreate(fakeNotes, { validate: true });
};
