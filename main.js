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

$(document).ready(function() {
  $('.dropdown-title').click(function() {
      // Find the parent '.dropdown' of the clicked '.dropdown-title'
      // let content = $(this).next('.content');
      let content = $(this).closest('.dropdown');
      
      // Toggle the 'dropdown-toggle' class on the found '.dropdown'
      content.toggleClass('collapsed');
      $(this).toggleClass('collapsed');
  });
});


