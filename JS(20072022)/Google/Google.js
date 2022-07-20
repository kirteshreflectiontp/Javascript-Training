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
        document.getElementById('thirderror').innerHTML = "Choose Gmail address";
        document.getElementById('fortherror').innerHTML = "Enter a Password";
    }
    else if( firstname == ''){
        document.getElementById('firsterror').innerHTML = "Enter Firstname";
    }
    else if( lastname == ''){
        document.getElementById('seconderror').innerHTML = "Enter Lastname";
    }
    else if( email == ''){
        document.getElementById('thirderror').innerHTML = "Choose Gmail address";
    }
    else if( password == ''){
        document.getElementById('fortherror').innerHTML = "Enter a Password";
    }
    else if( password.lenght > 8){
        document.getElementById('fortherror').innerHTML = "Use 8 characters or more";
    }
    else if( confirm ==''){
        document.getElementById('fiftherror').innerHTML = "Confirm Password";
    }
    else{
        document.getElementById('done').innerHTML = "Sucessfully Created Your Gmail Account";
    }
    
}