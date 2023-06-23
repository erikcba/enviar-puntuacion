const calificacionContenedor = document.getElementById("calificacion-contenedor");
const respuestaEnviadaContenedor = document.getElementById("respuesta-enviada-contenedor");

const calificacionBoton = document.querySelectorAll("#calificacion-boton");
const calificacionSubmit = document.getElementById("calificacion-submit");

let numeritoElegido = document.getElementById("numerito-elegido");

calificacionBoton.forEach(boton => {
    boton.addEventListener("click", (e) => {
        calificacionBoton.forEach(boton => boton.classList.remove("checked"))
        e.currentTarget.classList.add("checked");
    })
})


// Misma funcionalidad que la de arriba pero de otra forma

// calificacionContenedor.addEventListener("click", (e) => {
//     if (e.target.classList.contains("calificacion-boton")) {
//       calificacionBoton.forEach(boton => boton.classList.remove("checked"));
//       e.target.classList.add("checked");
//     }
//   });

calificacionSubmit.addEventListener("click", enviarRespuesta);
  
function enviarRespuesta() {
    const calificacionSeleccionada = document.querySelector(".calificacion-boton.checked");

    if (calificacionSeleccionada) {

        calificacionContenedor.classList.add("disabled");
        respuestaEnviadaContenedor.classList.remove("disabled");

    } else {
        alert("Elige una opción");
    }

    numeroElegido()
}

function numeroElegido() {

    const calificacionSeleccionada = document.querySelector(".calificacion-boton.checked");

    numeritoElegido.innerText = calificacionSeleccionada.innerText
}