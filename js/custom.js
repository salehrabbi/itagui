(function ($) {

    //Function to animate slider captions 
    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';

        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }

    //Variables on page load 
    var $myCarousel = $('#myCarousel'),
        $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel 
    $myCarousel.carousel();

    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    //Pause carousel  
    $myCarousel.carousel('pause');


    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });





})(jQuery);


$('.owl-carousel-1').owlCarousel({
    nav: true,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    loop:true,
    margin:10,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:2,
            nav:false,
            loop: false
        },
        480:{
            items:3,
            nav:false,
            loop: false
        },
        576:{
            items:3,
        },
        768:{
            items:4,
        },
        992:{
            items:5,
        }
    }
})



$('.owl-carousel-2').owlCarousel({
    nav: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    rewind: true,
    navText: ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
    loop:true,
    margin:10,
    responsiveClass:true,
    
    responsive:{
        0:{
            items:2,
            nav:false,
            loop: false
        },
        480:{
            items:3,
            nav:false,
            loop: false
        },
        576:{
            items:3,
        },
        768:{
            items:4,
        },
        992:{
            items:6,
        }
    }
})





$(document).ready(function () {
    $(".social-top-2 #font-resize-control").click(function () {
        $(".social-top-2 .font-resize").toggleClass("active");
        $(".social-top-2 #google_translate_element").removeClass("active");
    });
    $(".social-top-2 #translate").click(function () {
        $(".social-top-2 #google_translate_element").toggleClass("active");
        $(".social-top-2 .font-resize").removeClass("active");
    });
    $(".font-resize .fa-plus").click(function () {
        var fontSize = parseInt($(this).css("font-size"));
        fontSize = fontSize + 1 + "px";
        $('html').css({
            'font-size': fontSize
        });
    });
    $(".font-resize .fa-minus").click(function () {
        var fontSize = parseInt($(this).css("font-size"));
        fontSize = fontSize - 1 + "px";
        $('html').css({
            'font-size': fontSize
        });
    });
    $(".black-white").click(function () {
        $("section,footer,.navbar-collapse,.navbar-brand,.header-top").toggleClass("gray");
        $(".goog-te-banner-frame").toggleClass("translate-posotion");
    });
    
    
    $(".social-top-3 #search-control").click(function () {
        $(".social-top-3 .search-top-2").toggleClass("active");
        $(".social-top-3 .font-resize").removeClass("active");
        $("#google_translate_element").removeClass("active");
    });
    $(".social-top-3 #font-resize-control").click(function () {
        $(".social-top-3 .font-resize").toggleClass("active");
        $(".social-top-3 .search-top-2").removeClass("active");
        $("#google_translate_element").removeClass("active");
    });
    $(".social-top-3 #translate").click(function () {
        $("#google_translate_element").toggleClass("active");
        $(".social-top-3 .search-top-2").removeClass("active");
        $(".social-top-3 .font-resize").removeClass("active");
    });
    
    
    
    
    
});


function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'es'}, 'google_translate_element');
}


$(document).scroll(function (e) {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > 0) {
        console.log(scrollTop);
        $('.main-header').addClass('scroll');
        $(".social-top-2 .font-resize").removeClass("active");
    } else {
        $('.main-header').removeClass('scroll');
        $(".social-top-3 .search-top-2").removeClass("active");
       $(".social-top-3 .font-resize").removeClass("active");
    }
});



//
//var lastScrollTop = 0;
//$(window).scroll(function(event){
//   var st = $(this).scrollTop();
//   if (st > lastScrollTop){
//       // downscroll code
//       $('.main-header').addClass('scroll').removeClass('scrollup');
//       $(".social-top-2 .font-resize").removeClass("active");
//       
//   } else {
//      // upscroll code
//       $('.main-header').removeClass('scroll').addClass('scrollup');
//       $(".social-top-3 .search-top-2").removeClass("active");
//       $(".social-top-3 .font-resize").removeClass("active");
//   }
//   lastScrollTop = st;
//});



