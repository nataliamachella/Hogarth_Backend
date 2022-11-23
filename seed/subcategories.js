const subcategoriesServices = require("../services/subcategoriesServices.js");

const fakeSubcategories = [
  {
    name: "Noticias Locales",
    urlCategory: "Actualidad",
  },
  {
    name: "Entretenimiento",
    urlCategory: "Actualidad",
  },
  {
    name: "Historias",
    urlCategory: "Actualidad",
  },
  {
    name: "Squad",
    urlCategory: "Actualidad",
  },
  {
    name: "Espiritualidad",
    urlCategory: "Calidad de Vida",
  },
  {
    name: "Sustentabilidad",
    urlCategory: "Calidad de Vida",
  },
  {
    name: "Mi Cuerpo",
    urlCategory: "Calidad de Vida",
  },
  {
    name: "Salud Mental",
    urlCategory: "Calidad de Vida",
  },
  {
    name: "Astroligia",
    urlCategory: "Calidad de Vida",
  },
  {
    name: "Empoderamiento",
    urlCategory: "Liderazgo",
  },
  {
    name: "Finanzas",
    urlCategory: "Liderazgo",
  },
  {
    name: "Diversidad",
    urlCategory: "Liderazgo",
  },
  {
    name: "Viajes",
    urlCategory: "Turismo",
  },
  {
    name: "Recorridos",
    urlCategory: "Turismo",
  },
  {
    name: "Experiencias",
    urlCategory: "Turismo",
  },
  {
    name: "Movida Cultural",
    urlCategory: "Turismo",
  },
  {
    name: "Sexo",
    urlCategory: "Amores",
  },
  {
    name: "Relaciones",
    urlCategory: "Amores",
  },
  {
    name: "Citas",
    urlCategory: "Amores",
  },
  {
    name: "Materinidad y crianza",
    urlCategory: "Amores",
  },
  {
    name: "Decoracion",
    urlCategory: "Homefullness",
  },
  {
    name: "Cocina",
    urlCategory: "Homefullness",
  },
  {
    name: "Moda",
    urlCategory: "Tendencia",
  },
  {
    name: "Belleza",
    urlCategory: "Tendencia",
  },
];

module.exports = function () {
  return fakeSubcategories.map((subcategories)=>{
    return subcategoriesServices.create(subcategories);
  })
};
