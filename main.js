new Swiper('.scooters .swiper-container', {
  autoplay: false,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".scooters .swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: '.scooters .swiper-prev',
    nextEl: '.scooters .swiper-next'
  }
});

new Swiper('.grtc .swiper-container', {
  autoplay: false,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".grtc .swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: '.grtc .swiper-prev',
    nextEl: '.grtc .swiper-next'
  }
});

new Swiper('.carpool .swiper-container', {
  autoplay: false,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".carpool .swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: '.carpool .swiper-prev',
    nextEl: '.carpool .swiper-next'
  }
});

// JQuery
$(document).ready(function () {
  $('.dropdown-title').click(function () {
    // Find the parent '.dropdown' of the clicked '.dropdown-title'
    // let content = $(this).next('.content');
    let content = $(this).closest('.dropdown');

    // Toggle the 'dropdown-toggle' class on the found '.dropdown'
    content.toggleClass('collapsed');
    $(this).toggleClass('collapsed');
  });
});