//Este evento se activa cuando el DOM está completamente cargado, 
//lo que asegura que el código JavaScript se ejecute después de que 
//todos los elementos HTML estén disponibles para ser manipulados
document.addEventListener('DOMContentLoaded', function () {
  //Selecciona el elemento HTML que contiene todas las diapositivas del carrusel
  const carouselInner = document.querySelector('.carousel-inner');
//Selecciona todos los elementos HTML que representan las diapositivas individuales del carrusel.
  const carouselItems = document.querySelectorAll('.carousel-item');
// Seleccionan los botones de control para navegar hacia la diapositiva anterior y siguiente respectivamente.
  const prevBtn = document.querySelector('.carousel-control-prev');
  const nextBtn = document.querySelector('.carousel-control-next');
//Esta variable mantiene un seguimiento del índice de la diapositiva actual que se muestra en el carrusel
  let currentIndex = 0;
//se define para mostrar una diapositiva específica según su índice
  function showSlide(index) {
  //para desplazar horizontalmente el contenido del carrusel y mostrar la diapositiva deseada.
    carouselInner.style.transform = `translateX(-${index * 100}%)`;
  }
//se activan cuando se hace clic en los botones de control para la diapositiva anterior y siguiente respectivamente
  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      showSlide(currentIndex);
    }
  });
  nextBtn.addEventListener('click', function () {
    if (currentIndex < carouselItems.length - 1) {
      currentIndex++;
      showSlide(currentIndex);
    }
  });
});