(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });


/* 2. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };


/* 3. MainSlider-1 */
    function mainSlider() {
      var BasicSlider = $('.slider-active');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        fade: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-shift-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-shift-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();



/* 4. Testimonial Active*/
  var testimonial = $('.h1-testimonial-active');
    if(testimonial.length){
    testimonial.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:true,
        loop:true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrow:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]
      });
    }


/* 5. Gallery Active */
    var client_list = $('.gallery-active');
    if(client_list.length){
      client_list.owlCarousel({
        slidesToShow: 8,
        slidesToScroll: 1,
        loop: true,
        autoplay:true,
        speed: 3000,
        smartSpeed:2000,
        nav: false,
        dots: false,
        margin: 0,

        autoplayHoverPause: true,
        responsive : {
          0 : {
            nav: false,
            items: 2,
          },
          768 : {
            nav: false,
            items: 8,
          }
        }
      });
    }

/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7.  Custom Sticky Menu  */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
      } else {
        $(".header-sticky").addClass("sticky-bar");
      }
    });

    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
          $(".header-sticky").removeClass("sticky");
      } else {
          $(".header-sticky").addClass("sticky");
      }
    });



/* 8. sildeBar scroll */
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '300', // Distance from top before showing element (px)
      topSpeed: 300, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      animationInSpeed: 200, // Animation in speed (ms)
      animationOutSpeed: 200, // Animation out speed (ms)
      scrollText: '<i class="ti-arrow-up"></i>', // Text for element
      activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });


/* 9. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();

/* 11. Datepicker */
    
// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }
      
/* 14. counterUp*/
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });

  //Another popUp     
        var popUp = $('.menorie-icon');
        if(popUp.length){
          popUp.magnificPopup({
            type: 'image',
            gallery:{
              enabled:true
            }
          });
        }
  // 

//Brand Active
  $('.brand-active').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:true,
    speed: 1000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



})(jQuery);

//reservation 

$(document).ready(function() {
  $('.main_banner').owlCarousel({
       loop:true,
   autoplay: true,
       margin:0,
       nav:false,
       center: true,
       lazyLoad:true,
       autoWidth:false,
       responsiveClass:true,
       responsive:{
           0:{
               items:1
           },
           600:{
               items:1
           },
           1000:{
               items:1
           }
       }
   });
 $('#city').niceSelect();
});
$(document).ready(function() {
   $('.places').owlCarousel({
       loop:true,
   autoplay: true,
       margin:0,
       nav:true,
       center: true,
       lazyLoad:true,
       autoWidth:false,
       responsiveClass:true,
       responsive:{
           0:{
               items:1
           },
           600:{
               items:2
           },
           1000:{
               items:5	
           }
       }
   });
});

/********** Panel_Dropdown ***********/
function close_panel_dropdown() {
 $(".panel-dropdown").removeClass("active")
}
$(".panel-dropdown a").on("click", function (event) {
 if ($(this).parent().is(".active")) {
   close_panel_dropdown()
 } else {
   close_panel_dropdown();
   $(this).parent().addClass("active")
 };
 event.preventDefault()
});
var mouse_is_inside = false;
$(".panel-dropdown").hover(function () {
 mouse_is_inside = true
}, function () {
 mouse_is_inside = false
});
$("body").mouseup(function () {
 if (!mouse_is_inside) {
   close_panel_dropdown()
 }
});


/********** Quality ***********/
function qtySum(){
 var arr = document.getElementsByName('qtyInput');
 var tot=0;
 for(var i=0;i<arr.length;i++){
   if(parseInt(arr[i].value))
   tot += parseInt(arr[i].value);
 }
 var cardQty = document.querySelector(".qtyTotal");
 cardQty.innerHTML = tot;
} 
qtySum();

$(function() {
  $(".qtyButtons input").after('<div class="qtyInc"></div>');
  $(".qtyButtons input").before('<div class="qtyDec"></div>');
  $(".qtyDec, .qtyInc").on("click", function() {

   var $button = $(this);
   var oldValue = $button.parent().find("input").val();

   if ($button.hasClass('qtyInc')) {
     var newVal = parseFloat(oldValue) + 1;
   } else {					 
     if (oldValue > 0) {
       var newVal = parseFloat(oldValue) - 1;
     } else {
       newVal = 0;
     }
   }

   $button.parent().find("input").val(newVal);
   qtySum();
   $(".qtyTotal").addClass("rotate-x");
  });

  function removeAnimation() { $(".qtyTotal").removeClass("rotate-x"); }
  const counter = document.querySelector(".qtyTotal");
  counter.addEventListener("animationend", removeAnimation);
});

$(function() {
 'use strict';
 $('input[name="dates"]').daterangepicker({
   autoUpdateInput: false,
   locale: {
     cancelLabel: 'Clear'
   }
 });
 $('input[name="dates"]').on('apply.daterangepicker', function(ev, picker) {
   $(this).val(picker.startDate.format('MM-DD-YYYY') + ' > ' + picker.endDate.format('MM-DD-YYYY'));
 });
 $('input[name="dates"]').on('cancel.daterangepicker', function(ev, picker) {
   $(this).val('');
 });
});

/********** Side_Calender ***********/
mobiscroll.setOptions({
  locale: mobiscroll.localeFr,     // Specify language like: locale: mobiscroll.localePl or omit setting to use default
  theme: 'ios',                    // Specify theme like: theme: 'ios' or omit setting to use default
  themeVariant: 'light'            // More info about themeVariant: https://docs.mobiscroll.com/5-1-0/javascript/calendar#opt-themeVariant
});

mobiscroll.datepicker('#demo-date', {
  controls: ['calendar'],          // More info about controls: https://docs.mobiscroll.com/5-1-0/javascript/calendar#opt-controls
  display: 'inline',               // Specify display mode like: display: 'bottom' or omit setting to use default
  min: '1920-01-01',               // More info about min: https://docs.mobiscroll.com/5-1-0/javascript/calendar#opt-min
  max: '2050-01-01'                // More info about max: https://docs.mobiscroll.com/5-1-0/javascript/calendar#opt-max
});

mobiscroll.datepicker('#demo-datetime', {
  controls: ['calendar', 'time'],  // More info about controls: https://docs.mobiscroll.com/5-1-0/javascript/calendar#opt-controls
  display: 'inline',               // Specify display mode like: display: 'bottom' or omit setting to use default
  min: '2000-01-01T12:00',         // More info about min: https://docs.mobiscroll.com/5-1-0/javascript/calendar#opt-min
  max: '2050-01-01T12:00'          // More info about max: https://docs.mobiscroll.com/5-1-0/javascript/calendar#opt-max
});