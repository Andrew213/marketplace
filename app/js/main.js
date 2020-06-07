$(function () {

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        spacing: "3px",
        multiColor: {
            "endColor": "#ffc015"
        }
    });

    $(".rate-star-product").rateYo({
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
        appendArrows: $('.title-box__buttons'),
        prevArrow: '<button class="prev-arrow myarrow" type="button"><span class="lnr lnr-chevron-left"></span> </button>',
        nextArrow: '<button class="next-arrow myarrow" type="button"><span class="lnr lnr-chevron-right"></span></button>'
    });



    $('.followers__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        slideWidth: 360,
        appendArrows: $('.followers__buttons'),
        prevArrow: '<button class="prev-arrow myarrow" type="button"><span class="lnr lnr-chevron-left"></span> </button>',
        nextArrow: '<button class="next-arrow myarrow" type="button"><span class="lnr lnr-chevron-right"></span></button>'

    });

    $('.feedback__inner').slick({
        // adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        slideWidth: 555,
        slideMargin: 30,
        appendArrows: $('.feedback__slider-arrows'),
        prevArrow: '<button class="prev-arrow feedback-arrow" type="button"><span class="lnr lnr-chevron-left"></span> </button>',
        nextArrow: '<button class="next-arrow feedback-arrow" type="button"><span class="lnr lnr-chevron-right"></span></button>'


    });


    $('.products__title-btn').on('click', function () {
        $(".products__title-list").toggleClass('list-active');
    });


    $('.products__title-link').on('click', function () {

        $('.products__title-link--remove').removeClass('link-active');
        $(this).addClass('link-active');
    });


    $('.product-btn').on('click', function () {

        $('.products__buttons--remove').removeClass('active');
        $(this).addClass('active');
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