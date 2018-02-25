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