document.addEventListener('DOMContentLoaded', function() {

let protocolo;
if (window.location.protocol === "https:") {
  protocolo = "https";
} else {
  protocolo = "http";
}

const dominio = `${protocolo}://${window.location.host}/api/libros`;

  fetch(dominio)
  .then(response => response.json())
  .then(data => {
    // Generar los elementos de diapositiva en Swiper
    const swiperSlides = data.map(item => {
      return `
        <div class="swiper-slide">
          <img class="img_libro" src="imagenes/books/${item.url_imagen}.jpg" alt="Imagen">
          <h4 class="titulo">${item.nombre}</h4>
          <p class="precio">$${item.precio}</p>
        </div>
      `;
    });

    // Insertar los elementos de diapositiva en el contenedor de Swiper
    const swiperContainer = document.querySelector('.swiper-wrapper');
    swiperContainer.innerHTML = swiperSlides.join('');

    // Inicializar Swiper y otros parámetros de configuración
    const swiper = new Swiper('.swiper', {
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
      },

      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },


      breakpoints: {
          620: {
              slidesPerView: 1,
              spaceBetween: 20,
          },
          680: {
              slidesPerView: 1,
              spaceBetween: 40,
          },
          920: {
              slidesPerView: 2,
              spaceBetween: 60,
          },
          1240: {
              slidesPerView: 2,
              spaceBetween: 80,
          },
      }
  });
  })
  .catch(error => {
    console.error('Error al obtener los datos de la API:', error);
  });

});
