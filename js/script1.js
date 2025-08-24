// Obtener los elementos del DOM
var modal = document.getElementById("myModal");
var btn = document.getElementById("openBtn");
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el botón, se abre el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando se hace clic en el botón de cerrar (x), se cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando se hace clic fuera del contenido del modal, se cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}