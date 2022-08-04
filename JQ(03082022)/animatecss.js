alert('efdyfeud')
$(document).ready(function(){
    $('.navitem').click(function(){
        $('.navitem').css({'background-color':'black',color:'red'})
        $(this).css({'background-color':'blue',color:'white'})


        var showtext = $(this).html().toLowerCase();

        $('.showitem').css({height:'0',width:'0','background-color':'blue',color:'white'});

        $('.'+showtext).animate({height:'100px',width:'800px'},1000,function(){

        $('.'+showtext).css({'background-color':'green',color:"yellow",'font-weight':'bold'})

        })
    })
})


