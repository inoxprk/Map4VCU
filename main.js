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
  },
  touchStartPreventDefault: false
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
  },
  touchStartPreventDefault: false
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
  },
  touchStartPreventDefault: false
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

  let activeSlideHeight 

  $('.dropdown').on('click', function () {
    activeSlideHeight = $(this).find('.swiper-slide-active').height();
    console.log(activeSlideHeight);

    $(this).find('.swiper-wrapper').height(activeSlideHeight + 24);
  });

  $('.swiper-prev, .swiper-next, .swiper-pagination').on('click', function () {
    activeSlideHeight = $(this).closest('.content').find('.swiper-slide-active').height();
    console.log(activeSlideHeight);

    $(this).closest('.content').find('.swiper-wrapper').height(activeSlideHeight + 24);
  });

  $('.swiper-wrapper').on('mouseup', function () {
    let activeSlideHeight = $(this).closest('.content').find('.swiper-slide-active').height();
    console.log(activeSlideHeight);

    $(this).closest('.content').find('.swiper-wrapper').height(activeSlideHeight + 24);
  });

  $('.swiper-wrapper').on('pointerup', function () {
    setTimeout(() => {
      let activeSlideHeight = $(this).closest('.content').find('.swiper-slide-active').height();
      console.log(activeSlideHeight);
  
      $(this).closest('.content').find('.swiper-wrapper').height(activeSlideHeight + 24);
    }, 100);
  });
  
  
});

// Get today's date
var today = new Date();

// Set the target date (12/29/2021)
var targetDate = new Date('2024-03-01');

// Compare today's date with the target date
if (today > targetDate) {
  // If today's date is later than 12/29/2021

  // Get all elements with class 'dropdown'
  var dropdownElements = document.querySelectorAll('.dropdown');

  // Check if there is at least one element
  if (dropdownElements.length > 0) {
    // Get the first element
    var firstDropdown = dropdownElements[0];

    // Remove the first element
    firstDropdown.parentNode.removeChild(firstDropdown);
  }
}
