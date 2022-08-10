$(document).ready(function(){
    $('.writeText').keyup(function(){
        var text = $(this).val();
        $('.showText').html(text);
    })
    $('.writeText').focus(function(){
        $(this).css({'background-color':'aquamarine'})
    })
    $('.writeText').blur(function(){
        $(this).css({'background-color':'pink'})
    })
})