jQuery(document).ready(function ($) {
    // Initiate the wowjs animation library
    new WOW().init();

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    // Mobile Navigation
    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function (e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Smooth scroll for the menu and links with .scrollto classes
    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space - 20;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });

    $('.nav-menu > li').click(function () {
        $(this).addClass('menu-active').siblings().removeClass('menu-active')
    })
    $('.nav-menu > li').mouseenter(function () {
        $(this).addClass('menu-active-to1')
    }).mouseleave(function () {
        $(this).removeClass('menu-active-to1')
    })

    // Header scroll class
    $(window).scroll(function () {
        if ($(this).scrollTop() > 56) {

            $('#header').addClass('header-scrolled');
            $('.nav-menu > li > a').css('color', '#000')
            $('.menu-active').css('border-color','#00a0e9')
            $('.menu-active a').css('color','#00a0e9')
            $('.nav-menu > li').mouseenter(function () {
                $(this).addClass('menu-active-to2').siblings().removeClass('menu-active-to2')
            }).mouseleave(function () {
                $(this).removeClass('menu-active-to2')
            })

            $('#mobile-nav-toggle i').css('color','#0054A7')
            $('#mobile-nav-toggle').css('top','-4px')

            $('#logo img').attr('src','images/small/headlogo1.png')
            $('#logo img').css('width','159px')
            $('#header #logo').css('margin-top','-14px')

        } else {
            $('#header').removeClass('header-scrolled');
            $('.nav-menu > li > a').css('color', '#fff')
            $('.menu-active').css('border-color','#fff')
            $('.menu-active a').css('color','#fff')
            $('.nav-menu > li').mouseenter(function () {
                $(this).removeClass('menu-active-to2').addClass('menu-active-to1')
            }).mouseleave(function () {
                $(this).removeClass('menu-active-to1')
            })


            $('#mobile-nav-toggle i').css('color','#fff')
            $('#mobile-nav-toggle').css('top','13px')

            $('#logo img').attr('src','images/small/headlogo.png')
            $('#logo img').css('width','100px')
            $('#header #logo').css('margin-top','-18px')
        }
    });
});
