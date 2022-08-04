$(document).ready(function(){
    $('button').click(function(){
        $.ajax({url:'https://jsonplaceholder.typicode.com/users',
        success: function(result){
             var tabletext = '';
             for(var a = 0; a < result.length;a++){
                tabletext +='<tr><td>'+result[a].name+'</td><td>'+result[a].email+'</td><td>'+result[a].username+'</td></tr>';
             }
            $('.textdiv').html(tabletext);
        }
        })
    })
})