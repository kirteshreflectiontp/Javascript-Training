var a = 1;
var c ='';
do{
    c+=a + '<br/>';
    a++;
}while(a <= 5 );
document.getElementById('c').innerHTML = c;

var a = 1;
var w='';
do{
    w += '<li>Krittesh</li>'  ;
    a++ ;
}while(a <= 5 );
document.getElementById('w').innerHTML = w;

var a= 1;
var oe = '';
do{
    if(a % 2 == 0){
        oe += '<div>odd</div>'
        a++;
    }
    else{
        oe +="<div>Even</div>"
        a++;
    }
}
while( a<=6);
document.getElementById('oe').innerHTML = oe ;

var i = 1;
var s = '';
do{
    s += (i*7) + '<Br/>';
    i++;
}
while( i <= 10 );
document.getElementById('s').innerHTML = s;

var i = 1;
var e = '';
do{
    e += (i*8) + '<Br/>';
    i++;
}
while( i <= 10 );
document.getElementById('e').innerHTML = e;

