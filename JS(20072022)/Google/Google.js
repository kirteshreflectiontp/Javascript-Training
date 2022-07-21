function submit(){
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm = document.getElementById('confirm').value;
    document.getElementById('firsterror').innerHTML = '';
    document.getElementById('seconderror').innerHTML = '';
    document.getElementById('thirderror').innerHTML = '';
    document.getElementById('fortherror').innerHTML = '';
    document.getElementById('fiftherror').innerHTML = '';

    if( firstname =='' && email == "" && password ==""){
        document.getElementById('firsterror').innerHTML = "Enter First and last names";
        document.getElementById('thirderror').innerHTML = "Choose a Gmail address";
        document.getElementById('fortherror').innerHTML = "Enter a Password";
        document.getElementById('info').style.display = "none";
        document.getElementById('info1').style.display = "none";
        document.getElementById('firstname').style.border = "2px solid red";
        document.getElementById('lastname').style.border = "2px solid red";
        document.getElementById('email').style.border = "2px solid red";
        document.getElementById('password').style.border = "2px solid red";
        document.getElementById('confirm').style.border = "2px solid red";
    }
    else if( firstname == ''){
        document.getElementById('firsterror').innerHTML = "Enter Firstname";
        document.getElementById('firstname').style.border = "2px solid red";
    }
    else if( lastname == ''){
        document.getElementById('seconderror').innerHTML = "Enter Lastname";
        document.getElementById('lastname').style.border = "2px solid red";
    }
    else if( email == ''){
        document.getElementById('thirderror').innerHTML = "Choose Gmail address";
        document.getElementById('email').style.border = "2px solid red";
        document.getElementById('info').style.display = "none";
    }
    else if( password == ''){
        document.getElementById('fortherror').innerHTML = "Enter a Password";
        document.getElementById('password').style.border = "2px solid red";
        document.getElementById('info1').style.display = "none";
    }
    else if( password.length < 8){
        document.getElementById('fortherror').innerHTML = "Use 8 characters or more";
        document.getElementById('password').style.border = "2px solid red";
        document.getElementById('info1').style.display = "none";
    }
    else if( confirm ==''){
        document.getElementById('fiftherror').innerHTML = "Confirm Password";
        document.getElementById('confirm').style.border = "2px solid red";
        document.getElementById('info1').style.display = "none";
    }
    else{
        document.getElementById('done').innerHTML = "You have just created your Gmail account";
    }
    
}