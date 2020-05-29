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
        starWidth: "12px",
        readOnly: true,
        spacing: "3px",
        multiColor: {
            "endColor": "#ffc015"
        }
    });

    $('.weekly-slider').slick({
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
        appendArrows: $('.feedback-slider-arrows'),
        prevArrow: '<button class="prev-arrow feedback-arrow" type="button"><span class="lnr lnr-chevron-left"></span> </button>',
        nextArrow: '<button class="next-arrow feedback-arrow" type="button"><span class="lnr lnr-chevron-right"></span></button>'


    });

    $('.product-btn').on('click', function () {

        $('.remove').removeClass('active');
        $(this).addClass('active');
    });

    var mixer = mixitup('.products-inner__items');
});