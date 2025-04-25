'use strict'

////Impide enviar formulario vacío, muestra texto en inglés.
function validateForm() {
    var x = document.forms["Formulario"]["Primernombre"].value;
    var y = document.forms["Formulario"]["Asunto"].value;
    if (x,y == "") {
      alert("Name and subject must be filled out");
      return false;
    }
  }