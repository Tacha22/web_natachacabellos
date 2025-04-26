"use strict";

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
    title: "PUYA PROJECT",
    description:
      "<p>How can we stop being part of the problem and become part of the solution through an interspecies alliance, including technological elements? </p>" +
      "<p>A reactive human-digital-image piece has been proposed using viewers CO2 (carbon dioxide) emissions to trigger and generate a drawing-animation produced on the TouchDesigner generative environments platform, which reacts in a linked way to the input of ppm (parts per million) values from a CO2 sensor arranged in the exhibition space within a root. </p>" +
      "<p>In the center of the screen we see a 3D model of a Chagual totem [mother totem or new hybrid species] a virtual plant space that has been worked in Blender relating all the factors that would be essential for the preservation of the species: the seed, the plant, the cheap, the mice, the butterfly, the human being, the pollen, the technological resources, other plant species, etc. using as visual reference the images obtained in the field trips associated with the project. On this background, each time the ppm count obtained through the sensor goes up, the values associated with the variant that changes the position, color and speed of a group of butterflies fluttering around the Chagual are modified; the more ppm, the more butterflies in space.</p>",
    images: [
      "assets/proyecto_0/Foto_a.jpg",
      "assets/proyecto_0/Foto_b.jpg",
      "assets/proyecto_0/Foto_c.jpg",
      "assets/proyecto_0/Foto_d.jpg",
      "assets/proyecto_0/Foto_e.jpg",
    ],
  },
  {
    title: "SUMERGE THE BODY",
    description:
      "<p> In 1951, at the age of nine months, my mother lost the hearing in her right ear after an infection in the eardrum, a problem that was not solved until fifteen years later with the first transplant performed in Chile. Despite the operation my mother was never able to be underwater and in my memories she is always found on the seashore, never submerging her body; what would it be like to have never heard underwater; to have never experienced the sound variations of the waves, the stones, the bubbles? </p>" +
      "<p> Submerging the body is an action-installation consisting of ten sound devices composed of a siliconized right ear and a single-channel direct audio system that reproduce in real time the underwater soundscape captured underwater. The sound is heard upon contact with the mass of ears drifting in the sea, establishing a link between the prosthesis, the water and the listener's ear, as if submerging the body. <p>",
    images: [
      "assets/proyecto_1/Foto_a.jpg",
      "assets/proyecto_1/Foto_b.jpg",
      "assets/proyecto_1/Foto_c.jpg",
      "assets/proyecto_1/Foto_d.jpg",
      "assets/proyecto_1/Foto_e.jpg",
    ],
  },
  {
    title: "FLYING IN A STRAIGHT LINE, FALLING IN A SPIRAL",
    description:
      "This project arose at Proyecto Limón's micro residence, from observation exercises on nocturnal insects and animals against the light. In the middle of the night, in the field, where the farm is located, a couple of tarpaulins were placed against the light, in them, like a theater of shadows, bugs of all sizes began to accumulate. In the observation it was possible to see the type of flight of the insects around the light, traveling directly towards it and falling in spiral product of the heat or of the intense light that leaves them exorbitant",
    images: [
      "assets/proyecto_2/Foto_a.jpg",
      "assets/proyecto_2/Foto_b.jpg",
      "assets/proyecto_2/Foto_c.jpg",
      "assets/proyecto_2/Foto_d.jpg",
      "assets/proyecto_2/Foto_e.jpg",
    ],
  },
  {
    title: "PROTOTYPES FOR COEXISTENCE nº3",
    description:
      "Prototyping III: Towards the conquest of hostile territories is based on the possibility of re-inhabiting with different species of plants territories damaged by extractivism, water and air pollution, etc. It consists of a device that searches for places to plant seeds through dowsing (subway energy search system), using the collaboration between two devices that dialogue with each other to carry out the planting, a mobile device and a fixed one, the mobile wanders looking for subway water by dowsing, when it detects water, it sends a signal by OSC to the fixed device, a hand dispenser of reforestation seeds that spreads the seeds by capturing the signal.",
    images: [
      "assets/proyecto_3/Foto_a.jpg",
      "assets/proyecto_3/Foto_b.jpg",
      "assets/proyecto_3/Foto_c.jpg",
      "assets/proyecto_3/Foto_d.jpg",
      "assets/proyecto_3/Foto_e.jpg",
    ],
  },
  {
    title: "LABORATORY OF AFFECTIONS",
    description:
      "<p> Laboratory of affections for a migratory plant is an interactive installation between machine and natural object. </p>" +
      "<p> The piece consists of a female robotic hand driven by a stepper motor and a connecting rod system that allows the machine to simulate the act of a caress on a plant. </p>" +
      "<p> The plant, in this case an aloe vera of African and Central American origin, senses the presence of the hand on its bark through capacitive and proximity sensors. </p>" +
      "<p> The data obtained are processed by transforming a generative drawing that varies according to the distance and touch of the robotic hand. The piece remains silent and motionless, being activated for a few minutes by the viewer through a presence sensor. </p>" +
      "<p> This piece seeks to reflect on the concept of migration of plants, many of them sacred, associated with the influence of the human being that leads them to undertake this journey between continents, fictionalizing, through a small laboratory the search for reconnection, in a poetic and metaphorical way with the 'genetic memory' of the plant through a caress. </p>",
    images: [
      "assets/proyecto_4/Foto_a.jpg",
      "assets/proyecto_4/Foto_b.jpg",
      "assets/proyecto_4/Foto_c.jpg",
      "assets/proyecto_4/Foto_d.jpg",
      "assets/proyecto_4/Foto_e.jpg",
    ],
  },
  {
    title: "OF WASTE AND DUST",
    description:
      "<p> Of waste and dust continues my research on the relationship between subject and nature and the distancing of these products from the technological development that human beings have achieved. </p>" +
      "<p> Under the idea of progress, the human being is destroying wild natural spaces, constructing buildings and urban spaces that as a consequence generate problems of temperature, pollution and stress in the population. Thus, the human being is forced to build artificial green areas to alleviate this situation, often looking for fast-growing ornamental trees, which worsen the conditions they seek to improve. </p>" +
      "<p> To rebuild for the welfare of humanity what has been destroyed for the benefit of progress, is a recurring paradox for our species and evidences a state of control over nature, repressing every cycle and spontaneous act to maintain the order of a city. </p>" +
      "<p>Under this idea is born Of waste and dust, as a critique of the constant struggle between human beings and the chaos of nature. </p>",
    images: [
      "assets/proyecto_5/Foto_a.jpg",
      "assets/proyecto_5/Foto_b.jpg",
      "assets/proyecto_5/Foto_c.jpg",
      "assets/proyecto_5/Foto_d.jpg",
      "assets/proyecto_5/Foto_e.jpg",
    ],
  },
  {
    title: "LABORATORY FOR A MIGRATORY PLANT",
    description:
      "<p> This project arose during the Lisbon Soa Research Residency, in the Cactus Garden of the Estufa Fría Botanical Garden. </p>" +
      "<p> For this project I worked reflecting on migratory processes of non-native species located in the cactus garden of the Cold Stove greenhouse, in search of some species that had migrated forced by humans from South America. </p>" +
      "<p> Through a series of robotic hands, I made the assembly of a sound laboratory of gestures. A series of female plaster hands constantly caressing cacti from South America, taking the caress as an essential gesture of our Latin American ancestors, our indigenous peoples or our grandmothers, a ritual-poetic gesture, accompanied by the sound of a female voice, a grandmother reciting and telling them about their ancestors and their healing and sacred powers to these plants from a poetic and critical minara. </p>",
    images: [
      "assets/proyecto_6/Foto_a.jpg",
      "assets/proyecto_6/Foto_b.jpg",
      "assets/proyecto_6/Foto_c.jpg",
      "assets/proyecto_6/Foto_d.jpg",
      "assets/proyecto_6/Foto_e.jpg",
    ],
  },
  {
    title: "DEFORMATION AND EFFORT",
    description:
      "<p> Deformation and effort is part of the solo show ‘Resistance’ which follows a line of work around natural disasters that I have been investigating for several years at a technical-scientific, social, material and visual level, giving rise to a series of exercises of force, studies of movement and considerations about the link between disaster, technology and subject. </p>" +
      "<p> The exhibition comes from a local research, taking our country as a terrain whose geographical location gives rise to a constant of natural events transformed into disasters when they affect material and human life. Particularly, Resistencia is in a first stage of research related to earthquakes, as events that generate great changes, drying lakes through fissures, creating mountains, generating new landscapes, and on how these natural changes relate to the subject through disaster. </p>",
    images: [
      "assets/proyecto_7/Foto_a.jpg",
      "assets/proyecto_7/Foto_b.jpg",
      "assetsproyecto_7Foto_c.jpg",
      "assets/proyecto_7/Foto_d.jpg",
      "assets/proyecto_7/Foto_e.jpg",
    ],
  },
  {
    title: "RESISTANCE",
    description:
      "<p> Resistance consists of two halves of the same trunk that are forced to meet at a central point, as a result of the advance of one of its halves generated by a motorized movement. Upon reaching the center, one half puts resistance to the other, preventing the reunion of the parts. </p>" +
      "<p> With this piece I reflect on the intention of the subject, human being, to control the natural environment with the help of technological development and in turn, on how nature resists the intervention altering that development and generating from small to large misalignments or mismatches. </p>",
    images: [
      "assets/proyecto_8/Foto_a.jpg",
      "assets/proyecto_8/Foto_b.jpg",
      "assets/proyecto_8/Foto_c.jpg",
      "assets/proyecto_8/Foto_d.jpg",
      "assets/proyecto_8/Foto_e.jpg",
    ],
  },
  {
    title: "LANDSCAPE UNDER CONSTRUCTION",
    description:
      "<p> Landscape under construction is a series of three videos that record natural disasters generated with dioramas, reflecting on the constant state of change of the landscape in tune with natural ‘disasters’ such as earthquakes, volcanic eruptions, tsunamis, as well as disasters produced collaterally by the destruction of the natural environment at the hands of humans, floods, fires, droughts. </p>" +
      "<p>In the video, a landscape-village is buried under the ashes of a volcano, a forest sinks leaving a basin and some hills join together to form a mountain range. </p>",
    images: [
      "assets/proyecto_9/Foto_a.jpg",
      "assets/proyecto_9/Foto_b.jpg",
      "assets/proyecto_9/Foto_c.jpg",
      "assets/proyecto_9/Foto_d.jpg",
      "assets/proyecto_9/Foto_e.jpg",
    ],
  },
  {
    title: "GEOLOGICAL FAULT",
    description:
      "<p> Falla is in the middle of a research I have been doing for some years, on the subject as inhabitant of a territory and the relationship with its natural environment. How the subject, nature and the influence of technological development dialogue in this relationship, which has exponentially distanced them. </p>" +
      "<p> Fault plays with the negative sense of the word, understood as error and at the same time with its meaning in geology, where a geological fault is a crack, a fracture in the earth's surface, which is moving over the years, even more by tectonic movements. Chile has both characteristics, it is located on the Nazca and South American plates and Santiago is particularly on a fault, the San Ramon, which affects several districts of Santiago. In that sense, the exhibition reflects on how this fault for nature is not negative, but is a process of continuous change in order to release energy, mutate, move, being for humans a totally negative fact, with destructive character, houses, villages, cities, etc.. </p>" +
      "<p> Around that theme is born fault, which is composed of three pieces, being 'Medium intensity' the main one that gives rise to this exhibition, which consists of a series of three earthquake simulators that activate home alarms that are replicas of their originals found in field research. </p>",
    images: [
      "assets/proyecto_10/Foto_a.jpg",
      "assets/proyecto_10/Foto_b.jpg",
      "assets/proyecto_10/Foto_c.jpg",
      "assets/proyecto_10/Foto_d.jpg",
      "assets/proyecto_10/Foto_e.jpg",
    ],
  },
  {
    title: "REST AREA",
    description:
      "<p> Series of three sound devices that are activated when a bird stands on a rubber cord. The movement produced in the rope activates a motion sensor connected to an Arduino producing a sound like the trill of a bird in 8 Bits that is reproduced by speakers arranged inside a bird house. These pieces were made specifically for the exhibition 'At the bottom of the lake' Local Arte Contemporáneo, which inaugurated every two months a new exhibition on the previous one. In the space was the work of the artist Cristián Salineros who in addition to a sculpture arranged 4 Diamond Birds to dialogue with other works.  </p>",
    images: [
      "assets/proyecto_11/Foto_a.jpg",
      "assets/proyecto_11/Foto_b.jpg",
      "assets/proyecto_11/Foto_c.jpg",
      "assets/proyecto_11/Foto_d.jpg",
      "assets/proyecto_11/Foto_e.jpg",
    ],
  },
  {
    title: "OUTDATED LABORATORY",
    description:
      "<p> In the Forestal Park, with its environment of exotic deciduous trees that inhabit Chile, with all the problems they present for the city and its environment, is located Caducous laboratory, a laboratory fiction for the growth of a Quillay tree, where there are elements simulating nature that promote its development through light and water, as well as technological elements for growth observation </p>" +
      "<p> This laboratory fiction plays with the absurd, considering that the Quillay is a native Chilean tree that grows without the need for human intervention, but in the context that we are living today as a society, creating more and more hard squares or green spaces with fast-growing exotic trees, the care of growth and protection of the Chilean tree has become a reality. </p>",
    images: [
      "assets/proyecto_12/Foto_a.jpg",
      "assets/proyecto_12/Foto_b.jpg",
      "assets/proyecto_12/Foto_c.jpg",
      "assets/proyecto_12/Foto_d.jpg",
      "assets/proyecto_12/Foto_e.jpg",
    ],
  },
  {
    title: "REENCOUNTER",
    description:
      "<p> Reencounter, arises from the discovery of two halves of the same stone found in distant places on a beach on the Chilean coast. The first part I saw with half of the body buried in the sand, it was only half a stone and because of its common aspect it did not call my attention. The second part I found at the end of a large staircase that climbed to the top of a ravine, and seeing the great similarity with the broken stone buried in the sand, I went to the encounter with its other half in my hand. </p>" +
      "<p> Reencounter consists in the manipulation of the two parts of that stone, in which each half is driven by a motor that generates a back and forth movement, which produces the distancing of the parts and their meeting in the center of the piece, where one half chases the other and sometimes they meet, forming for a few seconds the complete stone. </p>",
    images: [
      "assets/proyecto_13/Foto_a.jpg",
      "assets/proyecto_13/Foto_b.jpg",
      "assets/proyecto_13/Foto_c.jpg",
      "assets/proyecto_13/Foto_d.jpg",
      "assets/proyecto_13/Foto_e.jpg",
    ],
  },
  {
    title: "THE NATURE OF EMPTINESS",
    description:
      "<p> The nature of emptiness corresponds to an investigation on the unfinished spaces that are left in gentrified areas, buildings that because they are not inhabited are diminishing their physical conditions until their destruction, becoming vacant spaces or green lands that are left to their fate. </p>" +
      "<p> In the process of the project, more attention is paid to the green spaces that are born and their appropriation by the neighbors, many times taking those unbuilt lands and building them in squares or in some other common area. With this work I intend to reflect on the importance of these spaces of distraction and placidity and the effects of nature on the individual, but also on how cities, towns, villages, localities, etc. as they become increasingly urbanized, with the desire for greater connectivity and prosperity, are losing these green places and are becoming disconnected from nature, having to resort to creating artificial green areas to have welfare areas, becoming a series of destruction and construction. Thus, the work corresponds to three pieces that fictionalize environmental factors on natural elements, dialoguing between the green area that has to be rebuilt within a highly urbanized land and the vacant site where neighbors build common spaces with their own hands. </p>",
    images: [
      "assets/proyecto_14/Foto_a.jpg",
      "assets/proyecto_14/Foto_b.jpg",
      "assets/proyecto_14/Foto_c.jpg",
      "assets/proyecto_14/Foto_d.jpg",
      "assets/proyecto_14/Foto_e.jpg",
    ],
  },
];

// Función para abrir el lightbox y cargar imágenes
function abrirLightbox(index) {
  // Limpiar el contenido anterior
  LightboxImgContainer.innerHTML = "";
  //Mostrar la descripción
  LightboxTexto.innerHTML = proyectos[index].description;

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
