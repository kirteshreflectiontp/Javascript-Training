function Login(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';

    if(username == ''){
        document.getElementById('usernameError').innerHTML ='Please enter your User Name';     
        }
        else if(password == ''){
         document.getElementById('passwordError').innerHTML ='Please enter your Password';          
         }
         else{
            document.getElementById('success').innerHTML ='Login Succesfull';
            console.log('Succesfully Submitted')
     }
}