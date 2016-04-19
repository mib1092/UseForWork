
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
      asNavFor: '.slider-nav',
      focusOnSelect: true
  });

  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: false,
    infinite: false,
    asNavFor: '.gallery .slider',
    focusOnSelect: true
  });

$('.gallery .slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.slider-nav .slick-slide').removeClass('slick-current');
  $($('.slider-nav .slick-slide')[nextSlide]).addClass('slick-current');
});

});


