$(document).ready(function() {
  $('.dropdown-title').click(function() {
      // Find the parent '.dropdown' of the clicked '.dropdown-title'
      let content = $(this).next('.content');
      
      // Toggle the 'dropdown-toggle' class on the found '.dropdown'
      content.toggleClass('collapsed');
      $(this).toggleClass('collapsed');
  });
});

new Swiper('.scooters.swiper-container', {
  autoplay: false, 
  loop: true 
});
