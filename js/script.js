// script.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Sitio cargado correctamente.");
  
    // Efecto simple de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  });
  