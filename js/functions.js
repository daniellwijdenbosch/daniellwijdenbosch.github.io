$(document).ready(function() {
    $('.open').click(function(e) {
        e.preventDefault();
        $('html').css("overflow", "hidden");
        $("#hidden").fadeIn();
        $("#hidden").show();
        $('html, body').animate({
            scrollTop: $("#three").offset().top
        }, 2000);
    });
    $('.close').click(function() {
        $("#hidden").hide();
        $('html').css("overflow", "unset");
    })
});

$(document).ready(function() {
    $('.open1').click(function(e) {
        e.preventDefault();
        $('html').css("overflow", "hidden");
        $("#hidden1").fadeIn();
        $("#hidden1").show();
        $('html, body').animate({
            scrollTop: $("#three").offset().top
        }, 2000);
    });
    $('.close1').click(function() {
        $("#hidden1").hide();
        $('html').css("overflow", "unset");
    })
});

$(document).ready(function() {
    $('.open2').click(function(e) {
        e.preventDefault();
        $('html').css("overflow", "hidden");
        $("#hidden2").fadeIn();
        $("#hidden2").show();
        $('html, body').animate({
            scrollTop: $("#three").offset().top
        }, 2000);
    });
    $('.close2').click(function() {
        $("#hidden2").hide();
        $('html').css("overflow", "unset");
    })
});

$(document).ready(function() {
    $('.open').click(function(e) {
        e.preventDefault();
        $('#wrapper').css("overflow", "hidden");
        $("#hidden").fadeIn();
        $("#hidden").show();
        $('html, body').animate({
            scrollTop: $("#three").offset().top
        }, 2000);
    });
    $('.close').click(function() {
        $("#hidden").hide();
        $('#wrapper').css("overflow", "unset");
    })
});

$(document).ready(function() {
    $('.open1').click(function(e) {
        e.preventDefault();
        $('#wrapper').css("overflow", "hidden");
        $("#hidden1").fadeIn();
        $("#hidden1").show();
        $('html, body').animate({
            scrollTop: $("#three").offset().top
        }, 2000);
    });
    $('.close1').click(function() {
        $("#hidden1").hide();
        $('#wrapper').css("overflow", "unset");
    })
});

$(document).ready(function() {
    $('.open2').click(function(e) {
        e.preventDefault();
        $('#wrapper').css("overflow", "hidden");
        $("#hidden2").fadeIn();
        $("#hidden2").show();
        $('html, body').animate({
            scrollTop: $("#three").offset().top
        }, 2000);
    });
    $('.close2').click(function() {
        $("#hidden2").hide();
        $('#wrapper').css("overflow", "unset");
    })
});

$(document).ready(function() {
    $('#main-content').fadeIn();
});
$(function() {
    $(document).on('click', 'a[href^="#"]', function(e) {
        var id = $(this).attr('href');
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        var pos = $id.offset().top;
        $('body, html').animate({
            scrollTop: pos
        }, 1500);
    });
});
$(document).ready(function() {
    if ($('#back-to-top').length) {
        var scrollTrigger = 100,
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
});
$(document).ready(function() {
    $('.open-overlay').click(function() {
        var overlay_navigation = $('.overlay-navigation'),
            nav_item_1 = $('nav li:nth-of-type(1)'),
            nav_item_2 = $('nav li:nth-of-type(2)'),
            nav_item_3 = $('nav li:nth-of-type(3)'),
            nav_item_4 = $('nav li:nth-of-type(4)'),
            nav_item_5 = $('nav li:nth-of-type(5)'),
            top_bar = $('.bar-top'),
            middle_bar = $('.bar-middle'),
            bottom_bar = $('.bar-bottom');
        overlay_navigation.toggleClass('overlay-active');
        if (overlay_navigation.hasClass('overlay-active')) {
            top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
            middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
            bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
            overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
            nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
            nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
            nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
            nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
            nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
        } else {
            top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
            middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
            bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
            overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
            nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
            nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
            nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
            nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
            nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
        }
    })
});
$(function() {
    var message = "3D Origami | Miss you :(";
    var original;
    $(window).focus(function() {
        if (original) {
            document.title = original;
        }
    }).blur(function() {
        var title = $('title').text();
        if (title != message) {
            original = title;
        }
        document.title = message;
    });
});
$(function() {
    window.sr = ScrollReveal();
    window.sr = ScrollReveal({
        reset: true
    });
    sr.reveal('.fadin', {
        duration: 1000
    });
});


$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        nav: true,
        items: 1,
        margin: 10,
        autoHeight: false
    });
});
