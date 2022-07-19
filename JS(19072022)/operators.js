function greaterthan(){
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var result = (number1 > number2) ? number1 + 'is greater than' + number2 : number2 + 'is greater than' + number1;
    document.getElementById('result').innerHTML = result;
}
function lessthan(){
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var result = (number1 < number2) ? number1 + 'is less than' + number2 : number2 + 'is less than' + number1;
    document.getElementById('result').innerHTML = result;
}
function equalsto(){
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var result =  (number1 == number2) ? number1 + 'is equals to' + number2 : number1 + 'is not equals to' + number2;
    document.getElementById('result').innerHTML = result;
}

