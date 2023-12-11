(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav: false,
        navText: [
            '<i class="fa-solid fa-chevron-left"></i>',
            '<i class="fa-solid fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            },
            1600: {
                items: 5
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav: true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Fact Counter

    $(document).ready(function () {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: jQuery.easeInQuad,
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });


    // Navigation active state on scroll

    var nav_sections = $('section');
    var main_nav = $('.navbar-nav, .mobile-nav');
    var main_nav_height = $('#navbar').outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        nav_sections.each(function () {
            var top = $(this).offset().top - main_nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                main_nav.find('a').removeClass('active');
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });


    // Load sections

    $(function () {
        var sections = $('[data-section-url]');
        $.each(sections, function () {
            var file = $(this).data('section-url');
            $(this).load(file)
        });
    });


    // Change header background when scrolling

    $(window).scroll(function (e) {
        var height = $(window).scrollTop() + 80;
        var winheight = $(window).height();
        if (height > winheight) {
            $("#navbar").addClass("navback-darker");
        } else {
            $("#navbar").removeClass("navback-darker");
        }
    });



    // Add class on hover
    $(".steps-panel .next-btn").click(function () {
        $(".steps-panel").removeClass("selected");
        $(this).closest(".steps-panel").next().addClass("selected");
    });

    $(".steps-panel .prev-btn").click(function () {
        $(".steps-panel").removeClass("selected");
        $(this).closest(".steps-panel").prev().addClass("selected");
    });

    $(".steps-panel .icon-wrapper").click(function () {
        $(".steps-panel").removeClass("selected");
        $(this).closest(".steps-panel").addClass("selected");
    });



    // Select table row
    $(".steps-panel .table.with-selection tbody tr").click(function () {
        $(".steps-panel .table.with-selection tbody tr").removeClass("selectedRow");
        $(this).addClass("selectedRow");
    });



    //
    $("#install-map-btn").mouseenter(function () {
        $("#map-img").attr("src", "img/Installation-Map-blue.png");
    });
    $("#locations-map-btn").mouseenter(function () {
        $("#map-img").attr("src", "img/Installation-Map-orange.png");
    });
    $(".map-legend").mouseleave(function () {
        $("#map-img").attr("src", "img/Installation-Map2.png");
    });




})(jQuery);

