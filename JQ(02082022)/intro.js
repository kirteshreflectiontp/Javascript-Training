

alert('Click "OK" to Enter')

$(document).ready(function () {
    $('.bronco,.truck,.mustang').click(function () {

        $('.bronco,.truck,.mustang').removeClass('hover');
        $(this).addClass('hover');

        $('.show-bronco,.show-truck,.show-mustang').hide()

        if ($(this).hasClass('mustang')) {
            $('.show-mustang').slideToggle();
            $(".mustang").animate({},1000);
        }
        else if ($(this).hasClass('truck')) {
            $('.show-truck').slideToggle();
            $(".truck").animate({},1000);
        }
        else {
            $('.show-bronco').slideToggle();
            $(".bronco").animate({},1000);
        }
    })
})
