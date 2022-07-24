
var k = '';
for(var a = 1 ; a <= 5; a++){
    k +=a + '<br/>';
}
document.getElementById('k').innerHTML = k ;


var w='';
for(var a = 1;a <= 5; a++){
    w += '<li>Krittesh</li>'  ;
}
document.getElementById('w').innerHTML = w;

var oe = '';
for(var a= 1; a<=6; a++){
    if(a % 2 == 0){
        oe += '<div>odd</div>'
    }
    else{
        oe +="<div>Even</div>"
    }
}
document.getElementById('oe').innerHTML = oe ;


var s = '';
for(var i = 1; i <= 10; i++){
    s += (i*7) + '<Br/>'
}
document.getElementById('s').innerHTML = s;

var e = '';
for(var i = 1; i <= 10; i++){
    e += (i*8) + '<Br/>'
}
document.getElementById('e').innerHTML = e;
