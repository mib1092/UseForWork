
$(document).ready(function() {
  $('a[href="#"]').click(function (e){
    e.preventDefault();
  });

  // menu

  $('.burger').click(function() {
  	$('.navbar, .burger').toggleClass('active');
    $('.backdrop').toggle();
  });

  $('.backdrop').click(function(event) {
     $('.navbar, .burger').removeClass('active');
     $(this).fadeOut();
  });

  // testimonial slider
  $('.testimonial-slider').owlCarousel({
      loop: true,
      items:1,
      navigation: true  
  });

  $('.similar-posts .templates-list').slick({
      slidesToShow: 3,
      speed: 500,
      slidesToScroll: 3,
      arrows: true,
      infinite: false
  });

   $('.gallery .slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      infinite: false,
      asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    asNavFor: '.gallery .slider',
    focusOnSelect: true
  });

});