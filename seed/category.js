const { Category } = require("../models");

const fakeCategories = [
  {
    name: "Actualidad",
    description: "Noticias de actualidad y un squad de especialistas para abrir el diálogo sobre todos esos temas que te interesan.",
    image: "https://bucket.somosohlala.com.ar/s3fs-public/styles/bg/public/2022-07/actualidad.png.webp?itok=T9S2RdC7"
  },
  {
    name: "Calidad de Vida",
    description: "Herramientas de bienestar para conectar con nosotras mismas y vibrar con la naturaleza.",
    image: "https://bucket.somosohlala.com.ar/s3fs-public/styles/bg/public/2022-07/calidad-de-vida.png.webp?itok=mAVa1m7I"
  },
  {
    name: "Liderazgo",
    description: "Liderazgo empático, estrategia financiera, voces diversas y networking para mujeres que buscan ser jefas de sus vidas.",
    image: "https://bucket.somosohlala.com.ar/s3fs-public/styles/bg/public/2022-07/liderazgo.png.webp?itok=VO-6Dlg5"
  },
  {
    name: "Turismo",
    description: "os mejores destinos, los hot spots para salir en la ciudad y toda la movida cultural para no perderte de nada.",
    image: "https://bucket.somosohlala.com.ar/s3fs-public/styles/bg/public/2022-07/guia_.png.webp?itok=ZiB3YrX0"
  },
  {
    name: "Amores",
    description: "Una guía completa (y sin tabúes) para transitar el sinuoso mundo de los vínculos. ",
    image: "https://bucket.somosohlala.com.ar/s3fs-public/styles/bg/public/2022-07/amores.png.webp?itok=D6vg4yrU"
  },
  {
    name: "Homefullness",
    description: "Comidas caseras y saludables, decoración que priorice el confort y rituales para mimarte puertas adentro.",
    image: "https://bucket.somosohlala.com.ar/s3fs-public/styles/bg/public/2022-07/homefullness.png.webp?itok=8D2Gbu8q"
  },
  {
    name: "Tendencias",
    description: "Tendencias, análisis, coaching de estilo, guía de compras, tutoriales beauty y todo lo que viene en moda y belleza.",
    image: "https://bucket.somosohlala.com.ar/s3fs-public/styles/bg/public/2022-07/tendencias.png.webp?itok=vYpbHcnj"
  },
];
module.exports = function () {
  return Category.bulkCreate(fakeCategories);
};
