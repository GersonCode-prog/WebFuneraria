const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links'); // Agregué un punto antes de 'nav-links'

menuBtn.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu');
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    }

    document.querySelectorAll('[name="slider"]').forEach((radio, index) => {
      radio.addEventListener('change', () => {
        currentSlide = index;
        showSlide(index);
      });
    });

    // Añade funcionalidad para cambiar automáticamente los slides cada cierto tiempo
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      document.getElementById(`slide${currentSlide + 1}`).checked = true;
      showSlide(currentSlide);
    }, 5000); // Cambiar cada 5 segundos (ajusta según tus necesidades)
  });
