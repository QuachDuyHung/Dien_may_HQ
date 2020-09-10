let mainMenu = {
    open: function() {
        $('.btn-open-menu').click(function() {
            $('.menu-category').addClass('active-mobile');
            $('.bg-overlay').addClass('active');
        });
    },
    close: function() {
        $('.btn-close-menu').click(function() {
            $('.menu-category').removeClass('active-mobile');
            $('.bg-overlay').removeClass('active');
        });
    },
    openSubMenu: function() {
        $('.menu-category > li').each(function() {
            if ($(this).find('.sub-menu-category li').length <= 0) {
                $(this).find('> a i').removeClass('fa-angle-right');
            }
            $(this).click(function(e) {
                if ($(this).find('.sub-menu-category li').length > 0) {
                    e.stopPropagation();
                    e.preventDefault();
                }
                $(this).find('> a i').toggleClass('active');
                $(this).find('.sub-menu-category').slideToggle(500);
                // $('.menu-category > li > div i').not($(this)).removeClass('active');
                // $('.menu-category > li .sub-menu-category').not($(this)).css('display', 'none');
            });
        });
    },
    scroll: function() {
        let heightHeader = $('header').height();
        $(window).scroll(function() {
            if ($(window).scrollTop() > heightHeader) {
                $('.hd-bottom-menu').addClass('scrolling');
            }
            else {
                $('.hd-bottom-menu').removeClass('scrolling');
            }
        })
    }
};
let cartClick = () => {
    $('.report-user-cart .report-user-item').click(function() {
        if ($('.hd-mid-detail-cart').hasClass('active') == false) {
            $('.hd-mid-detail-cart').addClass('active');
        }
        else {
            $('.hd-mid-detail-cart').removeClass('active');
        }
    });
};
let hotMenu = () => {
    $('.menu-hot').click(function() {
        if ($('.sub-menu-hot').hasClass('active') == false) {
            $('.sub-menu-hot').addClass('active');
        }
        else {
            $('.sub-menu-hot').removeClass('active');
        }
    });
};
let windownClick = {
    closeMainMenu: function() {
        $(window).click(function(e) {
            if ($('.menu-category').has(e.target).length == 0 && !$('.menu-category').is(e.target) && $('.btn-open-menu').has(e.target).length == 0 && !$('.btn-open-menu').is(e.target)) {
                $('.menu-category').removeClass('active-mobile');
                $('.bg-overlay').removeClass('active');
            }
        });
    },
    closeCart: function() {
        $(window).click(function(e) {
            if ($('.report-user-cart').has(e.target).length == 0 && !$('.report-user-cart').is(e.target)) {
                $('.hd-mid-detail-cart').removeClass('active');
            }
        });
    },
    closeHotMenu: function() {
        $(window).click(function(e) {
            if ($('.menu-hot').has(e.target).length == 0 && !$('.menu-hot').is(e.target)) {
                $('.sub-menu-hot').removeClass('active');
            }
        });
    }
}
let owlCarousel = {
    sliderBanner: function() {
        $('.banner-slider').owlCarousel({
            loop: true,
            nav: false,
            items: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            dotsSpeed: 700,
            smartSpeed: 700,
        })
    },
    sliderSelling: function() {
        $('.best-selling-slider').owlCarousel({
            loop: false,
            nav: false,
            items: 1,
            autoplay: false,
            autoplayHoverPause: true,
            dotsSpeed: 600,
            smartSpeed: 600,
        });
    },
    sliderProduct: function() {
        $('.products-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: false,
            autoplayHoverPause: true,
            navSpeed: 800,
            smartSpeed: 800,
            lazyLoad: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                375: {
                    items: 2,
                    margin: 20
                },
                480: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });
    },
}
let backToTop = {
    backToTopScroll: function() {
        if ($('.back-to-top')) {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 500) {
                    $('.back-to-top').addClass('active');
                }
                else {
                    $('.back-to-top').removeClass('active');
                }
            });
        }
    },
    backToTopClick: () => {
        if ($('.back-to-top')) {
            $('.back-to-top').click(function() {
                $('html,body').animate({scrollTop: 0}, 800);
                return false;
            });
        }
    }
};

$(document).ready(function() {
    $('.lazy').lazy({
        // scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 500,
        visibleOnly: true,
        onError: function(element) {
            console.log('error loading ' + element.data('src'));
        }
    });
    mainMenu.open();
    mainMenu.close();
    mainMenu.openSubMenu();
    mainMenu.scroll();
    cartClick();
    hotMenu();
    windownClick.closeMainMenu();
    windownClick.closeCart();
    windownClick.closeHotMenu();
    owlCarousel.sliderBanner();
    owlCarousel.sliderSelling();
    owlCarousel.sliderProduct();
    backToTop.backToTopScroll();
    backToTop.backToTopClick();
});