/*
Theme Name: IAMX
Author: Trendy Theme
Author URL: trendytheme.net
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map

*/

jQuery(function ($) {

    'use strict';

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).ready(function () {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(350).fadeOut('slow');
    });




    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('a[href*=#]').bind("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());



    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function () {
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------

    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor: '#3F65C7',
                trackColor: 'rgba(71, 71, 71, 0.2)',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function (from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    // (function () {

    //     var $grid = $('#grid');

    //     $grid.shuffle({
    //         itemSelector: '.portfolio-item'
    //     });

    //     /* reshuffle when user clicks a filter item */
    //     $('#filter a').click(function (e) {
    //         e.preventDefault();

    //         // set active class
    //         $('#filter a').removeClass('active');
    //         $(this).addClass('active');

    //         // get group name from clicked item
    //         var groupName = $(this).attr('data-group');

    //         // reshuffle grid
    //         $grid.shuffle('shuffle', groupName);
    //     });


    // }());


    // -------------------------------------------------------------
    // Magnific Popup
    // -------------------------------------------------------------

    // (function () {
    //   $('.image-link').magnificPopup({

    //     gallery: {
    //       enabled: true
    //     },
    //     removalDelay: 300, // Delay in milliseconds before popup is removed
    //     mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    //     type:'image'
    //   });

    // }());

    // popup-slide
    var swiper1 = new Swiper('.artwork1', {
        speed: 1000,
        pagination: {
            el: '.artwork1 .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {//화살표 버튼
            nextEl: '#pop01 .swiper-button-next',
            prevEl: '#pop01 .swiper-button-prev',
          },
    });

    var swiper1 = new Swiper('.artwork2', {
        speed: 1000,
        pagination: {
            el: '.artwork2 .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {//화살표 버튼
            nextEl: '#pop02 .swiper-button-next',
            prevEl: '#pop02 .swiper-button-prev',
          },
    });


    var swiper1 = new Swiper('.artwork3', {
        speed: 1000,
        pagination: {
            el: '.artwork3 .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {//화살표 버튼
            nextEl: '#pop03 .swiper-button-next',
            prevEl: '#pop03 .swiper-button-prev',
          },
    });


    $(function () {
        $('#popup01').click(function () {
            $('#pop01').show();
        });
        
        $('#popup02').click(function () {
            $('#pop02').show();
        });

        $('#popup03').click(function () {
            $('#pop03').show();
        });

        $('.popup i').click(function () {
            $('.popup').hide();
        });
    });





    // -------------------------------------------------------------
    // Fit Vids
    // -------------------------------------------------------------
    (function () {
        $(".video-container").fitVids();
    }());



    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile: false

        }).init();

    }());

});





