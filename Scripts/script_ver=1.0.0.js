;(function($){

    "use strict";

    /* ---- Textillate ---- */
    $('.til').textillate({

        // enable looping
        loop: true,
        in : {
            effect: 'fadeIn',
            delayScale: 1.5,
            delay: 150,
            shuffle: true
        },
        out: {
            effect: 'fadeOut',
            delayScale: 1.5,
            delay: 150,
            shuffle: true
        }
    });

    /*--------- Loader -----------*/
    $(window).load(function() {
        $("#loader").delay(2000).fadeOut("slow");
    });
    
    /* ---- Owl Carousel Testimonial ---- */
    $(".testi-holder").owlCarousel({
        singleItem: true,
        navigationText: [
            '<span class="ion-ios7-arrow-left"></span>',
            '<span class="ion-ios7-arrow-right"></span>'
        ],
        navigation: true,
        pagination: false,
        transitionStyle: "fade"
    });

    /* ---- Owl Carousel Skill ---- */
    $(".skill-holder").owlCarousel({
        singleItem: true,
        navigationText: [
            '<span class="ion-ios7-arrow-left"></span>',
            '<span class="ion-ios7-arrow-right"></span>'
        ],
        navigation: true,
        pagination: false,
        addClassActive : true,
        afterMove: function() {
            if($(this).find('active')) {
                $('.active .skillbar').each(function() {
                    if (!$(this).find('.skillbar-bar').hasClass('to-animate')) {
                        $(this).find('.skillbar-bar').addClass('to-animate');
                        animateSkill(950);
                    }
                });
            }
        }
    });

    
    /* ---- Owl Carousel Portfolio ---- */
    $(".port-holder").owlCarousel({
        items: 3,
        itemsDesktop: false,
        itemsDesktopSmall: [991, 2],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: false, //[479,1],
        navigationText: [
            '<span class="ion-ios7-arrow-left"></span>',
            '<span class="ion-ios7-arrow-right"></span>'
        ],
        navigation: true,
        pagination: false
    });

    /* ---- Owl Carousel Blog ---- */
    $(".article-holder").owlCarousel({
        items: 3,
        itemsDesktop: false,
        itemsDesktopSmall: [991, 2],
        itemsTablet: [768, 1],
        itemsTabletSmall: false,
        itemsMobile: false, //[479,1],
        navigationText: [
            '<span class="ion-ios7-arrow-left"></span>',
            '<span class="ion-ios7-arrow-right"></span>'
        ],
        navigation: true,
        pagination: false
    });

    /* ---- Magnific Popup ---- */
    $('.popup-it').magnificPopup({
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-ios7-close-empty"></i></button>'
    });

    /* ---- Magnific Popup Gallery---- */
    $('.popup-gallery').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        },
        closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-ios7-close-empty"></i></button>'
    });

    /* ---- Gallery Load More---- */
    $(function () {
      $(".gallery-item").slice(0, 4).show();
      $(".btn-gallery-load").on('click', function (e) {
          e.preventDefault();
          $(".gallery-item:hidden").slice(0, 4).fadeIn();
          if ($(".gallery-item:hidden").length == 0) {
              $(".btn-gallery-load").addClass("disabled");
          }
          $('html,body').animate({
                scrollTop: $(this).offset().top
          }, 1000);
      });
    });

    /* ---- Magnific Bug Workaround ---- */
    $(document).on('click', '.mfp-close', function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    /* ---- Facts Counter ---- */
    $('.counter-data').counterUp({
        delay: 10,
        time: 2000
    });

    /* ---- Menu Toggle Class ---- */
    $('.menu-holder').on('click', function() {
        $('.menu').toggleClass('menu-active');
    });

    /* ---- One Page Nav ---- */
    $('.menu-ul').onePageNav({
        currentClass: 'current',
        easing: 'swing'
    });

    /* ---- Skill Scroll To Run ---- */
    var loop = 0;

    var oTop =  ( $('.skill-area').is('*') ? $('.skill-area').offset().top - window.innerHeight : 0);

    $(window).on('scroll', function() {

        var pTop = $(window).scrollTop();

        if (pTop >= oTop && loop == 0) {
            animateSkill(950);
        }
    });

    function animateSkill(delay) {
        $('.skillbar').each(function() {

            $(this).find('.to-animate').animate({

                width: $(this).attr('data-percent')

            }, delay);

            delay += 350;
        });

        loop = 1;
    }

    /* ---- WOW JS ---- */
    new WOW().init();

    /**
     * Add img-responsive & video responsive class to all post/page/comments body image
     * @since 1.0.0
     */
    $(function() {
        //images
        var contentImage =  ".main-body img, .comment-body .media-body img";
        if (!($(contentImage).hasClass("img-responsive"))) {
            $(contentImage).addClass("img-responsive");
        }

        //video
        var commentBody =  ".comment-body iframe";
        if (!($(commentBody).hasClass("superembed-force"))) {
            $(commentBody).addClass("superembed-force");
        }
    });
    
})(jQuery);
