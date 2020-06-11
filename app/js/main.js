$(function () {

    $(".properties__star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        spacing: "3px",
        multiColor: {
            "endColor": "#ffc015"
        }
    });

    $(".star").rateYo({
        rating: 4.5,
        starWidth: "13px",
        readOnly: true,
        spacing: "3px",
        multiColor: {
            "endColor": "#ffc015"
        }
    });

    $('.weekly__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        adaptiveHeight: true,
        appendArrows: $('.weekly__buttons'),
        prevArrow: '<button class="title-box__prev-arrow title-box__arrow" type="button"><span class="lnr lnr-chevron-left"></span> </button>',
        nextArrow: '<button class="title-box__next-arrow title-box__arrow" type="button"><span class="lnr lnr-chevron-right"></span></button>'
    });



    $('.followers__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        slideWidth: 360,
        appendArrows: $('.followers__buttons'),
        prevArrow: '<button class="title-box__prev-arrow title-box__arrow" type="button"><span class="lnr lnr-chevron-left"></span> </button>',
        nextArrow: '<button class="title-box__next-arrow title-box__arrow" type="button"><span class="lnr lnr-chevron-right"></span></button>'

    });

    $('.feedback__inner').slick({
        // adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        slideWidth: 555,
        slideMargin: 30,
        appendArrows: $('.feedback__slider-arrows'),
        prevArrow: '<button class="prev-arrow feedback__arrow" type="button"><span class="lnr lnr-chevron-left"></span> </button>',
        nextArrow: '<button class="next-arrow feedback__arrow" type="button"><span class="lnr lnr-chevron-right"></span></button>'


    });

    $('.menu__link').on('click', function () {
        $('.menu__list-item').find('a').removeClass('menu__link--active');
        $(this).addClass('menu__link--active');
    });

    $('.search-form__input').focus(function () {

        (this).toggleClass('border')

    })

    $('.products__title-btn').on('click', function () {
        $(".products__drop-list").toggleClass('list-active');
    });


    $('.products__drop-link').on('click', function () {

        $(".products__drop-list").find('a').removeClass('link-active');
        $(this).children().addClass('link-active');
    });


    $('.products__btn').on('click', function () {

        $('.products__btn').removeClass('products__btn--active');
        $(this).addClass('products__btn--active');
    });


    $('.products__all-btn').on('click', function () {
        $('.products__btn').removeClass('products__btn--active');
    });



    $('.grid__top-btn').on('click', function () {

        $('.grid-remove').removeClass('grid-active');
        $(this).addClass('grid-active');
    });




    // $(".feedback__item-text").each(function () {

    //     var Height = 120;

    //     if ($(this).height() > Height) {
    //         $(".feedback__item").css({
    //             'overflow': 'hidden',
    //             'max-height': '305px',
    //         });
    //         $(this).find(".show-more").show();
    //     }
    // });




    var mixer = mixitup('.products__items');
});