var a = 1;
var d = '';
while(a <= 5){
    d +=a + '<br/>';
    a++;
}
document.getElementById('d').innerHTML = d;

var a = 1;
var w='';
while(a <= 5 ){
    w += '<li>Krittesh</li>'  ;
    a++ ;
}
document.getElementById('w').innerHTML = w;

var a= 1;
var oe = '';
while( a<=6){
    if(a % 2 == 0){
        oe += '<div>odd</div>';
    }
    else{
        oe +="<div>Even</div>";
    }
   a++

}
document.getElementById('oe').innerHTML = oe ;

var i = 1;
var s = '';
while( i <= 10){
    s += (i*7) + '<Br/>'
    i++;
}
document.getElementById('s').innerHTML = s;

var i = 1;
var e = '';
while( i <= 10){
    e += (i*8) + '<Br/>'
    i++;
}
document.getElementById('e').innerHTML = e;

