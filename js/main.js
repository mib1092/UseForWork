
//Create expanding searchbox
$(document).ready(function(){

    var submitIcon = $('.searchbox-icon'),
        inputBox = $('.searchbox-input'),
        searchBox = $('.searchbox'),
        searchBoxWrap = $('.searchbox-wrap'),
        bars = $('.burger'),

        isOpen = false;
        
    function openSearch(){
        searchBox.addClass('searchbox-open');
        searchBoxWrap.addClass('searchbox-open');
        inputBox.show();
        isOpen = true;
    }
    
    function closeSearch(){
        searchBox.removeClass('searchbox-open');
        searchBoxWrap.removeClass('searchbox-open');
        isOpen = false;
    }

    submitIcon.click(function(e){
        e.preventDefault();
        if(isOpen == false){
           openSearch();
        }else {
            closeSearch();
        }
    });

    bars.click(function(){
        if(isOpen == true){
            closeSearch();
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
        } 
    });


    submitIcon.mouseup(function(){
            return false;
        });
    searchBox.mouseup(function(){
            return false;
        });

});

function buttonUp(){
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
        $('.searchbox-icon').css('display','none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display','block');
    }
}


$(document).ready(function() {
  $('a[href="#"]').click(function (e){
    e.preventDefault();
  });

  // menu

  $('.burger').click(function() {
  	$('.main-nav, .backdrop').toggleClass('active');
  });

  $('.backdrop').click(function(event) {
     $('.main-nav, .backdrop').removeClass('active');
  });

  // sidebar toggle
  function sidebarToggle(){
    if($(window).width() < 1150){
      $('.page-sidebar .categories h4').click(function(event) {
         $('.page-sidebar .categories ul').toggle(400);
         console.log(11);
      });
    }
  }

  sidebarToggle();

 



  // testimonial slider
  $('.testimonial-slider').owlCarousel({
      loop: false,
      items:1
  });

  $('.similar-posts .templates-list').slick({
      slidesToShow: 3,
      speed: 500,
      slidesToScroll: 3,
      arrows: true,
      infinite: false,
       responsive: [
        {
          breakpoint: 1060,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 200
          } 
        } ]
  });

   $('.gallery .slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      infinite: false,
      asNavFor: '.slider-nav',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 380,
          settings: {
            arrows:false
          }
        }]
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    asNavFor: '.gallery .slider',
    focusOnSelect: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }]
  });

$('.gallery .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.slider-nav .slick-slide').removeClass('slick-current');
  $($('.slider-nav .slick-slide')[nextSlide]).addClass('slick-current');
});

});


