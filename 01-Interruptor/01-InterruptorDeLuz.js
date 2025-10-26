/*

🎯 El Reto: El Interruptor de Luz
La Misión: Haz una página con un solo botón.

Las Reglas:

La página empieza "a oscuras" (puedes poner un div grande de color gris). El botón dice "Encender".

Cuando haces clic en "Encender", el fondo se pone amarillo y el texto del botón cambia a "Apagar".

Si le vuelves a dar clic, el fondo se pone gris otra vez y el botón dice "Encender".

*/

const ROOM = document.querySelector('.room')
const BTN = document.querySelector('.interruptor')

let estaEncendido = false;

BTN.addEventListener('click', function () {
    estaEncendido = !estaEncendido
    roomColor()
})

function roomColor(){
    if (!estaEncendido){
        ROOM.style.backgroundColor = 'rgb(90, 89, 89)'
        BTN.innerHTML = "Encender"
        BTN.style.backgroundColor = 'rgb(90, 89, 89)'
    }else {
        ROOM.style.backgroundColor = 'yellow'
        BTN.innerHTML = "Apagar"
        BTN.style.backgroundColor = 'yellow'
    }
}

window.onload = roomColor