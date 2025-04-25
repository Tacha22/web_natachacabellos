'use strict'

//Impide enviar formulario vacío. 
function validateForm() {
    var x = document.forms["Formulario"]["Primernombre"].value;
    var y = document.forms["Formulario"]["Asunto"].value;
    if (x,y == "") {
      alert("Nombre y asunto deben ser completados");
      return false;
    }
  }