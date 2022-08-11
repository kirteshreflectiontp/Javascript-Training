var arr = "Guru,Amit,Mayur,Jay,Nitesh,Unknown";
var newarr = arr.split(',');
document.getElementById('abc').innerHTML=  (newarr[5].replaceAll('Unknown','Kirtesh'))