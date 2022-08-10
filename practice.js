$(document).ready(function(){
    $('.input-text').keyup(function(){
        var text = $(this).val();
        $('.show-input-text').html(text);
    })
    $('.input-text').focus(function(){
        $(this).css({'background-color':'white'})
    })
    $('.input-text').blur(function(){
        $(this).css({'background-color':' greenyellow'})
    })
})