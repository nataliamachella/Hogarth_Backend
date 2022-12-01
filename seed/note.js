const notesServices = require("../services/notesServices.js");

const fakeNotes = [
  {
    title: "Incendios en el Delta quema intencional, sequía y falta de acción",
    field_title_pre: "Incendios en el Delta:",
    field_title: " quema intencional, sequía y falta de acción",
    field_description:
      "La Ley de Humedales sigue paralizada en el Congreso mientras que entre mayo y agosto el ministerio de Ambiente recibió más de 2.500 alertas por incendios entre la zona que se encuentra entre Santa Fe, parte de Buenos Aires y Entre Ríos.",
    author: "CH",
    field_content: [
      {
        field_content:
          "<p><strong>Los incendios en el Delta siguen avanzando, la sequía y la dirección del viento no ayudan</strong>: las columnas de humo invaden miles de hectáreas sin poder ponerle fin al problema.&nbsp;</p>\r\n",
        position: 1,
      },
      {
        field_content:
          "<p><strong>Se trata de incendios intencionales, que se encienden para fortalecer los campos</strong> y mejorar los suelos para el ganado, una medida que está totalmente prohibida y desaconsejada. Por otro lado, la sequía genera que el fuego crezca con más fuerza y las consecuencias son, en muchos casos, irreversibles. Días atrás un grupo de ambientalistas se movilizaron en Rosario para exigir el cese de ‘incendios intencionales’ en las islas del río Paraná y la búsqueda de los responsables.</p>\r\n\r\n<p><strong>Este domingo fueron detenidas en las islas entrerrianas tres personas que quedaron a disposición del juzgado de Victoria</strong>. Según relatan sus familiares, los detenidos son apicultores que intentaban generar un “cortafuegos”, como se denomina a los incendios que se provocan para evitar el avance de las llamas.</p>\r\n",
        position: 2,
      },
      {
        field_content:
          "<p>El humo llegó a zonas lejanas de los focos, y seguramente si vivís en AMBA pudiste sentirlo. En los lugares cercanos,<strong> la gente comienza a presentar problemas respiratorios e irritación de ojos, nariz y garganta. </strong>Locales ya advirtieron que es tan fuerte que el uso del barbijo es inútil.</p>\r\n",
        position: 3,
      },
      {
        field_content:
          '<p>Como expresó&nbsp;&nbsp;<a href="https://www.instagram.com/jovenesporelclimarg/">Jóvenes por el Clima </a>detrás de las denuncias y los reclamos,<strong> la realidad es que los incendios afectan al humedal, ecosistema clave para la regulación del flujo y la calidad del agua asi como también para mitigar el cambio climático. </strong> Estamos hablando de un área afectada que representa 6 veces la superficie de la ciudad de Rosario: un ecocidio que afecta a cientos de especias de mamíeros, reptiles, peces, aves, el aire y el agua de una de las zonas más ricas del país en lo que se refiere a flora y fauna Las zonas afectadas en 2022 alcanzan las 110.405 hectáreas, seis veces la superficie de Rosario. Un ecocidio de imprevisibles consecuencias futuras que afecta a animales –cientos de especies de aves, mamíferos, reptiles, anfibios y peces–, y que daña al aire y el agua de una de las zonas más ricas del país en lo que a flora y fauna se refiere.</p>\r\n',
        position: 4,
      },
      {
        field_content:
          '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/ChQRTKEvn7w/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/ChQRTKEvn7w/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Ver esta publicación en Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/ChQRTKEvn7w/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Una publicación compartida de Jóvenes Por El Clima Argentina (@jovenesporelclimarg)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>',
        position: 5,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-08/diseno_sin_titulo_1_5.jpg.webp",
    urlSubCategory: "Noticias_Locales",
    idSubject: 1,
  },
  {
    title:
      " Qatar 2022: juegan Argentina - México y esto es lo que tenés que saber",
    field_title_pre: "Arranca el Mundial.",
    field_title: "3 recetas fáciles para desayunar mientras mirás el partido",
    field_description:
      "Empieza el Mundial Qatar 2022 y llegan los encuentros con comidas para compartir en familia o con amistades. Esta vez, el horario no da para picada ni asadito, sino para un buen desayuno casero fácil y rápido. Acá, 3 ideas simples y ricas.",
    author: "Mariana Copland",
    field_content: [
      {
        field_content_title: null,
        field_content:
          '<p><span><span><span><span><strong>Empieza el Mundial Qatar 2022 </strong>y llegan los encuentros cargados de pasión, emoción y ricas comidas para compartir en familia o con amistades. Pero el horario no da para picada ni asadito, sino para <strong>un buen desayuno casero fácil y rápido. </strong></span></span></span></span></p>\r\n\r\n<p><span><span><span><span>La influencer gastronómica Belén Lozano (<a href="https://www.instagram.com/lacocinerax/">@lacocinerax</a>) nos comparte su selección de <strong>3 recetas que te van a encantar.</strong></span></span></span></span></p>\r\n',
        position: 1,
      },
      {
        field_content_title:
          "1. Galletitas de avena, frutos secos y frutos rojos",
        field_content:
          "<p><span><span><span><span>Sin harinas refinadas, sin manteca, nutritivas y con fruta.</span></span></span></span></p>\r\n\r\n<p><strong><span><span><span><span>Ingredientes:</span></span></span></span></strong></p>\r\n\r\n<p><span><span><span><span>1 huevo</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>50 gr de azúcar mascabo</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>Chorrito de extracto de vainilla</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>40 gr de aceite de coco</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>40 gr de harina de almendras</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>1 cdita de polvo de hornear</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>100 gr de avena instantánea</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>40 gr de frutos secos</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>50 gr de frutos rojos congelados</span></span></span></span></p>\r\n\r\n<p><strong><span><span><span><span>Preparación:</span></span></span></span></strong></p>\r\n\r\n<p><span><span><span><span>1. Primero batir el huevo con el azúcar mascabo, el extracto de vainilla y el aceite de coco.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>2. Agregar el polvo de hornear, la harina de almendras, la avena instantánea y los frutos secos previamente picados. Mezclar.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>3. Por último sumar los frutos rojos congelados e integrar.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>4. Con ayuda de una cucharadita ir formando las galletitas en la canasta de la freidora de aire Easyfry de Moulinex (opcional agregar un chorrito de aceite). El tamaño no tiene que ser muy grande y tampoco hay que juntarlas entre sí porque se expanden en la cocción.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>5. Cocinar a 160° durante 10/15 min aprox. o hasta dorar.</span></span></span></span></p>\r\n\r\n<p><strong><span><span><span><span>Consejos:</span></span></span></span></strong></p>\r\n\r\n<p><span><span><span><span>- Los 50 gr de azúcar mascabo se pueden reemplazar por azúcar orgánica, de coco, blanca o 2 cdas. de miel.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>- El aceite de coco puede reemplazarse por aceite de girasol.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>- La harina de coco se puede reemplazar por cualquier otra harina: de avena, arroz, integral, almendras, etc.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>- La granola puede reemplazarse por frutos secos picados.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>- Si querés hacerlas veganas se puede reemplazar el huevo por 60 gr de mantequilla de maní o 1 banana pisada.</span></span></span></span></p>\r\n",
        position: 2,
      },
      {
        field_content_title: "2. Muffins de coco",
        field_content:
          "<p><span><span><span><span>Integrales, sin manteca y muy fáciles de hacer.</span></span></span></span></p>\r\n\r\n<p><strong><span><span><span><span>Ingredientes:</span></span></span></span></strong></p>\r\n\r\n<p><span><span><span><span>2 huevos</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>150 gr de azúcar mascabo</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>1 cdita de extracto de vainilla</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>150 ml de aceite de girasol/coco</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>100 ml de leche</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>50 gr de coco rallado</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>2 cditas de polvo de hornear</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>200 gr de harina integral</span></span></span></span></p>\r\n\r\n<p><strong><span><span><span><span>Preparación:</span></span></span></span></strong></p>\r\n\r\n<p><span><span><span><span>1. En un bowl batir los huevos junto con el aceite de coco, el extracto de vainilla y el azúcar mascabo.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>2. Incorporar la leche poco a poco y seguir batiendo.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>3. Sumar los secos; el coco rallado, el polvo de hornear y la harina integral. Mezclar hasta integrar bien todos los ingredientes.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>4. Colocar en moldes de muffins y opcional por encima tirarles un poco de avena y coco rallado.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>5. Colocar 4 moldes en la canasta de la freidora de aire Easyfry de Moulinex.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>6. Cocinar a 160° durante 30 min aprox.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>7. Sacar del molde y dejar enfriar. Colocar los otros moldes y repetir el procedimiento.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>8. Opcional encima ponerle un poco de dulce de leche sin azúcar.</span></span></span></span></p>\r\n\r\n<p><strong><span><span><span><span>Consejos:</span></span></span></span></strong></p>\r\n\r\n<p><span><span><span><span>- La granola se puede reemplazar por frutos secos picados o barrita de cereal triturada.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>- En reemplazo de la mantequilla de maní usar 2 cdas de aceite de coco.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>- Para el relleno se puede usar mantequilla de maní, mermelada, queso crema, etc.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>- Para las frutas, podés usar la que más te guste: banana, frutos rojos, pera, manzana, etc.</span></span></span></span></p>\r\n",
        position: 3,
      },
      {
        field_content_title: "3. Pancitos de queso",
        field_content:
          '<p><span><span><span><span>Sin huevo, sin manteca, sin aceite e integrales.</span></span></span></span></p>\r\n\r\n<p><strong><span><span><span><span>Ingredientes:</span></span></span></span></strong></p>\r\n\r\n<p><span><span><span><span>1 taza de queso crema light</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>1 taza de harina integral</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>1 taza de queso rallado</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>1 cdita. de polvo de hornear</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>Pizca de sal</span></span></span></span></p>\r\n\r\n<p><strong><span><span><span><span>Preparación:</span></span></span></span></strong></p>\r\n\r\n<p><span><span><span><span>1. En un bowl colocar todos los ingredientes; el queso crema, la harina, el queso rallado, el polvo de hornear y la sal.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>2. Con ayuda de las manos mezclar bien hasta obtener una masa suave (está bien si queda un poco pegajosa).</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>3. Formar las bolitas del tamaño que más te guste y colocar en la canasta de la Easyfry de Moulinex. Opcional agregar un chorrito de aceite.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>4.Cocinar a 180° durante 15 min aprox, hasta que estén doraditos.</span></span></span></span></p>\r\n\r\n<p><strong>Consejos:</strong></p>\r\n\r\n<p><span>- La harina integral se puede reemplazar por otra harina: de avena, almendras, de arroz, 0000, etc.</span></p>\r\n\r\n<p><span><span><span><span>- Si querés hacerlos veganos, podés reemplazar el queso crema por algún queso a base de castañas de cajú y el queso rallado por rawmesan.</span></span></span></span></p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><span><span><span><strong><span>Con información de</span></strong><span> Moulinex (IG: </span><a href="https://www.instagram.com/moulinexarg/"><span><span>@moulinexarg</span></span></a><u><span><span>)</span></span></u></span></span></span></p>\r\n',
        position: 4,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/muffins-coco-ok.jpg.webp?itok=MCe0fvAo",
    urlSubCategory: "Cocina",
    idSubject: 1,
  },
  {
    title: "Qatar 2022: confianza mundial",
    field_title_pre: "Mundial Qatar 2022:",
    field_title: "Confianza mundial",
    field_description:
      "Después del resultado de Argentina - Arabia Saudita, Sole Simond sugiere que las derrotas pueden ayudarnos a volvernos más conscientes y precisos para nuestros próximos desafíos. ",
    author: "Sole Venesio",
    field_content: [
      {
        field_content_title: null,
        field_content:
          '<p><span><span><span><span><strong>“Confíen”, dijo Leo Messi. </strong>Y me pregunto cómo pudo habernos entrado la desconfianza después de una Scaloneta invicta con una Copa América adentro, sólo por un traspiés. ¡Qué fácil podemos perder la confianza!, pensé hoy cuando Arabia Saudita nos ganaba 2 a 1 en el <a href="https://www.somosohlala.com/etiqueta/mundial-qatar-2022">Mundial Qatar </a>y escuchaba ciertos pájaros de mal agüero vaticinando lo peor. Es una tendencia de la mente que entra en modo destructivo. Nos pasa en nuestra propia vida, tendemos a aferrarnos a lo negativo, quizás algo no sale cómo esperábamos y de pronto todo se pone negro.&nbsp;</span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span><span>Entonces, quedamos en <em>loop</em> sobre lo que hicimos mal, o hubiéramos hecho diferente, incluso suponemos que el futuro será aun peor. Quizás te pasó hoy cuando sentíamos que el partido lo teníamos ganado y masticábamos medialunas confiados y serenos al alba. Y de pronto en el segundo tiempo todos quedamos en off side. Porque la expectativa reduce nuestra alegría. “Es obvio que vamos a ganar”, “a estos nos los comemos en dos pancitos”, “esto es un trámite”, y de pronto –qué linda nueva lección para nuestro ego– nos bajaron del pony. Y nos quedamos humildes y cabizbajos. Como tantas otras veces.</span></span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span><span>Este año me vi diciendo varias veces: “atenti, no te agrandes, silbá bajito”, fue un mantra que me acompañó en mis éxitos después de que me fui cabeza al piso varias veces.&nbsp;</span></span></span></span></span></span></span></span></span></p>\r\n',
        position: 1,
      },
      {
        field_content_title: null,
        field_content:
          "<p><span><span><span><span>Lo sabemos, es partido a partido, pero<strong> la confianza es clave para lograr lo que queremos. </strong>Lo viviste en carne propia, creamos nuestra realidad y, si vamos con la derrota y el miedo tatuados en el corazón, los resultados se empantanan, avanzan con freno de mano.&nbsp;</span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span><span>Entonces, pensaba hoy queriendo raspar del pote algo de optimismo en un mar de frustración, que los que van paso a paso, de a poquito, llegan lejos, sin promesas grandilocuentes, sin creer que te la tenés ganada. Despacito, con la humildad de los grandes. Sin dar nada por asegurado.&nbsp;</span></span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span><span>Cuando estudiaba gastronomía, el Gato Dumas nos dijo en una de las primeras clases: “Tengan cuidado con los cuchillos sin filo, porque te cortás más que con los que están bien afilados. ¿Por qué? Porque a los desafilados les sacás atención y te cortás, en cambio te cuidás de los cuchillos afilados”. Los cortes te vuelven muy consciente y preciso, te desacelera. &nbsp;</span></span></span></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><span><span><span>Me gusta pensar que la confianza viene de la mano de la fe también, no es sólo la capacidad de este equipo, su trayectoria y preparación si no, también, una cuota de azar que no depende de nosotros. Que está más allá de nuestro control, esta vida es un misterio, por eso como si fuera un mesías, Lionel nos dice: “Confíen”.&nbsp; &nbsp;</span></span></span></span></span></span></span></span></span></p>\r\n",
        position: 2,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/messi.jpeg.webp?itok=LRcgnj6K",
    urlSubCategory: "Squad",
    idSubject: 1,
  },
  {
    title: "Dónde podés hacer tus constelaciones familiares",
    field_title_pre: "Constelaciones familiares:",
    field_title: "5 lugares en donde podés ir a hacerlas",
    field_description:
      "A raíz de la serie de Netflix, Mi otra yo, constelar gana cada vez más adeptos. Te contamos dónde podés hacerlo",
    author: "Stefania Dommarco",
    field_content: [
      {
        field_content_title: null,
        field_content:
          '<p><span><span><span><span><em>Mi <a href="https://www.somosohlala.com/guia-ohlala/movida-cultural/mi-otra-yo-la-serie-turca-de-netflix-que-rompe-records-entre-las-audiencias-nid19082022">otra yo </a></em><a href="https://www.somosohlala.com/guia-ohlala/movida-cultural/mi-otra-yo-la-serie-turca-de-netflix-que-rompe-records-entre-las-audiencias-nid19082022">es, la serie turca de Netflix</a>&nbsp;es la gran responsable de que muchas personas tengan interés por constelar.&nbsp;</span></span></span></span><span><span><span><span><a href="https://www.somosohlala.com/calidad-de-vida/espiritualidad/constelaciones-familiares-de-que-se-trata-esta-disciplina-de-sanacion-nid07092022">Las constelaciones familiares son un método terapéutico especialmente indicado para ampliar la comprensión de las relaciones que se dan dentro de un sistema familiar</a>.&nbsp;</span></span></span></span><span><span><span><span>Nuestro árbol genealógico deja huellas y constelar se trata de encontrar el hilo que une el sufrimiento de una persona con hechos de la familia: un secreto, un conflicto no resuelto, algún episodio traumático, hechos del pasado pueden afectar nuestro presente.</span></span></span></span></p>\r\n\r\n<p><span><span><span><span>En esta nota te compartimos algunos <span lang="es"><span>lugares seguros para constelar, ya sea a través de sesiones individuales o grupales y con el acompañamiento o ayuda de un terapeuta o guía</span></span></span></span></span></span></p>\r\n',
        position: 1,
      },
      {
        field_content_title: "1. Tiiu Bolzmann",
        field_content:
          "<p><span><span><span><span>Pionera en Argentina y discípula directa de Bert Hellinger, trae este enfoque al país en el año 1999 y funda el Centro Bert Hellinger de Argentina, lugar desde el cual la formación se expande a otros países de Latinoamérica (Chile, Ecuador, Perú, Venezuela, Brasil, Uruguay, México y Colombia) y a España.&nbsp;</span></span></span></span><span><span><span><span>De esta formación egresaron facilitadores que fueron capacitados como docentes para impartir este conocimiento filosófico que en el transcurso del tiempo crearon sus propias formaciones en base a su experiencia con este trabajo y de sus recursos profesionales.&nbsp;</span></span></span></span><span><span><span><span>La Fundación Constelaciones Familiares fue creada por la mayoría de estos pioneros de las Constelaciones Familiares en Argentina, quienes colaboraron en el desarrollo de la formación y de la práctica, por lo que los estándares de calidad del trabajo con constelaciones familiares en esta comunidad está dada. </span></span></span></span></p>\r\n",
        position: 2,
      },
      {
        field_content_title: "2. ATHY",
        field_content:
          '<p><span><span><span><span>Espacio destinado a encuentros grupales ya sea para principiantes, alumnos de la formación o futuros facilitadores. Sara Gloria Levita es psicóloga, directora y docente en Athy. Al abordar esta terapia de manera grupal uno puede descubrirse a través del otro y junto al otro. "El grupo potencia el desarrollo personal y espiritual y las ocmpresiones que se van alcanzando a paritr de uno y a través de los otros", resaltan desde la entidad. </span></span></span></span></p>\r\n',
        position: 3,
      },
      {
        field_content_title: "3. Claudio Alberto González",
        field_content:
          '<p><span lang="es"><span><span>Sesiones grupales y presenciales. Es especialista en asistir, facilitar procesos de resolución y destrabe de conflictos de empresarios con la gran complejidad de tener a la familia dentro de la empresa aunque también trabaja con personas que están fuera de los que es una organización. </span></span></span></p>\r\n',
        position: 4,
      },
      {
        field_content_title: "4. Victoria Schvartzman",
        field_content:
          '<p><span><span><span><span>Espacio destinado a encuentros grupales ya sea para principiantes, alumnos de la formación o futuros facilitadores. Sara Gloria Levita es psicóloga, directora y docente en Athy. Al abordar esta terapia de manera grupal uno puede descubrirse a través del otro y junto al otro. "El grupo potencia el desarrollo personal y espiritual y las ocmpresiones que se van alcanzando a paritr de uno y a través de los otros", resaltan desde la entidad. </span></span></span></span></p>\r\n',
        position: 5,
      },
      {
        field_content_title: "5. Natalia Ciampone",
        field_content:
          '<p><span><span><span><span>Ofrece talleres presenciales y online y consultas individuales. "Como facilitadora en los Talleres Grupales de Constelaciones Familiares, brindo un espacio seguro, donde los consultantes puedan abordar la problemática,&nbsp; con una mirada sistémica desde el amor a su sistema familiar y asentimiento a los hechos del pasado", reza Natalia en su página web. </span></span></span></span></p>\r\n',
        position: 6,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/19_oct.jpg.webp?itok=roSl8Mjg",
    urlSubCategory: "Espiritualidad",
    idSubject: 1,
  },
  {
    title: "Horóscopo semanal signo por signo: ¿qué te dicen los astros?",
    field_title_pre: "Horóscopo signo por signo.",
    field_title: "¿Qué dice tu fuerza astral para esta semana?",
    field_description:
      "Esta semana entramos en el último mes del 2022. Por eso, nuestra astróloga Sol Lisdero nos da las claves para la semana del 28 de noviembre al 4 de diciembre.",
    author: "Sol Lisdero",
    field_content: [
      {
        field_content_title: null,
        field_content:
          "<p><span><span>El lunes estamos superproductivas gracias al trígono entre Marte y Saturno, mientras que el martes podemos tener una forma de comunicarnos más agresiva cuando Mercurio y Marte se opongan. Al otro día, <strong>ya llega el cuarto creciente en Piscis que nos invita a conectar con nuestra visión e intuición para avanzar con nuestros objetivos.</strong> Diciembre arranca con la oposición de Venus y Marte, poniendo a los amantes frente a frente y, para el fin de semana, Neptuno arranca directo, activando nuestra empatía.</span></span></p>\r\n",
        position: 1,
      },
      {
        field_content_title: "ARIES",
        field_content:
          "<p><span><span>Esta semana tu regente arranca con la buena influencia de Saturno, habilitándote mayor foco y capacidad de concretar tus tareas pendientes. Además, Marte se va a oponer a Mercurio el día martes y hay alerta de discusiones: es preferible retirarte a tiempo que arrepentirte de haber hecho reclamos hirientes. El miércoles, el cuarto creciente en Piscis te conecta con tu sensibilidad. <strong>Aunque te parezca lo contrario, puede que en tu sensibilidad y desahogo de tus emociones esté la clave para avanzar con tus objetivos de la Luna Nueva.</strong> El jueves, es Venus quien se opone a Marte despertando tus ganas de compartir de a dos, aunque haya cosas en las que hay que trabajar aún para poder quedarte en la realidad del vínculo (y no en tus fantasías). El viernes la Luna llega a tu signo conectándote con tu fuego vital gracias al trígono con el Sol. El sábado Neptuno se pone directo y reconectás con tu capacidad de servicio.</span></span></p>\r\n",
        position: 2,
      },
      {
        field_content_title: "TAURO",
        field_content:
          "<p><span><span>El lunes enfocate en ordenar tus finanzas y proyectos laborales, ya que el martes pueden saltar enojos con respecto a tus contratos con otros y, si se llega a dar esa conversación, mejor tener todo revisado para basarte en hechos. <strong>El miércoles, el cuarto creciente en Piscis te invita a sortear los obstáculos que se presenten dejándote guiar por tu intuición. Al otro día, tu regente, Venus, se opone a Marte poniendo de manifiesto tu situación en relaciones.</strong> El viernes ponele esfuerzo al trabajo nuevamente. El domingo la Luna llega a tu signo y también se da la cuadratura de Venus con Neptuno que acaba de salir de su retrogradación, lo que te indica que busques refugio y vuelques las desilusiones que puedan aparecer en autocuidado.</span></span></p>\r\n",
        position: 3,
      },
      {
        field_content_title: "GEMINIS",
        field_content:
          "<p><span><span>La semana inicia con novedades sobre viajes y estudios. <strong>El martes, tu regente, Mercurio, hace oposición a Marte retrógrado en tu signo. Tené en cuenta que vas a estar mucho más impulsiva en tu forma de comunicarte. </strong>El miércoles es un día para redoblar la apuesta en lo laboral, teniendo a tu sensibilidad como aliada. El jueves Neptuno hace una cuadratura a Mercurio trayendo algún tipo de desilusión o confusión en la comunicación con otros. El viernes y el sábado son buenos días para actividades grupales donde te sientas útil. El domingo conectá con tu intuición para saber qué camino seguir.</span></span></p>\r\n",
        position: 4,
      },
      {
        field_content_title: "CANCER",
        field_content:
          "<p><span><span>Iniciás la semana con energía y vitalidad y una chispa de cambio que juega a tu favor. El martes estás lista para trabajar por tus objetivos financieros, solo prestá atención a terminar verbalizando los enojos ajenos. Discriminá cuáles emociones son genuinamente tuyas y cuáles no, para no entrar en conflictos innecesarios. El miércoles es el cuarto creciente en Piscis y tu fuerza emocional se hace sentir. Apoyate en tu optimismo para salir adelante. El jueves, Venus se opone a Marte llevando el foco a tus vínculos y sus reclamos que pueden ser inesperados. <strong>El viernes y el sábado son buenos días para trabajar en tus proyectos personales, laborales y en la visión a futuro. El domingo conectás con tu capacidad de transformación.</strong></span></span></p>\r\n",
        position: 5,
      },
      {
        field_content_title: "LEO",
        field_content:
          "<p><span><span>Comenzás la semana encendida y buscando mayor conexión con tu pareja. El martes, la oposición de Mercurio y Marte puede afectar tus nervios cuando tengas con enfrentar tus deseos personales con los del grupo. <strong>El miércoles, la Luna y el Sol, tu regente, hacen una cuadratura y tu mente y tu corazón van por caminos diferentes. La clave es conectar con tu sensibilidad e intuición.</strong> El jueves la oposición ahora de Venus y Marte trae temas vinculares al frente del escenario. El viernes recuperás el foco y la armonía interior. El sábado Neptuno se pone directo y llega un influjo de energía empática y muy buena para la inspiración artística. El domingo es momento de reflexionar sobre aquellos lugares que dejas sin resolver para negar la realidad.</span></span></p>\r\n",
        position: 6,
      },
      {
        field_content_title: "VIRGO",
        field_content:
          "<p><span><span>El lunes enfocate en tus rutinas y en organizar tu agenda. El martes, tu regente, Mercurio, se opone a Marte trayendo posibles discusiones acaloradas. Además, la Luna ya llega a Piscis activando tu sector de pareja y sociedades hasta el jueves. Además, tu regente también recibe la cuadratura de Neptuno, haciendo que ser concreta y racional sea más dificultoso. <strong>El universo te estará mostrando donde fallan las promesas de otros y/o donde no hay transparencia en sus palabras. Mejor callar y observar. </strong>Dada la oposición de Marte y Venus, puede que haya discrepancias entre tu trabajo y tu familia. El sábado Neptuno se pone directo en tu zona de pareja, habilitando mayor conexión y perdón. El domingo una creencia debe caer para darle lugar a otra que te permita mayor abundancia.</span></span></p>\r\n",
        position: 7,
      },
      {
        field_content_title: "LIBRA",
        field_content:
          "<p><span><span><strong>Arrancás la semana con más foco y alegría, conectada a tus metas y propósito. El martes estate atenta a engancharte en enojos ajenos y aguantate las ganas de tener razón… salvo que quieras ir al choque, cosa que sabemos no suele ser lo que más disfrutás hacer. </strong>El miércoles, los obstáculos vienen por el lado de las rutinas, hacé un esfuerzo por sostener lo que te hace bien fluyendo con lo que trae el universo. El jueves tu regente, Venus, se planta frente a Marte y se hace notar. Puede ser incómodo, pero también despertar esa chispa seductora. El viernes tu atención se va a concretar temas laborales, mientras que la Luna transita tu zona de pareja y sociedades. El sábado Neptuno despierta de su retrogradación conectándote con tu sensibilidad y hace cuadratura con tu regente quitando velos para que puedas ver con mayor claridad que está pasando en tus vínculos.</span></span></p>\r\n",
        position: 8,
      },
      {
        field_content_title: "ESCORPIO",
        field_content:
          "<p><span><span><strong>En esta temporada Sagitario poné el énfasis en trabajar en tu amor propio y tus finanzas, sobre todo con el cuarto creciente en Piscis esta semana que te invita a apoyarte en tu expresión más genuina para lograr tus objetivos de la Luna Nueva.</strong> El lunes aprovechá el viento a favor para organizar tus números. El martes, la oposición de Mercurio a Marte te deja sin palabras y es mejor que así sea, ya que pueden surgir malentendidos con respecto a contratos y acuerdos con otros. Buscá una opinión realista y contenedora en tu círculo íntimo. El jueves Venus se opone a Marte, tu antiguo regente, y se enciende la chispa en tus vínculos. Si es una chispa que te alegra o una que te hace ver las cosas de forma diferente, se rebelará los días siguientes. Aprovechá para expresar tus emociones a través del arte y tus proyectos creativos. El sábado Neptuno retoma su camino directo y aumenta tu pasión y conexión empática con otros. El domingo, la Luna llega a tu zona de pareja y socios y es hora de correr ese velo para ver qué hay detrás de tus fantasías.</span></span></p>\r\n",
        position: 9,
      },
      {
        field_content_title: "SAGITARIO",
        field_content:
          "<p><span><span><strong>Esta es tu semana para redoblar el esfuerzo y accionar en pos de tus objetivos de la Luna Nueva, apoyándote en tu intuición y creatividad. </strong>El lunes concéntrate en resolver tareas pendientes. El martes, Marte, el dios de la guerra, se opone a Mercurio, el dios de la comunicación: elegí bien tus batallas y por sobre todas las cosas no digas nada que no sientas, ya que posiblemente te arrepientas después. El jueves es Venus, la diosa del amor, quien se opone también a Marte y se hace notar esa tensión que, en este caso, puede devenir en tensión sexual. El viernes estás inspirada y es un día muy positivo para trabajar en tus proyectos creativos. Además, al día siguiente, Neptuno se pone directo en tu zona de hogar y familia, trayendo sanación y mayor empatía en ese ámbito de tu vida, pero, al otro día, cuadra a Venus mostrándote un lado que desconocías de tus afectos. <strong>Recordá que la desilusión es directamente proporcional a la ilusión que te hiciste previamente.</strong></span></span></p>\r\n",
        position: 10,
      },
      {
        field_content_title: "CAPRICORNIO",
        field_content:
          "<p><span><span>Iniciás la semana con más energía y foco que de costumbre gracias al trígono de Marte a tu regente, Saturno. El martes, puede haber discusiones con tus compañeros de trabajo: mantené la calma para evitar malentendidos. <strong>El cuarto creciente del día miércoles te presenta a tu intuición como tu aliada, ¿qué tal? ¿Te animás a confiar? Además, Mercurio hace un trígono a tu regente y eso te brinda mayor capacidad de bajar tus ideas a tierra.</strong> El jueves vuelve la tensión en tu día a día: ¿tu deseo y tu bienestar van de la mano? El sábado es un lindo día para disfrutar de la compañía de tus seres queridos y conectar desde el corazón. El sábado dejá fluir tus emociones hasta que se disipe la niebla.</span></span></p>\r\n",
        position: 11,
      },
      {
        field_content_title: "ACUARIO",
        field_content:
          "<p><span><span>El lunes, tu creatividad está al servicio de tus proyectos. <strong>Además, la Luna está en tu signo y se siente bien. El martes, Mercurio y Marte se enfrentan poniendo de manifiesto tensiones en tus grupos, sin embargo, estás plantada en tus necesidades con una mirada realista y esto te permite mantener la calma. </strong>El miércoles, el cuarto creciente te invita a soltar el deber ser para concretar tus objetivos de la Luna Nueva en Sagitario. El jueves, tu regente hace un sextil a la Luna conectándote con tus emociones, lo cual te permite estar atenta a la tensión entre Marte y Venus que te invita a ver tus relaciones de cerca. El sábado Neptuno, el regente de Piscis, se pone directo y activa tu economía. El domingo es necesario que te lleves esa desilusión para que puedas cambiar tu relación con el dinero y con tu valor.</span></span></p>\r\n",
        position: 12,
      },
      {
        field_content_title: "PISCIS",
        field_content:
          "<p><span><span>El lunes no desperdicies el foco y eficiencia que trae el clima astral, ya que la temporada sagitariana te invita a enfocarte en tu trabajo. <strong>El martes a la noche, la Luna ya llega a tu signo conectándote con tus necesidades básicas. Aprovechá para tomar un respiro antes de que empiece la vorágine de diciembre a pesar de la presión que puedas sentir con el cuarto creciente en tu signo. </strong>El jueves Venus se opone a Marte y es hora de regular ese eje entre tu profesión y tu hogar. Además, tu regente cuadra a Mercurio y la comunicación asertiva se toma vacaciones., evitá confusiones guardando silencio cuando la situación no sea clara. El viernes, el foco se va a tus finanzas. El sábado, ¡tu regente se pone directo en tu signo! Y, sumado a que Júpiter está también directo en tu signo, diciembre es un mes supervital para las piscianas. Sin embargo, el domingo Neptuno cuadra a Venus trayendo cierta incomodidad. Para tocar el cielo con las manos, hay que dejar ir esas ilusiones.</span></span></p>\r\n",
        position: 13,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/astros-principal_2.png.webp?itok=gv3jPBNa",
    urlSubCategory: "Astrologia",
    idSubject: 1,
  },
  {
    title: "Détox en la piel: ¿qué son y para qué sirven los vahos faciales?",
    field_title_pre: "Détox en la piel: ",
    field_title: "¿qué son y para qué sirven los vahos faciales?",
    field_description:
      "En épocas de detoxificarnos, repensar nuestros hábitos e intentar terminar el año apuntando al equilibrio, estamos más abiertas a probar cosas nuevas. ",
    author: "Mariana Copland",
    field_content: [
      {
        field_content_title: null,
        field_content:
          "<p>Tomar más agua, comer más fruta, hacer una caminata diaria para oxigenarnos, pero ¿la piel?</p>\r\n\r\n<p>Además del protector solar y la rutina diaria de limpieza, ¿cómo podemos detoxificarla? Así como el sauna como práctica tiene múltiples beneficios para la piel, ahora está creciendo la popularidad de los vahos faciales. Y es que<strong> limpiar la piel con vapor es una práctica muy antigua y que consigue resultados que quedan a la vista: piel luminosa y saludable en pocos pasos.</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n",
        position: 1,
      },
      {
        field_content_title: "¿Qué son los vahos faciales? ",
        field_content:
          "<p>Es una práctica que por medio de<strong> la exposición de la cara a vapores calientes nos brindan un montón de beneficios:</strong></p>\r\n\r\n<p>- Desintoxicación de ácidos y toxinas</p>\r\n\r\n<p>- Equilibra del metabolismo</p>\r\n\r\n<p>- Mejora el funcionamiento neurovegetativo</p>\r\n\r\n<p>- Previene los trastornos de las vías respiratorias, asma y sinusitis</p>\r\n\r\n<p>- Estabiliza la presión arterial Limpia profundamente y suaviza la piel</p>\r\n\r\n<p>- Calma dolores musculares, artritis, artrosis, reumas y contracturas</p>\r\n\r\n<p>- Activa la vasodilatación</p>\r\n",
        position: 2,
      },
      {
        field_content_title: "¿Por qué sucede todo esto?",
        field_content:
          "<p>Porque cuando en un ambiente el contenido de vapor es superior a la cantidad de agua presente en la epidermis, sobre la piel se forma una capa de humedad que aporta calor al cuerpo favoreciendo la circulación sanguínea linfática, diluye las toxinas y ayuda a su eliminación.</p>\r\n\r\n<p><strong>Si además sumás los beneficios de plantas y hierbas a ese vapor, tu piel va a absorber las propiedades que las plantas lentamente desprenden</strong>. Entonces, lo importante si querés probar estos vahos faciales es dar con las hierbas que van a contribuir al proceso de detoxificación (si investigar un poco, vas a descubrir que hay otras hubieras que tienen efectos antioxidantes, tensores, etc).</p>\r\n",
        position: 3,
      },
      {
        field_content_title:
          "Las hierbas recomendadas para un proceso de detoxificación facial:",
        field_content:
          "<p>Bardana: una de las propiedades de la bardana más destacadas de esta planta es que favorece la purificación de la sangre y la eliminación de toxinas.</p>\r\n </br> <p>Tomillo: tiene propiedades antibacterianas, antisépticas y antifúngicas que resultan muy útiles para prevenir el acné y los comedones, dejando una piel mucho más limpia y luminosa.</p>\r\n </br> <p><span><span><span><span><span><span>Te verde:&nbsp; es un poderoso antiinflamatorio de la piel.</span></span></span></span></span></span></p>\r\n </br> <p>Hammaelis: es buena para desinflamar rojeces e inflamaciones acneicas.</p>\r\n </br> <p>Albahaca: su aceite contribuye a reafirmar la piel, darle elasticidad y suavidad.</p>\r\n </br> <p>Salvia: se considera una de las plantas medicinales con más propiedades curativas y protectoras para la salud. Ideal para mejorar el aspecto de manchas, fotoenvejecimiento, tirantez, deshidratación, acné, dermatitis y psoriasis.</p>\r\n </br> <p>Lavanda: es una planta que posee propiedades tonificantes, equilibrantes y relajantes. Se utiliza mucho para tratar pieles grasas. Además, ayuda a matar las bacterias de la piel, la limpia y cura sin obstruir los poros. Puedes aplicar lavanda por las noches antes de dormir. Sobre la piel, actúa como un tónico hidratante y antinflamatorio.</p>\r\n",
        position: 4,
      },
      {
        field_content_title: "Paso a paso para hacer tu vaho facial",
        field_content:
          "<p><span><span><span><span><span><span>Elegí las hierbas que vayas a usar</span></span></span></span></span></span></p>\r\n </br> <p><span><span><span><span><span><span>Cocinalas a fuego suave en una olla con unos 750/1000 ml de agua (750/1000ml)</span></span></span></span></span></span></p>\r\n </br> <p><span><span><span><span><span><span>Lavá bien tu cara</span></span></span></span></span></span></p>\r\n </br> <p><span><span><span><span><span><span>Una vez con la cara limpia y seca, y cuando rompió el hervor, sacá la olla del fuego y cubrite con una toalla la cabeza dejando tu cara asomada a la olla.</span></span></span></span></span></span></p>\r\n </br> <p><span><span><span><span><span><span>Esperá unos minutos y de ser necesario quitá la cabeza un ratito repetí el proceso.</span></span></span></span></span></span></p>\r\n </br> <p><span><span><span><span><span><span>Cuando terminás, volvé a lavarte la cara con agua fría (podés agregarle algunos hielos) para que se cierren los poros que pueden haberse dilatado con el calor y para activar la circulación.</span></span></span></span></span></span></p>\r\n",
        position: 5,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/gettyimages-1215530452.jpeg.webp?itok=aHHXvkMW",
    urlSubCategory: "Belleza",
    idSubject: 1,
  },
  {
    title: "Citas sin alcohol: de qué se tratan y por qué son tendencia",
    field_title_pre: "Citas sin alcohol.",
    field_title: "De qué se tratan y por qué son tendencia",
    field_description:
      "Un estudio de Bumble comprobó que 1 de cada 3 personas opta por “citas secas” o “dry dating” y que más de la mitad prioriza la disponibilidad emocional sobre otros parámetros. ",
    author: "Laura Gambale",
    field_content: [
      {
        field_content_title: null,
        field_content:
          '<p><span><span><span><span lang="ES-AR"><span><span><a href="https://www.somosohlala.com/calidad-de-vida/salud-mental/el-fin-del-alcohol-conoce-a-la-nueva-generacion-que-le-dice-chau-a-las-barras-nid29062022">Conocerse con otra persona sin la euforia que nos puede provocar el alcohol es una de las nuevas tendencias</a> en el mundo de las citas. <strong>Así lo demuestra un reciente estudio realizado por <a href="https://bumble.com/es/">Bumble</a>, la aplicación número uno en citas, que una de cada tres personas dice elegir “citas sin alcohol” o “dry dating” en Reino Unido. ¿Qué pasa en otros lugares?</strong></span></span></span></span></span></span></p>\r\n',
        position: 1,
      },
      {
        field_content_title: "Dry dating: ¿cuáles son los beneficios?",
        field_content:
          '<p><span><span><span><span lang="ES-AR"><span><span>Sabemos que <strong>el alcohol es una de las sustancias legales típicas que “ayudan” a desinhibirnos </strong>y dejar atrás ciertas vergüenzas que nos ponen incómodas a la hora de encontrarnos con otra persona a quien, a priori, queremos agradar. Sin embargo, <strong>entregarnos a un diálogo más real, aunque sea menos ocurrente o fascinante, tiene un atractivo extra que hoy marca tendencia. </strong></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span lang="ES-AR"><span><span>Es probable que, en la gran apuesta por esta nueva y saludable modalidad se apunte a mostrarnos tal cual somos al momento de conocer a alguien: con “menos” herramientas para hacer chistes o sin grandes ocurrencias para narrar aspectos de nuestra historia personal, pero con encuentros más reales y probablemente más vulnerables, un aspecto que ya no nos aleja de las ganas de conocer a otro.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span lang="ES-AR"><span><span>En ese sentido,<strong> Alba Duran, Marketing Manager de Bumble en España</strong>, destacó que allá este verano fueron muchos&nbsp;los usuarios de la app que "buscaron descubrir nuevas oportunidades y nuevas formas de conocer gente":&nbsp;</span></span></span><strong>Entre las nuevas maneras de conocerse, Alba destaca la elección en expansión de las citas sin alcohol.</strong></span></span></span></p>\r\n',
        position: 2,
      },
      {
        field_content_title: "Cambios pospandemia",
        field_content:
          '<p><span><span><span><span lang="ES-AR"><span><span>Los cambios provocados por la pandemia en los últimos dos años, motivaron a que cada vez a más usuarios opten por buscar citas más conscientes y saludables donde no esté incluido el alcohol. Así lo indicó el estudio antes citado, donde<strong> el 34% de los encuestados confirmaron que&nbsp;ahora son más propensos a optar por “cita 0% alcohol” que antes de la pandemia. La cifra se eleva aún más entre los usuarios de 18 a 32 años.</strong></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span lang="ES-AR"><span><span>El mismo estudio concluyó que<strong> el 62% de la población cree que es más probable que se acceda a “conexiones más profundas y genuinas” en una cita sin alcohol</strong>. Además, 1 de cada 4 usuarios sostiene que las apariencias son ahora menos importantes para ellos que en el pasado</span></span></span></span></span></span></p>\r\n',
        position: 3,
      },
      {
        field_content_title: "Conectarse a través de un hobby",
        field_content:
          '<p><span><span><span><span lang="ES-AR"><span><span>Desde 2020 a la actualidad, <strong>más de la mitad de los usuarios (54%) adoptaron nuevos pasatiempos y adquirieron nuevas habilidades.</strong> Desde Bumble, informaron que actividades como pueden ser quedar en un punto de encuentro de alimentación saludable, o bien juntarse a practicar un deporte o un hobby tiene cada vez más lugar a la hora de formalizar una cita. </span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span lang="ES-AR"><span><span>“Ahora, <strong>1 de cada 4 encuestados planea citas que giran en torno a sus hobbies</strong>: se trata de una forma fácil de repetir una cita y una gran manera de conectar por medio de intereses compartidos”, indicaron desde la marca.</span></span></span></span></span></span></p>\r\n',
        position: 4,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-10/citas_portada.jpg.webp?itok=tupYN1-_",
    urlSubCategory: "Relaciones",
    idSubject: 1,
  },
  {
    title: "Seguro de viaje: ¿qué tener en cuenta antes de contratarlo?",
    field_title_pre: "Seguro de viaje.",
    field_title: "¿Qué tener en cuenta antes de contratarlo?",
    field_description:
      "Si vas a viajar al exterior es imprescindible que contrates un seguro de viaje o de asistencia al viajero. ¿Qué tener en cuenta para contratar un buen seguro y no encontrarte con sorpresas y gastos imprevistos? Te lo contamos en esta nota.",
    author: "Agustina López",
    field_content: [
      {
        field_content_title: null,
        field_content:
          '<p><span><span><span><strong>Si estás pensando en viajar al exterior, uno de los imprescindibles es el seguro de viaje. </strong>Se trata de un producto asegurador que te permite viajar protegido para poder disfrutar sin miedos y con las garantías de tener cobertura médica por si algo te ocurre. Es importante porque<strong> un seguro de viaje te ayudará a evitar gastos médicos o farmacéuticos que suelen ser muy altos en algunos países,<a href="https://www.somosohlala.com/guia-ohlala/viajes/seguro-de-viaje-para-entrar-a-estados-unidos-que-se-necesita-nid01112022"> </a></strong><a href="https://www.somosohlala.com/guia-ohlala/viajes/seguro-de-viaje-para-entrar-a-estados-unidos-que-se-necesita-nid01112022">como Estados Unidos, </a>por ejemplo. Hay lugares en los que la cobertura es obligatoria para poder ingresar.</span></span></span></p>\r\n\r\n<p><span><span><span>Pero,<strong> ¿cómo nos aseguramos de contratar un buen seguro, qué debemos tener en cuenta? </strong>En esta nota, te detallamos algunos puntos a considerar.</span></span></span></p>\r\n',
        position: 1,
      },
      {
        field_content_title: null,
        field_content:
          "<p><span><span><span>Conocer los requerimientos del destino al que se planea viajar. Por ejemplo, en Europa hay que contar con una asistencia mínima de 30 mil euros, mientras que en la Argentina no se especifica monto mínimo. </span></span></span></p>\r\n </br> <p><span><span><span>Antes de contratar es necesario conocer las fechas en las que se estará viajando: el día de ida y el de regreso. Si no se saben con exactitud, hay que asegurarse de que la asistencia escogida posea fechas flexibles.</span></span></span></p>\r\n </br> <p><span><span><span>No todos los servicios de asistencia al viajero son iguales. Existen particularidades, en cada viaje y en cada viajero, que hacen importantísimo considerar varios factores. Por eso, hay que investigar todas las opciones en profundidad.</span></span></span></p>\r\n </br> <p><span><span><span>Averiguar si, en caso de necesitar asistencia, la empresa elegida se encarga de todos los pagos o si hay que adelantar el dinero y luego se reembolsarán los gastos surgidos.</span></span></span></p>\r\n </br> <p><span><span><span>Analizar el límite del seguro para los gastos médicos, de hospitalización y de repatriación.</span></span></span></p>\r\n </br> <p><span><span><span>Pensar en si es necesario contratar adicionales o si el plan seleccionado cubre lo que se precisa dado que en algunos casos no se incluye la pérdida de equipaje y/u objetos personales.</span></span></span></p>\r\n",
        position: 2,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-10/viajar-cybermonday.jpg.webp?itok=RraYyboe",
    urlSubCategory: "Finanzas",
    idSubject: 1,
  },
  {
    title: "Calabaza: 5 platos con calabaza, ideales para comer en verano",
    field_title_pre: "Calabaza.",
    field_title: "5 platos con calabaza, ideales para comer en verano",
    field_description:
      "Si sos fan de la calabaza y te dan ganas de comerla todo el año, acá 7 platos ideales para disfrutar esta verdura durante el verano.",
    author: "Sole Venesio",
    field_content: [
      {
        field_content_title: null,
        field_content:
          "<p><strong>Con muchas variedades disponibles, la calabaza es una verdura que normalmente conectamos con el invierno</strong>. Sin embargo -también disponible durante la primavera y el verano- existen muchísimos platos súper frescos en donde esta verdura hace su aporte de color, sabor y textura.&nbsp; Hicimos un pequeño repaso de los menús de nuestros restaurantes favoritos y elegimos siete platos que creemos pueden convertirse en los preferidos de todo amante de la calabaza.</p>\r\n",
        position: 1,
      },
      {
        field_content_title: "1. Calabaza Hasselback",
        field_content:
          '<p><span><span><span><span><span><span>Enero, el restaurante en donde podés probar todos los platos riquísimos del chef Diego Hernández Olave, podés encontrar su c</span></span></span></span></span></span><span><span><span><span><span><span>alabaza hasselback. Un plato elaborado con calabaza anco al horno cortada como si fuese acordeón, y acompañada de manteca de coco especiada, aderezo de zanahoria, almendras tostadas y una fresca gremolata de pistachos.</span></span></span></span></span></span><span><span><span><span><span><span>&nbsp;<strong>Están en&nbsp;</strong></span></span></span></span></span></span><strong><span><span><span><span><span><span>Av. Rafael Obligado 7180 (Costanera) y podés seguilos en Instagram en:</span></span></span></span></span></span><a href="https://instagram.com/enerocostanera"><span><span><span><span><span><u><span><span> @enerocostanera</span></span></u></span></span></span></span></span></a></strong></p>\r\n',
        position: 2,
      },
      {
        field_content_title: "2. Crepes Veggie",
        field_content:
          '<p>Si conocés&nbsp;<span><span><span><span><span><span>París Crepas sabés que tienen muchísimas variedades de sabores y su versión veggie, está rellena de calabaza grillada, tomates asados, hojas de espinacas y queso dambo. <strong>Están en&nbsp;</strong></span></span></span></span></span></span><strong><span><span><span><span><span><span>Av. Cabildo 2602 (Belgrano), Gurruchaga 1686 (Palermo Soho) José María Moreno 120 (Caballito) Av. de Mayo 359 (Ramos Mejía) y podés seguirlos en Instagram en:&nbsp;</span></span></span></span></span></span><a href="https://www.instagram.com/pariscrepas/?hl=es"><span><span><span><span><span><u><span><span>@pariscrepas</span></span></u></span></span></span></span></span></a><span><span><span><span><span><span>.</span></span></span></span></span></span></strong></p>\r\n',
        position: 3,
      },
      {
        field_content_title: "3. Ensalada La Drago",
        field_content:
          '<p>Si te copa la gastronomía norteamericana y la estética de los 80 y los 90, entonces Rocky se puede convertir en uno de tus lugares favoritos. En su menú van a encontrar la ensalada La Drago&nbsp;<span><span><span><span><span><span>que lleva calabaza asada, queso en cubos, huevo, girasol acaramelado, mix de verdes y un dressing de mostaza miel y aceto: La Drago. Es una opción perfecta para disfrutar tanto al mediodía como a la noche y para acompañar con su coctelería de autor, cervezas artesanales y tiradas.&nbsp;</span></span></span></span></span></span><strong><span><span><span><span><span><span>Están en: Av. de Mayo 323 (Ramos Mejía) y podés seguirlos en Instagram:</span></span></span></span></span></span><a href="https://www.instagram.com/rockyrestaurantbar"><span><span><span><span><span><u><span><span> @rockyrestaurantbar</span></span></u></span></span></span></span></span></a></strong></p>\r\n',
        position: 4,
      },
      {
        field_content_title: "4. Zapallo asado",
        field_content:
          '<p><span><span><span><span><span><span>Casi como si se tratara de un <em>speakeasy</em>, el encanto de Rufino se descubre en el subsuelo del hotel boutique Mío Buenos Aires de Recoleta. Aquí, el restaurante ofrece unos especiales gajos de zapallo asados que primero marinan con ajos asados, semillas de hinojo, romero fresco y pimienta negra en grano por un mínimo de dos horas, luego asan al horno y por último, coronan con queso feta fresco.&nbsp;</span></span></span></span></span></span><strong><span><span><span><span><span><span>Están en Av. Pres. Manuel Quintana 465, Subsuelo del Hotel Mío Buenos Aires (Recoleta) y podés seguirlos en Instagram en:</span></span></span></span></span></span><a href="https://www.instagram.com/rufinoarg/"><span><span><span><span><span><u><span><span> @rufinoarg</span></span></u></span></span></span></span></span></a>.</strong></p>\r\n',
        position: 5,
      },
      {
        field_content_title:
          "5. Y si querés algo dulce, the amazing pumpKing cake",
        field_content:
          '<p><span><span><span><span><span><span>Quienes busquen una torta que combine frescura, calidad y originalidad, tienen que ir a Moshu y probar su <em>the amazing pumpking cake</em>, una creación donde el zapallo es protagonista. Se trata de un bizcochuelo especiado a base de zapallo cabutia con aceite de oliva, semillas tostadas de girasol y sésamo, relleno con un <em>cream cheese</em> <em>frosting </em>de cabutia especiado con una capa de puré de zapallo y coronado con finas láminas de queso parmesano.&nbsp;</span></span></span></span></span></span><strong><span><span><span><span><span><span>Están en Moldes 3802 (Saavedra) y en Guatemala 4570 (Palermo) y podés seguirlos en Instagram en:&nbsp;</span></span></span></span></span></span><a href="https://www.instagram.com/compartimoshu/"><span><span><span><span><span><u><span><span>@compartimosmoshu</span></span></u></span></span></span></span></span></a>.</strong></p>\r\n\r\n<p>&nbsp;</p>\r\n',
        position: 6,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/rocky_2.jpg.webp?itok=KH_Ci83x",
    urlSubCategory: "Recorridos",
    idSubject: 1,
  },
  {
    title: "Gigi Hadid y las zapatillas adidas x Gucci que ya marcan tendencia",
    field_title_pre: "Gigi Hadid",
    field_title: "y las zapatillas adidas x Gucci que ya marcan tendencia",
    field_description:
      "La modelo paseó muy campante con un look casual y sorprendió a sus fanáticos con un detalle clave... y nada económico.",
    author: "Mariana Copland",
    field_content: [
      {
        field_content_title: null,
        field_content:
          "<p>Si sos fan de las zapatillas para sumar a cualquier <em>look </em>esta nota va a ser un problema ¿Por qué? Simple: las adidas x Gucci de Gigi Hadid son para volverse locas. La modelo salió de paseo con un <em>look </em>casual, total black pero el detalle clave de su <em>outfit </em>fueron estas <em>sneakers </em>que <strong>además de clásicas son muy ohlaleras: violeta, negro y verde, una combinación infalible.</strong></p>\r\n",
        position: 1,
      },
      {
        field_content_title: null,
        field_content:
          "<p>Las <strong>Gazelle</strong>, que son un modelo icónico de la marca de las 3 rayas, llevan años recorriendo calles de todo el mundo, no sólo por su comodidad sino porque combinan con cualquier prenda: polleras, vestidos, pantalones, conjuntos sastreros. Lo que quieras usar va bien con estas pequeñas maravillas. Y si sos Gigi Hadid que puede tener este par que sale (no te pongas mal) 650 euros, ¡el look está completísimo! El modelo es parte de la colaboración que adidas hizo con Gucci, y que matchea los 80 y los 90 en no solo desde el diseño y el color sino también desde el monograma GG que fue furor en aquellos tiempos y que tiene por esta época un revival impresionante.</p>\r\n",
        position: 2,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/gettyimages-1422965067.jpg.webp?itok=Q-9K2l-f",
    urlSubCategory: "Moda",
    idSubject: 1,
  },
  {
    title: "Modo supervivencia: 7 herramientas para volver a tomar el control",
    field_title_pre: "Salud mental.",
    field_title:
      "Por qué es fundamental conocer la diferencia entre depresión, ataques de pánico y de ansiedad",
    field_description:
      "Cuando sentimos que el agua nos llega hasta el cuello, es momento de frenar y preguntarnos qué está pasando. Te compartimos 12 herramientas para volver a tomar el control de tu día a día.",
    author: "Sole Venesio",
    field_content: [
      {
        field_content_title: null,
        field_content:
          '<p>Diciembre tiene todos los elementos para que nosotros, en el día a día, sintamos que estamos en piloto automático. Resolver lo del día, sin pensar demasiado en lo que va a suceder con nuestra agenda y casi sin notar que las horas pasan y nuestra lista de "cosas para hacer" sigue larguísima.<a href="https://www.somosohlala.com/calidad-de-vida/salud-mental/modo-supervivencia-7-cosas-que-te-van-a-ayudar-a-reconocerlo-nid10112022"> Llamado "modo supervivencia"</a>, básicamente se trata de&nbsp;la sensanción de que apenas logramos atravesar el día, sin la posibilidad de mirar hacia adelante... aun cuando nos refiramos al futuro cercano.</p>\r\n\r\n<p><a href="https://www.somosohlala.com/calidad-de-vida/salud-mental/modo-supervivencia-7-cosas-que-te-van-a-ayudar-a-reconocerlo-nid10112022">Mientras que ya te compartimos algunas herramientas para identificar si estás en modo supervivencia</a>, una vez que lo haces: ¿cómo podés salir de eso y volver a retomar el control de tu vida?</p>\r\n',
        position: 1,
      },
      {
        field_content_title: null,
        field_content:
          '<p><strong>Una vez que hiciste el autoexamen conciente de qué te está pasando, es fundamental no caer en la negación, sino reconocerlo</strong>. Es súper importante entender que vivir así no es saludable, que tiene un impacto real en nosotros y en nuestras relaciones (con nuestra familia, con los amigos, con la pareja, con el trabajo) y -sobre todo- que salir de él no va a ser algo que suceda de un día al otro, sino un proceso.</p>\r\n </br> <p><strong>Hablá abiertamente de tus errores y correte del lugar de "Hice lo que pude"</strong>. Cuando estás cansado, estresado, angustiado y con los ojos puestos en mil focos, es muy fácil cometer errores ¿no? Por eso es muy importante frenar, reconocer los errores que se cometieron e idear un plan de acción: cuál es el estatus de las tareas pendientes, cuál es su prioridad, quiénes pueden ayudarte a resolverlas, qué herramientas necesitas para poder trabajarlas de manera más saludable.</p>\r\n </br> <p><strong>Creá el espacio para perdonarte a vos mismo</strong>. Llegar al modo supervivencia puede ser tanto por fallas personales como del sistema del que somos parte (por ejemplo, equipos laborales que no funcionan bien ¿te suena?). Por eso otra de las cosas importantes a hacer es perdonarse a uno mismo, tanto el hecho de estar en este modo como los errores que puede haber cometido. Quizá suene a cliché, pero es clave entender que errar es humano y es muy importante no quedarse en eso, sino habilitar el espacio para aprender de los errores y seguir hacia delante.</p>\r\n </br> <p><strong>Aprendé a pedir ayuda</strong>: si bien tendemos al "Yo puedo con todo" o "Me lleva menos tiempo hacerlo yo, que explicarle a alguien más" y muchas veces nos sentimos expuestos cuando pedimos ayuda, hacerlo es la única manera de salir del modo de supervivencia. Ante esto es muy importante ser capaz de construir una red de contención estable, con buenos colaboradores que puedan realmente resolver y -sobre todo- que te permitan trabajar en tener mejores herramientas para lidiar con situaciones como el modo de supervivencia.</p>\r\n </br> <p><strong>Aprendé la lección</strong>: en todo este camino de crecimiento y autoconocimiento, parte de salir del modo supervivencia es reconocer los síntomas antes de que la situación se vuelva rutina. Dar un paso hacia atrás y preguntarse: qué salió mal, qué puedo ver desde la distancia, qué puedo aprender de todo esto, cómo llegué hasta acá, ¿puedo reconocer eventos que me llevaron a esto?, qué cosas podría haber hecho diferente... es parte del proceso de sanación.</p>\r\n </br> <p><strong>Hacé un nuevo plan</strong>: todo lo aprendido y vivido nos tiene que servir, sobre todo, para tener un nuevo plan. Aunque el nuevo plan no debería parecerse al anterior (¿por qué repetir una fórmula que falló?), es muy importante poder tomarse el tiempo y diagramar desde el "acá estoy" hasta el "acá quiero llegar".</p>\r\n </br> <p><strong>Accioná</strong>: más allá del análisis y la reflexión, algo que es imposible de evitar es tomar acción sobre lo que está pasando. Si llegaste a estar en modo supervivencia, esto significa que hay cosas que tienen que cambiar. Desde la manera en que nos organizamos o el tipo de ayuda que necesitamos, para pensar también en qué actitud tenemos nosotros frente a las nuevas tareas y cómo manejamos las prioridades.</p>\r\n',
        position: 2,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/gettyimages-521096340.jpg.webp?itok=KxV0IaP2",
    urlSubCategory: "Salud_Mental",
    idSubject: 1,
  },
  {
    title:
      "The Weeknd en Argentina: lo que tenés que saber sobre su visita a Buenos Aires",
    field_title_pre: "¡Llega a Argentina!",
    field_title:
      "Lo que tenés que saber sobre el show de The Weeknd en Buenos Aires",
    field_description:
      "El calendario de shows de 2023 se pone cada vez más interesante y, ahora, The Weeknd confirmó su visita a Buenos Aires.",
    author: "Mariana Copland",
    field_content: [
      {
        field_content_title: null,
        field_content:
          '<p>Como si fuera un premio por todo lo que perdimos durante los dos años de la pandemia, 2022 fue un verdadero lujo de recitales en vivo y visitas de artistas internacionales: <a href="https://www.somosohlala.com/actualidad/entretenimiento/coldplay-en-argentina-como-fue-el-segundo-show-de-la-banda-en-buenos-aires-nid27102022">desde el bombazo de Coldplay</a>, para pasar por&nbsp;<a href="https://www.somosohlala.com/actualidad/entretenimiento/rosalia-hizo-vibrar-buenos-aires-nid25082022">el imperdible show de Rosalía</a>, <a href="https://www.somosohlala.com/actualidad/entretenimiento/mon-laferte-en-el-movistar-arena-una-artista-pasional-que-emociono-a-todos-nid05112022">Mon Laferte revolucionando el Movistar Arena</a>&nbsp;o <a href="https://www.somosohlala.com/actualidad/entretenimiento/primavera-sound-buenos-aires-el-impresionante-show-de-bjork-en-el-costanera-sur-nid10112022">la inolvidable experiencia de&nbsp;Björk en el Primavera Sound</a>, y terminar con <a href="https://www.somosohlala.com/guia-ohlala/movida-cultural/c-tangana-en-buenos-aires-la-sobremesa-madrilena-que-nos-sorprendio-a-todos-nid23112022">revolucionario&nbsp;C Tangana que propuso un show fuera de serie</a>. ¡Y la lista no se termina ahí porque todavía tenemos a Harry Styles en los próximos días!</p>\r\n\r\n<p>Pero como si todo esto fuese poco, ya sabemos que 2023 llega también muy arriba. Es que hoy se confirmó que&nbsp;<strong>The Weeknd </strong>visitará Argentina durante octubre del año que viene con su gira <em>After Hours Til Dawn</em>.</p>\r\n',
        position: 1,
      },
      {
        field_content_title: null,
        field_content:
          "<p>Después de su mítico recital en el Lollapalooza en 2017 y habiendo lanzado desde entonces 2 discos de estudios nuevos, el artista se reencuentra con el público argentino en un show que en el que promete darlo todo:<strong> se trata de una experiencia inmersiva con elementos del teatro y las artes escénicas que se conjugan en una fiesta. </strong>Es la producción más grande de su carrera y la idea es que el concierto represente el recorrido creativo que hizo durante estos años reuniendo una multiplicidad de mundos que se abren a nivel visual y conceptual además de sonoro.</p>\r\n",
        position: 2,
      },
      {
        field_content_title: "Música y NFT",
        field_content:
          "<p>La gira será la primera en integrar tecnología 3.0, impulsada por Binance: quienes asistan al concierto recibirán NFT de recuerdo y accederán a una colección exclusiva diseñada para la gira de The Weeknd. El cinco por ciento de las ventas de la colección NFT de la próxima gira se donará al Fondo Humanitario XO.</p>\r\n",
        position: 3,
      },
      {
        field_content_title: "El concierto en Buenos Aires",
        field_content:
          '<p>The Weeknd se presentará el 13 de octubre en el Hipódromo de San Isidro. Las entradas todavía no salieron a la venta pero lo harán próximamente a través de la plataforma <a href="https://www.allaccess.com.ar/">AllAccess.com.ar</a>.</p>\r\n',
        position: 4,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/gettyimages-1193457474.jpg.webp?itok=JhPP4DYy",
    urlSubCategory: "Entretenimiento",
    idSubject: 1,
  },
  {
    title:
      "Mundial Qatar 2022: un hincha ingresó a la cancha con la bandera LGTBIQ+ y fue reprimido",
    field_title_pre: "Mundial Qatar 2022: ",
    field_title:
      "un hincha ingresó a la cancha con la bandera LGTBIQ+ y fue reprimido",
    field_description:
      'Con una remera que decía "Respeto por las mujeres iraníes" y "Salven a Ucrania", así como una bandera arcoiris en la mano; el hincha corrió en la cancha durante el partido entre Uruguay y Portugal.',
    author: "Sole Venesio",
    field_content: [
      {
        field_content_title: null,
        field_content:
          '<p>Desde el momento en que la FIFA anunció que Qatar sería la sede del próximo Mundial, fueron millones las personas que se movilizaron y elevaron su voz para protestar en contra de esta decisión. ¿Por qué? <a href="https://www.somosohlala.com/guia-ohlala/viajes/mundial-qatar-cuales-son-los-codigos-de-vestimenta-nid30102022">Debido a diferentes normativas que rigen en el país</a>, <a href="https://www.somosohlala.com/liderazgo/empoderamiento/mundial-qatar-2022-5-cosas-en-las-que-qatar-atrasa-nid19112022">es un destino que persigue las diversidades, viola cientos de derechos humanos</a> y que, además, desde que se iniciaron las obras de construcción fueron miles los obreros extranjeros que murieron por agotamiento y las pobres condiciones de trabajo.</p>\r\n\r\n<p>Frente a esto -y más allá de la "fiesta del fútbol"- desde que arrancó el Mundial hay dos hechos que ya no deberían sorprendernos: la cantidad de historias de extranjeros que fueron perseguidos por la policía y aquellas historias de visitantes que -por ejemplo- no pudieron entrar a la cancha por tener una remera con un arcoiris. Quizá todo esto funcionó como caldo de cultivo para lo que sucedió este lunes cuando un hincha de fútbol ingresó a la cancha durante el partido entre Uruguay y Portugal. Con una remera azul que tenía el símbolo de Superman, de un lado decía "Salven a Ucrania" y del otro "Respeto por las mujeres iraníes", al mismo tiempo en que sostenía la bandera arcoiris de la comunidad LGTBIQ+ que decía "Paz".</p>\r\n',
        position: 1,
      },
      {
        field_content_title: null,
        field_content:
          '<p>Corriendo por 30 segundos alrededor de la cancha mientras diferentes personas de seguridad lo perseguían, ingresó al predio durante la segunda mitad del juego. Mientras que el manifestante fue conducido a través de un túnel,&nbsp;Thierry De Backer, oficial de prensa de la FIFA en el partido, dijo a The Associated Press&nbsp;que “no tenía idea” de lo que le pasó al manifestante y los organizadores no hicieron ningún comentario.</p>\r\n\r\n<p>Así como el periodista británico a quien no le permitieron entrar en la cancha por tener una remera con un arcoiris, a siete equipos europeos le negaron la posibilidad de&nbsp;pulseras multicolores "One Love" durante los partidos de la Copa del Mundo y cientos de fanáticos denunciaron que se los frenaba en las calles si utilizaban cualquier accesorio o símbolo que hiciera referencia a la lucha por los derechos de la comunidad LGTBIQ+</p>\r\n',
        position: 2,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/gettyimages-1445257385.jpg.webp?itok=8s8TgGMI",
    urlSubCategory: "Historias",
    idSubject: 1,
  },
  {
    title: "3 posiciones sexuales para potenciar el placer",
    field_title_pre: "Sexo.",
    field_title: "3 posiciones sexuales para potenciar el placer",
    field_description:
      "Te acercamos tres posiciones que nos sugiere una sexóloga: una está pensada para una pareja heterosexual, otra, para una pareja de mujeres y la tercera para dos varones. Todas, enfocadas en encontrar placer.",
    author: "Ariel Escalante",
    field_content: [
      {
        field_content_title: null,
        field_content:
          '<p><span><span><span><span><span><span>Si nos tomamos al sexo como un juego placentero, está bueno explorar lo que nos sugieren sexólogas copadas que se enfocan en que cada quien encuentre su forma de vivir el placer. No tiene por qué ser siempre la penetración,<strong> hay mil formas del erotismo: la autoestimulación, las caricias por todo el cuerpo propio y ajeno, las prácticas orales, los besos, la exploración con los dedos</strong>… entre tantas cosas.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span>La sexóloga clínica y educativa Analía Pereyra es una defensora de que cada quien explore y encuentre las prácticas sexoafectivas que más le gusten. En esta nota, <a href="https://www.somosohlala.com/amores/sexo/5-posiciones-sexuales-que-ponen-el-foco-en-el-orgasmo-femenino-nid11062022"><strong>nos acerca tres posturas, posiciones sexuales enfocadas en el placer.</strong></a></span></span></span></span></span></span></p>\r\n',
        position: 1,
      },
      {
        field_content_title: "Postura sexual para héteros",
        field_content:
          "<p><span><span><span><span><span><span>“Cuando hablamos de posturas, la número uno es la<strong> técnica de la alineación coital”, </strong>dice Analía. Y refiere a <strong>la pose llamada “El misionero”: </strong>En principio se pensaría que es la más clásica de todas las posiciones: en una pareja hétero consiste en que la mujer esté acostada y el varón se posicione encima, o bien, parados. </span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span>Pero la sexóloga suma algunas precisiones que garantizan el placer, sobre todo, de la mujer, que requiere algo más que el simple “bombeo” para llegar al clímax. “El varón se coloca penetrando un poquito más arriba de lo normal, como entrando por la parte superior del canal vaginal. Ahí, en lugar de empujar y hacer el bombeo hacia adentro y hacia afuera él debe mover la pelvis en un movimiento de balanceo. Y, si la mujer hace lo mismo y el balanceo es de los dos, ¡mucho mejor!”, dice.</span></span></span></span></span></span></p>\r\n",
        position: 2,
      },
      {
        field_content_title: "Postura sexual para parejas gays",
        field_content:
          '<p><span><span><span><span><span><span><strong>“Suele circular mucho que, entre los varones gays, siempre se da la penetración por detrás. </strong>Pero puede que a algunos varones les guste penetrar o ser penetrados solamente. O a algunos les gusten ambas cosas. A otros ninguna de las dos”, empieza la sexóloga. Alguna vez, <a href="https://www.somosohlala.com/amores/sexo/que-es-el-petting-o-sexo-sin-penetracion-nid31082022">en OHLALÁ! hablamos del “petting”. </a></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span>“Está bueno desarmar esto que antes se hablaba: ¿quién es activo, quién es pasivo? Porque siempre la “actividad” presupone a la persona que penetra, y hasta se asociaba que era más gay el que era penetrado”, dice, por comentarios de propios consultantes gays que atiende. “Hay que empezar a desarmar esas construcciones”.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span>Agrega: “Sepamos que generalmente <strong>ya no hay activos y pasivos, </strong>que no van esas etiquetas, y que los roles en las parejas cambian”. Suma que, también,<strong> se puede disfrutar del sexo entre varones gays sin practicar una penetración anal: se pueden realizar prácticas orales, de caricias, distintas manifestaciones sexo-afectivas.</strong></span></span></span></span></span></span></p>\r\n',
        position: 3,
      },
      {
        field_content_title: "Postura sexual para dos mujeres",
        field_content:
          '<p><span><span><span><span><span><span>“Una buena postura para dos personas con vulva podría ser colocándose frente a frente acostadas y, luego de la estimulación de todo el cuerpo -de autoestimularse con las manos cada una y/o cruzadas- se pueden entrelazar las piernas y, una de ellas, puede ponerse por encima simulando una postura parecida al misionero para que se genere el roce de las vulvas”, describe.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span>Sugiere que la persona que está abajo se ponga un almohadón por debajo de sus caderas para que la pelvis esté un poco más arriba y ahí genere una mejor fricción vulva con vulva.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><strong>“Recordemos que las personas con vulva sentimos placer a partir de la estimulación del clítoris”, </strong>señala Analía. <a href="https://www.somosohlala.com/amores/sexo/8-cosas-que-seguro-no-sabias-sobre-el-clitoris-el-organo-cuya-unica-funcion-es-el-placer-sexual-femenino-nid21012022">El clítoris tiene el glande, que es lo que asoma por fuera, pero que por dentro tiene unas 8 mil terminaciones nerviosas por dentro de la vulva. </a>Entonces, todo lo que roce el glande del clítoris y estimule la zona de la vulva va a provocar satisfacción y placer.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><strong>“Las mujeres entre mujeres tienen orgasmos en más del 90% de los encuentros sexuales, </strong>a diferencia de las mujeres con varones que tienen muy pocos orgasmos cuando sólo se trata de penetración”, concluye, contundente la sexóloga.</span></span></span></span></span></span></p>\r\n',
        position: 4,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/sexo-posturas.jpg.webp?itok=vwYM1xF8",
    urlSubCategory: "Sexo",
    idSubject: 1,
  },
  {
    title:
      "Sapioerotismo: la química intelectual que lleva a que te enamores de la mente de tu pareja",
    field_title_pre: "Pornocerebro.",
    field_title:
      "Qué es el sapioerotismo y cómo funciona la química intelectual",
    field_description:
      "¿Sentiste alguna vez que te desnudaban la mente y te calentó más que cualquier revolcón? Esta es una breve explicación de cómo podría estar funcionando tu sapioerotismo.",
    author: "Denise Tempone",
    field_content: [
      {
        field_content_title: null,
        field_content:
          "<p><strong>La inteligencia puede tener una influencia pornográfica en algunas personas. </strong>Así como a muchas nos estimula cierto tipo de belleza, la forma de una boca o, bueno..., un buen <em>six pack</em>, a otras nos puede volver locas una idea, una cosmovisión, un saber en particular.&nbsp;<strong>Para algunas personas, las palabras son capaces de construir puentes sólidos entre cerebros, corazones e incluso entrepiernas.</strong> Si alguna vez sentiste que una conversación te estaba desnudando más que sacarte la ropa, es probable que estés entre ellas. Entonces..., <strong>bienvenida al club de la sapioatracción.</strong></p>\r\n",
        position: 1,
      },
      {
        field_content_title: "Química intelectual",
        field_content:
          "<p>El de “sapiosexual” es solo uno de los muchos términos de identidad romántica y sexual que han surgido en los últimos años para clasificar una variedad de inclinaciones, preferencias y deseos sexuales. Sirve, como todas las definiciones, para establecer un margen de expectativas y preferencias claras. Y en este caso, funciona muy bien. Aunque la famosa “química” juega un rol importante en las respuestas sexuales instintivas de los seres humanos, los sapiosexuales parecen elegir potenciales amantes mucho más en función de lo que despiertan en sus cerebros que en el resto de sus cuerpos. Para ellos, la conexión intelectual es tan fundamental y definitiva que dejan de prestar atención a variables como el físico, la edad e incluso el género. Sabés que sos sapiosexual cuando comienza a gustarte alguien que no habías ni fichado solo tras escucharlo hablar. O podés enamorarte de una persona que nunca viste apenas leyendo sus textos.</p>\r\n\r\n<p>Sos de las que, en vez de mirar las fotos de un candidato, prefieren espiar sus libros favoritos y, definitivamente, idealizan las cocardas intelectuales porque despiertan pasión. ¿Cómo funciona esta atracción?</p>\r\n",
        position: 2,
      },
      {
        field_content_title: "Ser sapiosexual en un mundo visual",
        field_content:
          "<p>En un mundo que potencia las imágenes, que nos obliga a elegir a potenciales amores mediante una foto y que nos invita a cultivar el cuerpo más que nunca, los sapiosexuales están especialmente atentos... y hambrientos. <strong>La conexión intelectual, cuando aparece, resalta con el mayor de los fulgores porque no está destinada a suceder con demasiada facilidad. </strong></p>\r\n\r\n<p>Sin embargo, como quien busca encuentra, <strong>los sapiosexuales suelen dar con sus matches en redes que priorizan textos e ideas sobre posturas y cuerpos. </strong>No es nada inusual que los sapios se enamoren de personalidades de Twitter, que sigan con pasión a alguien por Medium y que flasheen con algún pódcast. Pero incluso en redes, en donde las fotos son necesarias y los códigos evidentes, podés encontrar a gente lista para hashtaguear como #sapiosexual para dejar bien en claro por donde debería ser el aproximamiento ideal.</p>\r\n",
        position: 3,
      },
      {
        field_content_title: "La magia del espejo",
        field_content:
          "<p>Pero ser sapiosexual no se trata únicamente de alimentar nuestro ego y encontrar un espejo ideal. <strong>Las personas sapio suelen ser extremadamente racionales y relacionarse con el mundo a través de discursos elaborados. </strong>Este tipo de personalidad suele estar en la búsqueda de palabras, teorías y saberes que enriquezcan la forma en que ven el mundo: que sumen explicaciones, teorías o poesía.</p>\r\n\r\n<p>Se trata de toparse con gente que hace del mundo un lugar más atractivo, más interesante, un lugar en el que den ganas de quedarse y perpetuarse. Y eso explica por qué las mentes brillantes despiertan pasión. Para ellos, que alguien los haga reír puede provocar una respuesta sexual más fuerte que la caricia más íntima y que les compartan un saber puede representar más contención que el mejor de los abrazos.&nbsp;</p>\r\n",
        position: 4,
      },
      {
        field_content_title: "Expansión de mundos",
        field_content:
          "<p>Seguramente haya en tu historial emocional alguna pareja que te parecía un crack y que con el paso del tiempo te pareció un bolu... O un señor que te deslumbraba y que, con el correr de los años, te fue pareciendo un simple chamuyero. La retórica es una gran arma que también puede confundir y que funciona, a veces, simplemente como una caricia al ego. Para dejarse seducir por una supuesta inteligencia, hay que partir de la base de que una también es brillante o, al menos, que puede seguir a una cabeza iluminada.</p>\r\n\r\n<p><strong>Este es uno de los mecanismos que erotizan a los sapios: sentir que están a la altura de alguien que con su intelecto les produce admiración. Espejarse en un inteligente, creemos, habla de nuestra inteligencia. </strong>Sin embargo, en el ámbito privado, una de las lecciones que más deben procesar los sapios, al igual que el resto de los humanos, es que una gran sagacidad intelectual no siempre hace a un buen amante, a una pareja ideal ni, mucho menos, a una gran persona.&nbsp;</p>\r\n",
        position: 5,
      },
      {
        field_content_title: "A temblar, mi amor",
        field_content:
          "<p>En un mundo de belleza perecedera, los sapios sienten construir algo más potente. Si las ideas crecen, no envejecen y los cerebros sabios evolucionan, no se atrofian, entonces hay mucho que esperar de estos encuentros. La promesa de algo que prevalece más que los músculos y el atractivo físico es algo que suele seducir en la tempestad. No importa qué pase, mientras esa persona pueda estimularse así, podrá llegar incluso a prescindir de los encuentros sexuales y sentirse totalmente satisfecha.</p>\r\n\r\n<p>Es de esta forma en que se han establecido algunos de los vínculos más sólidos que a los sapios hacen suspirar. ¿Es esta una forma de conexión más evolucionada o resulta tan perecedera como cualquier otra? La respuesta, si ya transitaste el camino del amor, ida y vuelta, seguramente te resulte obvia: no hay fórmulas, solo momentos y conexión. Aunque no garantice nada, sacarle el juguito a un flash erotizante siempre es una buena decisión, entonces disfrutemos de aquellos amantes que, en vez de hacernos temblar las piernas, nos hacen temblar la estantería. Esa en donde tenemos nuestros libros favoritos y bien acomodado lo que creíamos saber.&nbsp;</p>\r\n",
        position: 6,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/pornocerebro-ok.jpg.webp?itok=FfjRGznf",
    urlSubCategory: "Sexo",
    idSubject: 1,
  },
  {
    title:
      "Audioporno: qué es y cómo podés usar el sonido para potenciar el sexo",
    field_title_pre: "¿Probaste el audioporno?",
    field_title: "7 formas de potenciar el sexo a través de los sonidos",
    field_description:
      "Puede que en el sexo lo hayas visto todo. Pero ahora te toca escuchar... Estimulá tus oídos para explorar otras formas de potenciar tu placer. ",
    author: "Denise Tempone",
    field_content: [
      {
        field_content_title: null,
        field_content:
          '<p><span><span><span><span><span><span>Si nos tomamos al sexo como un juego placentero, está bueno explorar lo que nos sugieren sexólogas copadas que se enfocan en que cada quien encuentre su forma de vivir el placer. No tiene por qué ser siempre la penetración,<strong> hay mil formas del erotismo: la autoestimulación, las caricias por todo el cuerpo propio y ajeno, las prácticas orales, los besos, la exploración con los dedos</strong>… entre tantas cosas.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span>La sexóloga clínica y educativa Analía Pereyra es una defensora de que cada quien explore y encuentre las prácticas sexoafectivas que más le gusten. En esta nota, <a href="https://www.somosohlala.com/amores/sexo/5-posiciones-sexuales-que-ponen-el-foco-en-el-orgasmo-femenino-nid11062022"><strong>nos acerca tres posturas, posiciones sexuales enfocadas en el placer.</strong></a></span></span></span></span></span></span></p>\r\n',
        position: 1,
      },
      {
        field_content_title: "Postura sexual para héteros",
        field_content:
          "<p><span><span><span><span><span><span>“Cuando hablamos de posturas, la número uno es la<strong> técnica de la alineación coital”, </strong>dice Analía. Y refiere a <strong>la pose llamada “El misionero”: </strong>En principio se pensaría que es la más clásica de todas las posiciones: en una pareja hétero consiste en que la mujer esté acostada y el varón se posicione encima, o bien, parados. </span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span>Pero la sexóloga suma algunas precisiones que garantizan el placer, sobre todo, de la mujer, que requiere algo más que el simple “bombeo” para llegar al clímax. “El varón se coloca penetrando un poquito más arriba de lo normal, como entrando por la parte superior del canal vaginal. Ahí, en lugar de empujar y hacer el bombeo hacia adentro y hacia afuera él debe mover la pelvis en un movimiento de balanceo. Y, si la mujer hace lo mismo y el balanceo es de los dos, ¡mucho mejor!”, dice.</span></span></span></span></span></span></p>\r\n",
        position: 2,
      },
      {
        field_content_title: "Postura sexual para parejas gays",
        field_content:
          '<p><span><span><span><span><span><span><strong>“Suele circular mucho que, entre los varones gays, siempre se da la penetración por detrás. </strong>Pero puede que a algunos varones les guste penetrar o ser penetrados solamente. O a algunos les gusten ambas cosas. A otros ninguna de las dos”, empieza la sexóloga. Alguna vez, <a href="https://www.somosohlala.com/amores/sexo/que-es-el-petting-o-sexo-sin-penetracion-nid31082022">en OHLALÁ! hablamos del “petting”. </a></span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span>“Está bueno desarmar esto que antes se hablaba: ¿quién es activo, quién es pasivo? Porque siempre la “actividad” presupone a la persona que penetra, y hasta se asociaba que era más gay el que era penetrado”, dice, por comentarios de propios consultantes gays que atiende. “Hay que empezar a desarmar esas construcciones”.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span>Agrega: “Sepamos que generalmente <strong>ya no hay activos y pasivos, </strong>que no van esas etiquetas, y que los roles en las parejas cambian”. Suma que, también,<strong> se puede disfrutar del sexo entre varones gays sin practicar una penetración anal: se pueden realizar prácticas orales, de caricias, distintas manifestaciones sexo-afectivas.</strong></span></span></span></span></span></span></p>\r\n',
        position: 3,
      },
      {
        field_content_title: "Postura sexual para dos mujeres",
        field_content:
          '<p><span><span><span><span><span><span>“Una buena postura para dos personas con vulva podría ser colocándose frente a frente acostadas y, luego de la estimulación de todo el cuerpo -de autoestimularse con las manos cada una y/o cruzadas- se pueden entrelazar las piernas y, una de ellas, puede ponerse por encima simulando una postura parecida al misionero para que se genere el roce de las vulvas”, describe.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span>Sugiere que la persona que está abajo se ponga un almohadón por debajo de sus caderas para que la pelvis esté un poco más arriba y ahí genere una mejor fricción vulva con vulva.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><strong>“Recordemos que las personas con vulva sentimos placer a partir de la estimulación del clítoris”, </strong>señala Analía. <a href="https://www.somosohlala.com/amores/sexo/8-cosas-que-seguro-no-sabias-sobre-el-clitoris-el-organo-cuya-unica-funcion-es-el-placer-sexual-femenino-nid21012022">El clítoris tiene el glande, que es lo que asoma por fuera, pero que por dentro tiene unas 8 mil terminaciones nerviosas por dentro de la vulva. </a>Entonces, todo lo que roce el glande del clítoris y estimule la zona de la vulva va a provocar satisfacción y placer.</span></span></span></span></span></span></p>\r\n\r\n<p><span><span><span><span><span><span><strong>“Las mujeres entre mujeres tienen orgasmos en más del 90% de los encuentros sexuales, </strong>a diferencia de las mujeres con varones que tienen muy pocos orgasmos cuando sólo se trata de penetración”, concluye, contundente la sexóloga.</span></span></span></span></span></span></p>\r\n',
        position: 4,
      },
    ],
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/2022-11/audioporno-principal.png.webp?itok=UZro8dvR",
    urlSubCategory: "Sexo",
    idSubject: 1,
  },
];

module.exports = function () {
  return fakeNotes.map((notes) => {
    return notesServices.create(notes);
  });
};
