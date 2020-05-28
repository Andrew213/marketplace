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

    $('.product-btn').on('click', function () {

        $('.remove').removeClass('active');
        $(this).addClass('active');
    });

    var mixer = mixitup('.products-inner__items');
});