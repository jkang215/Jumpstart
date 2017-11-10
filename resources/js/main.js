//Starts the slick carousel upon document ready
$(document).ready(function(){
  $('.carousel').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    focusOnSelect: false,
    pauseOnHover: false,
    slidesToScroll: 1
  });
});
