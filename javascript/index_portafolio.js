'use strict'

// Portafolio. Al hacer click sobre el texto se abre un popup con el enlace a descarga.
const cabeceraBtn = document.querySelector('.cabecera-btn')
const cabecerapopUp = document.querySelector('.cabecera-popUp')
const cabeceraCierre = document.querySelector('.cabecera-cierre')

cabeceraBtn.addEventListener('click', function(){
    cabecerapopUp.style.display = 'block'
 })
cabecerapopUp.style.display = 'none'

cabeceraCierre.addEventListener('click', function(){
    cabecerapopUp.style.display = 'none'
})

