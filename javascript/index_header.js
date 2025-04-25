'use strict'

//Deplega el menú hacia abajo.
const cabeceraHam = document.querySelector('.cabecera-hamburguesa')
const cabeceraNav = document.querySelector('.cabecera-nav')

cabeceraHam.addEventListener('click', function(){
    cabeceraNav.classList.toggle('isActive')
 })