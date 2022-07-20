function registration(){
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var birthdate = document.getElementById('birthdate').value;
        var sscmarks = document.getElementById('sscmarks').value;
        var hscmarks = document.getElementById('hscmarks').value;
        var course = document.getElementById('course').value;
        var university = document.getElementById('university').value;
        var branch = document.getElementById('branch').value;
        var aggregate = document.getElementById('aggregate').value;
        var resume = document.getElementById('resume').value;
        
        document.getElementById('nameerror').innerHTML = '';
        document.getElementById('emailerror').innerHTML = '';
        document.getElementById('birthdateerror').innerHTML = '';
        document.getElementById('sscmarkserror').innerHTML = '';
        document.getElementById('hscmarkserror').innerHTML = '';
        document.getElementById('courseerror').innerHTML = '';
        document.getElementById('universityerror').innerHTML = '';
        document.getElementById('brancherror').innerHTML = '';
        document.getElementById('aggregateerror').innerHTML = '';
        document.getElementById('resumeerror').innerHTML = '';
        
       

        if(name == ''){
        document.getElementById('nameerror').innerHTML ='Please enter your Name';     
        }
        else if(email == ''){
         document.getElementById('emailerror').innerHTML ='Please enter your E-Mail';          
         }
         else if(birthdate == ''){
         document.getElementById('birthdateerror').innerHTML ='Please enter your Birthdate';          
        }
        else if(sscmarks == ''){
         document.getElementById('sscmarkserror').innerHTML ='Please enter your SSC Marks';
        }
         else if(hscmarks == ''){
         document.getElementById('hscmarkserror').innerHTML ='Please enter your HSC MArks';
         }
        else if(course == ''){
        document.getElementById('courseerror').innerHTML ='Please enter your Course';
        }
        else if(university == ''){
         document.getElementById('universityerror').innerHTML ='Please enter your University';
        }
        else if(branch == ''){
        document.getElementById('brancherror').innerHTML ='Please enter your Branch';
        }
        else if(aggregate == ''){
         document.getElementById('aggregateerror').innerHTML ='Please enter your Aggregate';
        }
        else if(resume == ''){
        document.getElementById('resumeerror').innerHTML ='Please enter your Resume';
        }
        else{
                document.getElementById('success').innerHTML ='Successfully Submitted';
                console.log('Succesfully Submitted')
         }
    }
