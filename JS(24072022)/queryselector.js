var lili1 = document.querySelectorAll('#li1 li');
for(var a=0; a<lili1.length; a++){
    if(lili1[a].innerHTML=='BBBB'){
        lili1[a].innerHTML=  lili1[a].innerHTML+'------KIRTESH';
    }
    else if(lili1[a].innerHTML=='IIII'){
        lili1[a].innerHTML=lili1[a].innerHTML+'------GURU';
    }
}


var lili2 = document.querySelectorAll('#li2 li');
for(var a=0; a<lili2.length; a++){
    if(lili2[a].innerHTML=='FFFF'){
        lili2[a].innerHTML=  lili2[a].innerHTML+'------KIRTESH';
    }
    else if(lili2[a].innerHTML=='DDDD'){
        lili2[a].innerHTML=lili2[a].innerHTML+'------GURU';
    }
    
}