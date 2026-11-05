/* Sen Tsuki — comportamiento mínimo: menú móvil, visor de fotos y enlace de Instagram. */
(function () {
  "use strict";

  // Menú en pantallas pequeñas
  var boton = document.querySelector(".nav-toggle");
  var menu = document.getElementById("menu");
  if (boton && menu) {
    boton.addEventListener("click", function () {
      var abierto = menu.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Enlace de Instagram: el bloque se muestra solo si tiene una URL en data-url
  var ig = document.getElementById("instagram");
  if (ig) {
    var url = (ig.getAttribute("data-url") || "").trim();
    if (url) {
      var enlace = ig.querySelector("a");
      if (enlace) enlace.setAttribute("href", url);
      ig.hidden = false;
    }
  }

  // Visor de fotos (clic para ampliar)
  var visor = document.getElementById("visor");
  if (visor && typeof visor.showModal === "function") {
    var img = visor.querySelector("img");
    var pie = visor.querySelector(".visor-texto");
    document.querySelectorAll("button.zoom").forEach(function (b) {
      b.addEventListener("click", function () {
        var origen = b.querySelector("img");
        img.src = origen.currentSrc || origen.src;
        img.alt = origen.alt;
        pie.textContent = b.getAttribute("data-leyenda") || origen.alt;
        visor.showModal();
      });
    });
    visor.addEventListener("click", function (e) {
      if (e.target === visor || e.target.hasAttribute("data-cerrar")) visor.close();
    });
  } else {
    // Sin <dialog>: los botones simplemente no amplían
    document.querySelectorAll("button.zoom").forEach(function (b) { b.style.cursor = "default"; });
  }

  // Año del pie
  var anio = document.getElementById("anio");
  if (anio) anio.textContent = new Date().getFullYear();
})();
