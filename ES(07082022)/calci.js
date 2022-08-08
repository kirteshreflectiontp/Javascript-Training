alert('Calculator')
class calculator {
    constructor(num1,num2,calculate){
        this.num1 = num1;
        this.num2 = num2;
        this.calculate = calculate;
    }
    grabnum1(){
        return parseInt(document.getElementById('number1').value);
    }
    grabnum2(){
        return parseInt(document.getElementById('number2').value);
    }
   
    maths(){
        debugger
        if(this.calculate == '+'){
            document.getElementById('result').innerHTML = (this.num1 + this.num2);
        }
        else if(this.calculate == '-'){
            document.getElementById('result').innerHTML = (this.num1 - this.num2);
        }
        else if(this.calculate == '/'){
            document.getElementById('result').innerHTML = (this.num1 / this.num2);
        }
        else if(this.calculate == '*'){
            document.getElementById('result').innerHTML  = (this.num1 * this.num2);
        }
    }
}
function addition(){
    let getnumber = new calculator()
    var int1 = getnumber.grabnum1();
    var int2 = getnumber.grabnum2();
    let add = new calculator(int1,int2,'+');
    add.maths()
}
function substraction(){
    let getnumber = new calculator()
    var int1 = getnumber.grabnum1();
    var int2 = getnumber.grabnum2();
    let substract = new calculator(int1,int2,'-');
    substract.maths()
}
function division(){
    let getnumber = new calculator()
    var int1 = getnumber.grabnum1();
    var int2 = getnumber.grabnum2();
    let divide = new calculator(int1,int2,'/');
    divide.maths()
}
function multiplication(){
    let getnumber = new calculator()
    var int1 = getnumber.grabnum1();
    var int2 = getnumber.grabnum2();
    let multiply = new calculator(int1,int2,'*');
    multiply.maths()
}

