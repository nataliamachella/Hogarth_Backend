const subcategoriesServices = require("../services/subcategoriesServices.js");

const fakeSubcategories = [
  {
    name: "Noticias Locales",
    urlCategory: "Actualidad",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%201739.svg",
    color: "#EB522D",
  },
  {
    name: "Entretenimiento",
    urlCategory: "Actualidad",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202176.svg",
    color: "#CF02BB",
  },
  {
    name: "Historias",
    urlCategory: "Actualidad",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202194.svg",
    color: "#427AD9",
  },
  {
    name: "Squad",
    urlCategory: "Actualidad",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202171.svg",
    color: "#EDA22F",
  },
  {
    name: "Espiritualidad",
    urlCategory: "Calidad_de_Vida",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202193.svg",
    color: "#6F66DB",
  },
  {
    name: "Sustentabilidad",
    urlCategory: "Calidad_de_Vida",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202177.svg",
    color: "#159D41",
  },
  {
    name: "Mi Cuerpo",
    urlCategory: "Calidad_de_Vida",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%201742.svg",
    color: "#6F66DB",
  },
  {
    name: "Salud Mental",
    urlCategory: "Calidad_de_Vida",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202196.svg",
    color: "#6F66DB",
  },
  {
    name: "Astrologia",
    urlCategory: "Calidad_de_Vida",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202178.svg",
    color: "#6F66DB",
  },
  {
    name: "Empoderamiento",
    urlCategory: "Liderazgo",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%201744.svg",
    color: "#8637BA",
  },
  {
    name: "Finanzas",
    urlCategory: "Liderazgo",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202180.svg",
    color: "#8637BA",
  },
  {
    name: "Diversidad",
    urlCategory: "Liderazgo",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202182.svg",
    color: "#8637BA",
  },
  {
    name: "Viajes",
    urlCategory: "Turismo",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202184.svg",
    color: "#3678BA",
  },
  {
    name: "Recorridos",
    urlCategory: "Turismo",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202183.svg",
    color: "#3678BA",
  },
  {
    name: "Experiencias",
    urlCategory: "Turismo",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202197.svg",
    color: "#3678BA",
  },
  {
    name: "Movida Cultural",
    urlCategory: "Turismo",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202185.svg",
    color: "#3678BA",
  },
  {
    name: "Sexo",
    urlCategory: "Amores",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202189.svg",
    color: "#EE1B4D",
  },
  {
    name: "Relaciones",
    urlCategory: "Amores",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202192.svg",
    color: "#EE1B4D",
  },
  {
    name: "Citas",
    urlCategory: "Amores",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202169.svg",
    color: "#EE1B4D",
  },
  {
    name: "Materinidad y crianza",
    urlCategory: "Amores",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202172.svg",
    color: "#EE1B4D",
  },
  {
    name: "Decoracion",
    urlCategory: "Homefullness",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202188.svg",
    color: "#5CBC8E",
  },
  {
    name: "Cocina",
    urlCategory: "Homefullness",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%201732.svg",
    color: "#5CBC8E",
  },
  {
    name: "Moda",
    urlCategory: "Tendencias",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202198.svg",
    color: "#F04D98",
  },
  {
    name: "Belleza",
    urlCategory: "Tendencias",
    icon_image:
      "https://bucket.somosohlala.com.ar/s3fs-public/2022-06/Group%202195.svg",
    color: "#F04D98",
  },
];

module.exports = function () {
  return fakeSubcategories.map((subcategories) => {
    return subcategoriesServices.create(subcategories);
  });
};
