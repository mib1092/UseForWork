
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

  $('.similar-posts .templates-list').owlCarousel({
      loop: true,
      items:3,
      navigation: true  ,
      navContainer: '.similar-posts .slider'
  });

});