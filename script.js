function agregarServicio(button) {
    const servicioItem = button.closest(".servicio-item");
    const servicio = servicioItem.getAttribute("data-servicio");
    const precio = servicioItem.getAttribute("data-precio");
    
    const cajaSeleccion = document.getElementById("caja-seleccion");
    const servicioSeleccionado = document.createElement("div");
    servicioSeleccionado.innerHTML = `
        <p>${servicio} - Precio: ${precio}</p>
    `;
    cajaSeleccion.appendChild(servicioSeleccionado);

    
}
const slideControls = document.querySelectorAll('.slide-control');

slideControls.forEach(control => {
    control.addEventListener('click', () => {
        const currentSlide = document.querySelector('.slide-open:checked');
        let targetSlide;

        if (control.classList.contains('prev')) {
            targetSlide = currentSlide.previousElementSibling || currentSlide.parentElement.lastElementChild;
        } else if (control.classList.contains('next')) {
            targetSlide = currentSlide.nextElementSibling || currentSlide.parentElement.firstElementChild;
        }

        targetSlide.checked = true;
    });
});

$(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});


// Team carousel
$(".team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function updateCarousel() {
        const transformValue = -currentIndex * 100 + '%';
        carousel.style.transform = 'translateX(' + transformValue + ')';
    }

    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSlides - 1;
        }
        updateCarousel();
    }

    setInterval(nextSlide, 3000); // Cambia de slide cada 3 segundos (ajusta según sea necesario)
});
(function ($) {
    "use strict";
 // Service carousel
 $(".service-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});


// Team carousel
$(".team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        }
    }
});


// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
    center: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: true,
    loop: true,
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

})(jQuery);

