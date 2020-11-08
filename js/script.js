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
                $(this).find('.sub-menu-category').slideToggle(300);
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
    sliderProductImage: function() {
        $('.slider-pro-img').owlCarousel({
            loop: false,
            nav: true,
            dots: false,
            margin: 10,
            autoplay: false,
            navSpeed: 500,
            smartSpeed: 500,
            items: 5
        });
    },
    imageClick: function() {
        $('.slider-pro-img__item').each(function() {
            $(this).click(function() {
                let img = $(this).find('img').attr('src');
                $(this).closest('.img-pro').find('.hover-image img').attr('src', img);
                $(this).addClass('active');
                $('.slider-pro-img__item').not($(this)).removeClass('active')
            });
        });
    }
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
let menuInactive = () => {
    if (window.innerWidth <= 1024) {
        $('.menu-category').removeClass('active');
    }
}
let hoverZoomImg = () => {
    const cover = document.querySelector(".hover-image__cover");
    if (cover) {
        cover.addEventListener("mousemove", function (e) {
            const screenImage = document.querySelector(".hover-image");
            const image = document.querySelector(".hover-image__img");
            image.style = "width: auto;height:auto;max-height:unset";

            let imageWidth = image.offsetWidth;
            let imageHeight = image.offsetHeight;
            const screenWidth = screenImage.offsetWidth;
            const screenHeight = screenImage.offsetHeight;
            const spaceX = (imageWidth / 2 - screenWidth) * 2;
            const spaceY = (imageHeight / 2 - screenHeight) * 2;
            imageWidth = imageWidth + spaceX;
            imageHeight = imageHeight + spaceY;

            let x = e.pageX - screenImage.offsetParent?.offsetLeft - screenImage.offsetLeft;
            let y = e.pageY - screenImage.offsetParent?.offsetTop - screenImage.offsetTop;

            const positionX = (imageWidth / screenWidth / 2) * x;
            const positionY = (imageHeight / screenHeight / 2) * y;

            image.style = `left: ${-positionX}px;
                top: ${-positionY}px;
                width: auto;
                height:auto;
                max-height:unset;
                transform:none;`;
        });


        cover.addEventListener("mouseleave", function (e) {
            const image = document.querySelector(".hover-image__img");
            image.style = ``;
        });
    }
}
let changeAmount = {
    click: function() {
        $('.quantity-action').click(function() {
            let action = $(this).attr('data-action');
            let input = $(this).closest('.quantity').find('.quantity-input');
            let totalPro;
            if (input.val() == '') {
                input.val(0);
            }
            if (action == 'up') {
                totalPro = parseInt(input.val()) + 1;
            }
            else {
                if (parseInt(input.val()) == 1) return;
                totalPro = parseInt(input.val()) - 1;
            }
            input.val(totalPro);
            let price = $(this).closest('tr').find('.price').attr('data');
            $(this).closest('tr').find('.total-price').attr('data', price * totalPro);
            let totalPriceFormat = Intl.NumberFormat().format(price * totalPro).replace('/./g', ',') + 'đ';
            $(this).closest('tr').find('.total-price').html(totalPriceFormat);

            // total bill
            let totalBill = 0;
            let cartItem = $('.box-cart table tr').length;
            for (let i = 2; i < cartItem; i++) {
                totalBill += parseInt($(`.box-cart table tr:nth-child(${i}) .total-price`).attr('data'));
            }
            $('.total-bill').html('<b>' + Intl.NumberFormat().format(totalBill).replace('/./g', ',') + 'đ</b>');
        });
    },
    change: function() {
        $('.quantity-input').on('input', function() {
            let totalPro = $(this).val();
            if (isNaN(totalPro)) totalPro = 0;
            if (Number.isInteger(totalPro)) {
                alert('Số lượng sản phẩm phải là số.');
                return;
            }
            if (totalPro == '') totalPro = 0;
            let price = $(this).closest('tr').find('.price').attr('data');
            $(this).closest('tr').find('.total-price').attr('data', price * parseInt(totalPro));
            let totalPriceFormat = Intl.NumberFormat().format(price * parseInt(totalPro)).replace('/./g', ',') + 'đ';
            $(this).closest('tr').find('.total-price').html(totalPriceFormat);
            
            // total bill
            let totalBill = 0;
            let cartItem = $('.box-cart table tr').length;
            for (let i = 2; i < cartItem; i++) {
                totalBill += parseInt($(`.box-cart table tr:nth-child(${i}) .total-price`).attr('data'));
            }
            $('.total-bill').html('<b>' + Intl.NumberFormat().format(totalBill).replace('/./g', ',') + 'đ</b>');
        });
    },
    windownClick: function() {
        $(window).click(function(e) {
            let cartItem = $('.box-cart table tr').length;
            for (let i = 2; i < cartItem; i++) {
                if ($(`.box-cart table tr:nth-child(${i}) .quantity-input`).val() == '') {
                    alert('Số lượng sản phẩm không được để trống.');
                    $(`.box-cart table tr:nth-child(${i}) .quantity-input`).focus();
                }
            }
        });
    }
};
let seeMoreProductDetail = function() {
    $('.js-btn-product-detail').click(function() {
        if ($('.tab-content').hasClass('active') == false) {
            $('.tab-content').addClass('active');
            $(this).html(`Thu gọn <i class="fa fa-caret-up"></i>`);
        }
        else {
            $('.tab-content').removeClass('active');
            $(this).html(`Xem thêm <i class="fa fa-caret-down"></i>`);
        }
    });
};
let comment = {
    post: function() {
        $('#btn-send-comment').click(function() {
            let name = $(this).closest('.form-comment').find('#input-name').val();
            let phone = $(this).closest('.form-comment').find('#input-phone').val();
            let content = $(this).closest('.form-comment').find('#input-content').val();
            if (name == '' || content == '') {
                if (name == '') alert('Bạn chưa nhập tên.');
                if (content == '') alert('Bạn chưa nhập nội dung bình luận.');
            } else {
                let now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                let seconds = now.getSeconds();
                let date = now.getDate();
                let month = now.getMonth() + 1;
                let year = now.getFullYear();
                $(this).closest('.comment-product').find('.list-comment').append(`
                    <div class="list-comment__item">
                        <div class="list-comment__main">
                            <div class="d-flex">
                                <div class="avatar"><img src="images/user.png" alt=""></div>
                                <div class="detail-comment">
                                    <div class="box-content">
                                        <div class="box-content__user-name">${name}</div>
                                        <div class="box-content__content">${content}</div>
                                    </div>
                                    <div class="action">
                                        <div class="action__reply">Trả lời</div>
                                        <div class="send-time">${hours}:${minutes}:${seconds} - ${date}/${month}/${year}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
                $(this).closest('.form-comment').find('#input-name').val('');
                $(this).closest('.form-comment').find('#input-phone').val('');
                $(this).closest('.form-comment').find('#input-content').val('')
            }
        });
    },
    showBoxReply: function() {
        $(document).on('click', '.action__show-reply', function() {
            let replyToName = $(this).closest('.detail-comment').find('.box-content__user-name').html();
            $('.list-comment__reply .box-replying').removeAttr('style');
            $(this).closest('.list-comment__item').find('.list-comment__reply .box-replying').css('display', 'flex');
            $(this).closest('.list-comment__item').find('.list-comment__reply .box-replying input').val(`@${replyToName} `);
            $(this).closest('.list-comment__item').find('.list-comment__reply .box-replying input').focus();
            $(this).closest('.list-comment__item').find('.list-comment__reply .box-replying .send-reply').attr('data-name', replyToName);
        });
    },
    reply: function() {
        $('.send-reply').each(function() {
            $(this).click(function() {
                let now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                let seconds = now.getSeconds();
                let date = now.getDate();
                let month = now.getMonth() + 1;
                let year = now.getFullYear();
                let replyTo = $(this).attr('data-name');
                let box = $(this).closest('.box-replying');
                let content = $(this).closest('.box-replying__form').find('input').val();
                $(this).closest('.box-replying__form').find('input').val('');
                content = content.replace(`@${replyTo}`, `<b>${replyTo}</b>`);
                box.removeAttr('style');
                box.before(`
                    <div class="list-comment__reply-item">
                        <div class="d-flex">
                            <div class="avatar"><img src="images/avatar_user.webp" alt=""></div>
                            <div class="detail-comment">
                                <div class="box-content">
                                    <div class="box-content__user-name">User</div>
                                    <div class="box-content__content">${content}</div>
                                </div>
                                <div class="action">
                                    <div class="action__show-reply">Trả lời</div>
                                    <div class="send-time">${hours}:${minutes}:${seconds} - ${date}/${month}/${year}</div>
                                </div>
                            </div>
                        </div>                                    
                    </div>
                `);
            });
        });
    },
    enterReply: function() {        
        $('.box-replying__form input').keyup(function(e) {
            if (e.keyCode === 13) {
                e.preventDefault();
                let now = new Date();
                let hours = now.getHours();
                let minutes = now.getMinutes();
                let seconds = now.getSeconds();
                let date = now.getDate();
                let month = now.getMonth() + 1;
                let year = now.getFullYear();
                let replyTo = $(this).find('~ button').attr('data-name');
                let box = $(this).closest('.box-replying');
                let content = $(this).val();
                $(this).val('');
                content = content.replace(`@${replyTo}`, `<b>${replyTo}</b>`);
                box.removeAttr('style');
                box.before(`
                    <div class="list-comment__reply-item">
                        <div class="d-flex">
                            <div class="avatar"><img src="images/avatar_user.webp" alt=""></div>
                            <div class="detail-comment">
                                <div class="box-content">
                                    <div class="box-content__user-name">User</div>
                                    <div class="box-content__content">${content}</div>
                                </div>
                                <div class="action">
                                    <div class="action__show-reply">Trả lời</div>
                                    <div class="send-time">${hours}:${minutes}:${seconds} - ${date}/${month}/${year}</div>
                                </div>
                            </div>
                        </div>                                    
                    </div>
                `);
            }
        });
    }
};
let inputFocus = function() {
    $('.box-login__group-input input').change(function() {
        if ($(this).val() != '') {
            $(this).find('~ span').addClass('active');
        } else {
            $(this).find('~ span').removeClass('active');
        }
    });
    $('.box-login__group-input textarea').change(function() {
        if ($(this).val() != '') {
            $(this).find('~ span').addClass('active');
        } else {
            $(this).find('~ span').removeClass('active');
        }
    });
}
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
    if (window.innerWidth <= 576) {
        mainMenu.open();
        mainMenu.close();
        mainMenu.openSubMenu();
        mainMenu.scroll();
        cartClick();
        hotMenu();
        windownClick.closeMainMenu();
        windownClick.closeCart();
        windownClick.closeHotMenu();
    }
    menuInactive();
    owlCarousel.sliderBanner();
    owlCarousel.sliderSelling();
    owlCarousel.sliderProduct();
    owlCarousel.sliderProductImage();
    owlCarousel.imageClick();
    backToTop.backToTopScroll();
    backToTop.backToTopClick();
    hoverZoomImg();
    seeMoreProductDetail();
    changeAmount.click();
    changeAmount.change();
    changeAmount.windownClick();
    comment.post();
    comment.showBoxReply();
    comment.reply();
    comment.enterReply();
    inputFocus();
});