$(function () {

    $(".rate-star").rateYo({
        rating: 4.5,
        starWidth: "15px",
        readOnly: true,
        spacing: "3px",
        multiColor: {
            "endColor": "#ffc001"
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
});