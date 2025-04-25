"use strict"

//Definimos variables y constanes para los títulos del html principal.
const mainBtn = document.querySelectorAll(".main-btn");
const mainTexto = document.querySelectorAll(".main-texto");

// Variables para el carrusel
let position = 0;
const Lightbox = document.querySelector(".Lightbox");
const Lightboxes = document.querySelectorAll(".Lightbox");
const LightboxImgContainer = Lightbox.querySelector(".Carrousel-container");
const carrouselBtn = document.querySelectorAll(".Carrousel-btn");
const LightboxTexto = document.querySelector(".Lightbox-texto");

// Control de navegación del carrousel
const siguiente = document.querySelector(".Siguiente");
const anterior = document.querySelector(".Anterior");

// Título aparece al hacer mouseover sobre las imágenes del html principal
mainBtn.forEach(function (eachBtn, index) {
  mainBtn[index].addEventListener("mouseover", function () {
    mainTexto.forEach(function (eachTexto, indexTexto) {
      mainTexto[indexTexto].classList.remove("isActive");
    });
    mainTexto[index].classList.add("isActive");
  });
});

// Estructura de datos para proyectos, descripciones e imágenes.
const proyectos = [
  {
    title: "PROYECTO PUYA",
    description:
      "<p>¿Cómo podemos dejar de ser parte del problema y pasar a ser parte de la solución a través de una alianza interespecie, incluyendo los elementos tecnológicos?</p>" +
      "<p>Se ha propuesto una pieza reactiva humano-imagen digital utilizando las emisiones de CO2 (dióxido  de carbono) de los espectadores para activar y generar un dibujo-animación producido en la plataforma de entornos generativos TouchDesigner, que reacciona de manera vinculada a la entrada de valores de ppm (partes por millón) de un sensor de CO2 dispuesto en el espacio exhibitivo dentro de una raíz.</p>" +
      "<p>En el centro de la pantalla vemos un modelado 3D de un tótem Chagual [tótem madre o nueva especie híbrida] un espacio vegetal virtual que ha sido trabajado en Blender relacionando todos los factores que serían imprescindibles para la preservación de la especie: la semilla, la planta, la barata, los ratones, la mariposa, el ser humano, el polen, los recursos tecnológicos, otras especies de plantas, etc. utilizando como referencia visual las imágenes obtenidas en las salidas a terreno asociadas al proyecto. Sobre este fondo, cada vez que sube el recuento de ppm obtenidos a través del sensor se modifican los valores asociados a la variante que cambia la posición, el color y la velocidad de un conjunto de mariposas que revolotean en torno al Chagual; entre más ppm, más cantidad de mariposas en el espacio.</p>",
    images: [
      "assets/proyecto_0/Foto_a.jpg",
      "assets/proyecto_0/Foto_b.jpg",
      "assets/proyecto_0/Foto_c.jpg",
      "assets/proyecto_0/Foto_d.jpg",
      "assets/proyecto_0/Foto_e.jpg",
    ],
  },
  {
    title: "SUMERGIR EL CUERPO",
    description:
      "<p> En 1951, a la edad de nueve meses, mi madre perdió la audición de su oído derecho tras una infección en el tímpano, problema que no se solucionó hasta quince años después con el primer trasplante realizado en Chile. A pesar de la operación mi madre nunca pudo estar bajo el agua y en mis recuerdos está siempre encontrada en la orilla del mar, nunca sumergiendo su cuerpo; ¿cómo sería no haber escuchado nunca bajo el agua; no haber experimentado las variaciones sonoras de las olas, las piedras, las burbujas? </p>" +
      "<p> Sumergir el cuerpo es una acción-instalación que consta de diez dispositivos sonoros compuestos por una oreja derecha siliconada y un sistema de audio directo monocanal que reproducen en tiempo real el paisaje sonoro submarino captado bajo el agua. El sonido se escucha al entrar en contacto con la masa de orejas a la deriva en el mar, estableciendo un vínculo entre la prótesis, el agua y el oído del oyente, como si sumergiera el cuerpo. <p>",
    images: [
      "assets/proyecto_1/Foto_a.jpg",
      "assets/proyecto_1/Foto_b.jpg",
      "assets/proyecto_1/Foto_c.jpg",
      "assets/proyecto_1/Foto_d.jpg",
      "assets/proyecto_1/Foto_e.jpg",
    ],
  },
  {
    title: "VOLAR EN LÍNEA RECTA, CAER EN ESPIRAL",
    description:
      "Este proyecto surge en estancia de Proyecto Limón, a partir de ejercicios de observación sobre insectos y animales nocturnos a contra luz. En medio de la noche, en el campo, donde se sitúa la estancia, se dispuso un par de telas de lona a contra luz, en ellas, como un teatro de sombras, se empezaron a acumular bichitos de todos los tamaños. En la observación se pudo ver el tipo de vuelo de los insectos en torno a la luz, viajando directamente hacia ella y cayendo en espiral producto del calor o de la intensa luz que los deja desorbitados.",
    images: [
      "assets/proyecto_2/Foto_a.jpg",
      "assets/proyecto_2/Foto_b.jpg",
      "assets/proyecto_2/Foto_c.jpg",
      "assets/proyecto_2/Foto_d.jpg",
      "assets/proyecto_2/Foto_e.jpg",
    ],
  },
  {
    title: "PROTOTIPADOS PARA LA COEXISTENCIA nº3",
    description:
      "Prototipado III: Hacia la conquista de territorios hostiles se basa en la posibilidad de re habitar con diferentes especies de plantas territorios dañados por el extractivismo, la contaminación de aguas, de aire, etc. Consiste en un dispositivo que busca lugares para plantar semillas mediante la radiestesia (sistema de búsqueda de energías subterráneas), utilizando la colaboración entre dos dispositivos que dialogan entre sí para realizar la plantación, un dispositivo móvil y uno fijo, el móvil deambula buscando agua subterránea por radiestesia, cuando detecta agua, envía una señal por OSC al dispositivo fijo, una mano dispensadora de semillas de reforestación que esparce las semillas al captar la señal.",
    images: [
      "assets/proyecto_3/Foto_a.jpg",
      "assets/proyecto_3/Foto_b.jpg",
      "assets/proyecto_3/Foto_c.jpg",
      "assets/proyecto_3/Foto_d.jpg",
      "assets/proyecto_3/Foto_e.jpg",
    ],
  },
  {
    title: "LABORATORIO DE AFECTOS",
    description:
      "<p> Laboratorio de afectos para una planta migrante es una instalación interactiva entre máquina y objeto natural. </p>" +
      "<p> La pieza consiste en una mano robótica femenina accionada por un motor paso a paso y un sistema de biela que permite a la máquina simular el acto de una caricia sobre una planta. </p>" +
      "<p> La planta, en este caso una sábila o Aloe Vera de origen africano y América Central capta la presencia de la mano sobre su corteza a través de sensores capacitivos y de proximidad. </p>" +
      "<p> Los datos obtenidos son procesados transformando un dibujo generativo que varía según la distancia y el tacto de la mano robótica. La pieza se mantiene en silencio e inmóvil, siendo activada durante algunos minutos por el espectador a través de un sensor de presencia. </p>" +
      "<p> Esta pieza busca reflexionar sobre el concepto de migración de las plantas, muchas de ellas sagradas, asociada a la influencia del ser humano que las lleva a emprender este viaje entre continentes, ficcionando, a través de un pequeño laboratorio la búsqueda de reconexión, de una manera poética y metafórica con la 'memoria genética' de la planta a través de una caricia. </p>",
    images: [
      "assets/proyecto_4/Foto_a.jpg",
      "assets/proyecto_4/Foto_b.jpg",
      "assets/proyecto_4/Foto_c.jpg",
      "assets/proyecto_4/Foto_d.jpg",
      "assets/proyecto_4/Foto_e.jpg",
    ],
  },
  {
    title: "DE DESECHOS Y POLVO",
    description:
      "<p> De desechos y polvo continúa mi investigación sobre la relación que existe entre sujeto y naturaleza y el distanciamiento de estos productos del desarrollo tecnológico que el ser humano ha alcanzado. </p>" +
      "<p> Bajo la idea de progreso, el ser humano va destruyendo espacios naturales salvajes, construyendo edificaciones y espacios urbanos que como consecuencia generan problemas de temperatura, de contaminación y de estrés en la población. De este modo, el ser humano se ve obligado a la construcción de áreas verdes artificiales para palear esta situación, muchas veces buscando árboles ornamentales de rápido crecimiento, que empeoran las condiciones que buscan mejorar. </p>" +
      "<p> Reconstruir para el bienestar de la humanidad lo que se ha destruido en beneficio del progreso, es una paradoja recurrente para nuestra especie y evidencia un estado de control sobre la naturaleza, reprimiendo todo ciclo y acto espontáneo para mantener el orden de una ciudad. </p>" +
      "<p> Bajo esta idea nace De desechos y polvo, como una crítica a la lucha constante entre ser humano y el caos de la naturaleza. </p>",
    images: [
      "assets/proyecto_5/Foto_a.jpg",
      "assets/proyecto_5/Foto_b.jpg",
      "assets/proyecto_5/Foto_c.jpg",
      "assets/proyecto_5/Foto_d.jpg",
      "assets/proyecto_5/Foto_e.jpg",
    ],
  },
  {
    title: "LABORATORIO PARA UNA PLANTA MIGRANTE",
    description:
      "<p> Este proyecto surge en la Residencia de investigación Lisboa Soa, en el Jardín de Cáctus del Botánico Estufa Fría. </p>" +
      "<p> Para este proyecto trabajé reflexionando sobre procesos migratorios de especies no nativas emplazadas en el jardín de cactus del invernadero Estufa fría, en búsqueda de algunas especies que hubiesen migrado forzadas por el ser humano desde Sudamérica. </p>" +
      "<p> A través de una serie de manos robotizadas, realicé el montaje de un laboratorio sonoro de gestos. Una serie de manos de yeso femeninas que acariciaban constantemente los cactus provenientes de Sudamérica, tomando la caricia como un gesto esencial de nuestros antepasados latinoamericanos, nuestros pueblos indígenas o nuestras abuelas, un gesto ritual-poético, acompañado del sonido de una voz femenina, una abuela que recita y les cuenta sobre sus antepasados y sus poderes curativos y sagrados a estas plantas desde una minara poética y crítica. </p>",
    images: [
      "assets/proyecto_6/Foto_a.jpg",
      "assets/proyecto_6/Foto_b.jpg",
      "assets/proyecto_6/Foto_c.jpg",
      "assets/proyecto_6/Foto_d.jpg",
      "assets/proyecto_6/Foto_e.jpg",
    ],
  },
  {
    title: "DEFORMACIÓN Y ESFUERZO",
    description:
      "<p> Deformación y esfuerzo es parte de la muestra individual 'Resistencia' la cuál sigue una línea de trabajo en torno a desastres naturales que que he investigado desde hace varios años a nivel técnico-científico, social, material y visual dando origen a una serie de ejercicios de fuerza, estudios de movimiento y consideraciones en torno al vínculo entre desastre, tecnología y sujeto. </p>" +
      "<p> La muestra deviene de una investigación local, tomando a nuestro país como un terreno cuya ubicación geográfica da origen a una constante de eventos naturales transformados en desastres cuando afectan la vida material y humana. Particularmente, Resistencia se encuentra en una primera etapa de investigación relacionada a los sismos, como eventos que generan grandes cambios, secando lagos a través de fisuras, creando montañas, generando nuevos paisajes, y sobre cómo estos cambios naturales se relacionan con el sujeto a través del desastre. </p>" +
      "<p> 'En la muestra la artista se toma de estudios científicos basados en desastres naturales, generando una serie de ejercicios para entender el origen de estos eventos, utilizando para ello medios como el video, el dibujo, construcciones mecánicas, tecnologías digitales y análogas. Con alguna de sus obras la artista se pone del lado de la naturaleza, exponiendo los desastres como pequeñas revanchas frente al sujeto y tecnologización de los procesos naturales, que han ido interviniendo directamente el curso de la naturaleza como un acto de manipulación absoluta de programación.' Alessandra Buroto, MAC. </p>",
    images: [
      "assets/proyecto_7/Foto_a.jpg",
      "assets/proyecto_7/Foto_b.jpg",
      "assets/proyecto_7/Foto_c.jpg",
      "assets/proyecto_7/Foto_d.jpg",
      "assets/proyecto_7/Foto_e.jpg",
    ],
  },
  {
    title: "RESISTENCIA",
    description:
      "<p> Resistencia consiste en dos mitades de un mismo tronco que son forzados a encontrarse en un punto central, producto del avance de una de sus mitades generado por un movimiento motorizado. Al llegar al centro, una mitad pone resistencia a la otra impidiendo la reunión de las partes. </p>" +
      "<p> Con esta pieza reflexiono sobre la intención del sujeto, ser humano, de controlar el entorno natural con la ayuda del desarrollo tecnológico y a su vez, sobre como la naturaleza resiste la intervención alterando ese desarrollo y generando de pequeños a grandes desajustes o descalces. </p>",
    images: [
      "assets/proyecto_8/Foto_a.jpg",
      "assets/proyecto_8/Foto_b.jpg",
      "assets/proyecto_8/Foto_c.jpg",
      "assets/proyecto_8/Foto_d.jpg",
      "assets/proyecto_8/Foto_e.jpg",
    ],
  },
  {
    title: "PAISAJE EN CONSTRUCCIÓN",
    description:
      "<p> Paisaje en construcción corresponde a una serie de tres videos que registran desastres naturales generados con dioramas, reflexionando sobre el constante estado de cambio del paisaje en sintonía con los 'desastres' naturales como terremotos, erupciones volcánicas, maremotos, así como también los desastres producidos colateralmente por la destrucción del medio natural a manos del ser humano, inundaciones, incendios, sequías. </p>" +
      "<p> En el video, un paisaje-pueblo queda sepultado bajo las cenizas de un volcán, un bosque se hunde dejando una cuenca y unos cerros se unen hasta formar un cordón montañoso. </p>",
    images: [
      "assets/proyecto_9/Foto_a.jpg",
      "assets/proyecto_9/Foto_b.jpg",
      "assets/proyecto_9/Foto_c.jpg",
      "assets/proyecto_9/Foto_d.jpg",
      "assets/proyecto_9/Foto_e.jpg",
    ],
  },
  {
    title: "FALLA",
    description:
      "<p> Falla se encuentra al intermedio de una investigación que he venido realizando hace algunos años, sobre el sujeto como habitante de un territorio y la relación con su entorno natural. Cómo dialogan sujeto, naturaleza y la influencia de desarrollo tecnológico en esta relación, que los ha distanciado exponencialmente. </p>" +
      "<p> Falla juega con el sentido negativo de la palabra, entendida como el error y a la vez con su significado en geología, donde una falla geológica es una grieta, una fractura en la superficie terrestre, que se va desplazando a lo largo de los años, más aún por los movimientos tectónicos. Chile posee ambas características, se encuentra sobre las placas de Nazca y la sudamericana y Santiago particularmente está sobre una falla, la de San Ramón, que afecta varias comunas de Santiago. En ese sentido, la muestra reflexiona sobre cómo esta falla para la naturaleza no es negativa, sino que es un proceso de cambio continuo en pro de liberar energía, mutar, desplazarse, siendo para el ser humano un hecho totalmente negativo, con carácter destructivo, de casas, de pueblos, de ciudades, etc. </p>" +
      "<p> En torno a ese tema nace falla, que se compone de tres piezas, siendo 'Mediana intensidad' la principal que da origen a esta exposición, que consta de una serie de tres simuladores de sismo que activan alarmas caseras que son réplicas de sus originales encontradas en investigaciones de campo. </p>",
    images: [
      "assets/proyecto_10/Foto_a.jpg",
      "assets/proyecto_10/Foto_b.jpg",
      "assets/proyecto_10/Foto_c.jpg",
      "assets/proyecto_10/Foto_d.jpg",
      "assets/proyecto_10/Foto_e.jpg",
    ],
  },
  {
    title: "ZONA DE DESCANSO",
    description:
      "<p> Serie de tres dispositivos sonoros que son activados cuando un ave se posa sobre una cuerda de goma. El movimiento producido en la cuerda activa un sensor de movimiento conectado a un Arduino provocando un sonido como el trino de un pájaro en 8 Bits que se reproduce por unos parlantes dispuestos dentro de una casita de pájaro. Estas piezas fueron realizadas específicamente para la muestra 'En el fondo del lago' Local Arte Contemporáneo, que inauguraba cada dos meses una nueva muestra sobre la muestra anterior. En el espacio se encontraba la obra del artista Cristián Salineros quién a demás de una escultura dispuso 4 Aves Diamantes a dialogar con las obras. </p>",
    images: [
      "/assets/proyecto_11/Foto_a.jpg",
      "/assets/proyecto_11/Foto_b.jpg",
      "/assets/proyecto_11/Foto_c.jpg",
      "/assets/proyecto_11/Foto_d.jpg",
      "/assets/proyecto_11/Foto_e.jpg",
    ],
  },
  {
    title: "LABORATORIO CADUCO",
    description:
      "<p> En el Parque Forestal, con su entorno de árboles exóticos de hoja caduca que habitan en Chile, con todos los problemas que presentan para la ciudad y su entorno, se emplaza Laboratorio Caduco, una ficción de laboratorio para el crecimiento de un árbol Quillay, donde se disponen elementos simuladores de naturaleza que impulsan su desarrollo a través de la luz y el agua, así como también elementos tecnológicos de observación de crecimiento. Esta ficción de laboratorio juega con el absurdo, considerando que el Quillay es un árbol nativo chileno que crece sin necesidad de la intervención humana, pero que en el contexto que hoy estamos viviendo como sociedad, de crear cada vez más plazas duras o espacios verdes con árboles exóticos de rápido crecimiento, el cuidado de crecimiento y la protección del árbol chileno se ha vuelto una realidad.</p>",
    images: [
      "/assets/proyecto_12/Foto_a.jpg",
      "/assets/proyecto_12/Foto_b.jpg",
      "/assets/proyecto_12/Foto_c.jpg",
      "/assets/proyecto_12/Foto_d.jpg",
      "/assets/proyecto_12/Foto_e.jpg",
    ],
  },
  {
    title: "REENCUENTRO",
    description:
      "<p> Reencuentro, surge del hallazgo de dos mitades de una misma piedra encontradas en lugares distantes entre sí en una playa del litoral chileno. La primera parte la vi con la mitad del cuerpo enterrado en la arena, era sólo media piedra y por su aspecto común no llamó mi atención. La segunda parte la hallé al final de una gran escalera que subía a la cima de una quebrada, y al ver la gran similitud con la piedra partida enterrada en la arena, fui al encuentro con su otra mitad en la mano. </p>" +
      "<p> Reencuentro consiste en la manipulación de las dos partes de esa piedra, en la que cada mitad es accionada por un motor que genera un movimiento de vaivén, el cuál produce el distanciamiento de las partes y su encuentro en el centro de la pieza, donde una mitad persigue a la otra y a veces se reúnen, formando por unos segundos la piedra completa. </p>",
    images: [
      "/assets/proyecto_13/Foto_a.jpg",
      "/assets/proyecto_13/Foto_b.jpg",
      "/assets/proyecto_13/Foto_c.jpg",
      "/assets/proyecto_13/Foto_d.jpg",
      "/assets/proyecto_13/Foto_e.jpg",
    ],
  },
  {
    title: "LA NATURALEZA DEL VACÍO",
    description:
      "<p> 'La naturaleza del vacío' corresponde a una investigación sobre los espacios inconclusos que van quedando en zonas gentrificadas, edificaciones que por no ser habitadas van mermando sus condiciones físicas hasta su destrucción, convirtiéndose en espacios baldíos o terrenos verdes que son dejados a su suerte. </p>" +
      "<p> En el proceso del proyecto, surge más atención por los lugares verdes que van naciendo y su apropiación por parte de los vecinos, muchas veces tomándose esos terreno sin edificar y construyéndolos en plazas o en alguna otra área común. Con este trabajo pretendo reflexionar sobre la importancia de esos espacios de distracción y placidez y los efectos de la naturaleza sobre el individuo, pero también, sobre cómo las ciudades, pueblos, localidades, etc. al estar cada vez más urbanizados, con el afán de una mayor conectividad y prosperidad, van perdiendo esos sitios verdes y se van desconectando de la naturaleza, teniendo que recurrir a crear áreas verdes artificiales para poseer zonas de bienestar, transformándose en una seguidilla de destrucción y construcción. De este modo, el trabajo corresponde a tres piezas que ficcionan factores ambientales sobre elementos naturales, dialogando entre el área verde que tiene que ser reconstruida dentro de un terreno altamente urbanizado y el sitio baldío donde sus vecinos construyen espacios comunes con sus propias manos. </p>",
    images: [
      "/assets/proyecto_14/Foto_a.jpg",
      "/assets/proyecto_14/Foto_b.jpg",
      "/assets/proyecto_14/Foto_c.jpg",
      "/assets/proyecto_14/Foto_d.jpg",
      "/assets/proyecto_14/Foto_e.jpg",
    ],
  },
];

// Función para abrir el lightbox y cargar imágenes
function abrirLightbox(index) {
  // Limpiar el contenido anterior
  LightboxImgContainer.innerHTML = "";
  //Mostrar la descripción
  LightboxTexto.innerHTML = proyectos[index].description;

  // Cargar las imágenes del proyecto seleccionado

   // Se ha utilizado chatGpt para consultar el modo de incluir la variedad de imágenes con picture directamente desde javascript. 
// Se ha llegado a la siguiente solución. Se han ocupado y modificado algunos códigos generador con la IA.
  proyectos[index].images.forEach((imageSrc) => {
    const picture = document.createElement("picture"); //Esto lo ha generado la IA
    const img = document.createElement("img");
    const sourceLargeJpg = document.createElement("source"); //Esto lo ha generado la IA
    const sourceSmallWebp = document.createElement("source"); //Esto lo ha generado la IA

    // img standard size
    img.src = imageSrc;
    img.alt = `Imagen de ${proyectos[index].title}`;
    img.classList.add("Carrousel-img");

    // jpg Large
    sourceLargeJpg.srcset = imageSrc.replace(".jpg", "-large.jpg"); //Esto lo ha generado la IA
    sourceLargeJpg.media = "(min-width: 992px)"; //Esto lo ha generado la IA

    // WebP - Small
    sourceSmallWebp.srcset = imageSrc.replace(".jpg", "-small.webp"); //Esto lo ha generado la IA
    sourceSmallWebp.type = "image/webp"; //Esto lo ha generado la IA
    sourceSmallWebp.media = "(max-width: 576px)"; //Esto lo ha generado la IA

    // Armar el picture
    picture.appendChild(sourceSmallWebp);
    picture.appendChild(sourceLargeJpg);
    picture.appendChild(img);

    // Agregarlo al contenedor
    LightboxImgContainer.appendChild(picture);
  });

  // Mostrar el lightbox
  Lightbox.style.display = "flex";

  // Reiniciar la posición del carrusel
  position = 0;
  desplazarContainer();
}

// Asignar eventos a las imágenes del proyecto
const ObjetoImg = document.querySelectorAll(".main-img");
ObjetoImg.forEach(function (eachImg, i) {
  ObjetoImg[i].addEventListener("click", function () {
    abrirLightbox(i);
  });
});

// Función para desplazar el carrousel
const desplazarContainer = function () {
  const carrouselImg = LightboxImgContainer.querySelectorAll(".Carrousel-img");
  LightboxImgContainer.style.transform = `translateX(-${
    position * (100 / carrouselImg.length)
  }%)`;
};

siguiente.addEventListener("click", function () {
  const carrouselImg = LightboxImgContainer.querySelectorAll(".Carrousel-img");
  position++;
  if (position >= carrouselImg.length) {
    position = 0;
  }
  desplazarContainer();
});

anterior.addEventListener("click", function () {
  const carrouselImg = LightboxImgContainer.querySelectorAll(".Carrousel-img");
  position--;
  if (position < 0) {
    position = carrouselImg.length - 1;
  }
  desplazarContainer();
});

//Botones de carrousel
carrouselBtn.forEach(function (eachBtn, i) {
  carrouselBtn[i].addEventListener("click", function () {
    position = i; //posiciont ++?
    if (position < 0) {
    }
    desplazarContainer();
  });
});

// Cierre del lightbox
const LightboxBtn = Lightbox.querySelector(".Lightbox-btn");
LightboxBtn.addEventListener("click", function () {
  Lightbox.style.display = "none";
});

// Cerrar el lightbox al hacer clic fuera de la imagen
Lightbox.addEventListener("click", function (event) {
  if (event.target === Lightbox) {
    Lightbox.style.display = "none";
  }
});
