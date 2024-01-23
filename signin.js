var x = document.getElementById("login");
        var y = document.getElementById("register");
        var z = document.getElementById("btn");

        function register(){
            x.style.left="-400px";
            y.style.left="50px";
            z.style.left="110px"
        }

        function login(){
            x.style.left="50px";
            y.style.left="450px";
            z.style.left="0px"
        }

        function validateUsername(){

            let name = document.getElementById("username");
            let usernamError=document.getElementById("username-error");
        
            if(name.value.trim().length == ''){
                usernamError.innerHTML="Username should not be blank";
                 return false; // e block false anelnkil exit from the function
            }
            else if(name.value.length < 5){
                usernamError.innerHTML='Username should be minimum 5 letters';
                return false;
        
            }
            else{
                usernamError.innerHTML="";
                return true
            }
        }


        function validateRegistername(){

            let Regname = document.getElementById("registername");
            let RegnameError=document.getElementById("registerName-error");
        
            if(Regname.value.trim().length == ''){
                usernamError.innerHTML="Username should not be blank";
                 return false; // e block false anelnkil exit from the function
            }
            else if(Regname.value.length < 5){
                RegnameError.innerHTML='Username should be minimum 5 letters';
                return false;
        
            }
            else{
                RegnameError.innerHTML="";
                return true
            }
        }

        function validatePassword(){

   
            let passkey = document.getElementById("userpassword");
            let userpasskey=document.getElementById("password-error");
        
            if(passkey.value.trim().length == ''){
                userpasskey.innerHTML="Password should not be blank";
                 return false; // e block false anelnkil exit from the function
            }
        
            else if(passkey.value.length < 6 || passkey.value.length > 20)
            {
                userpasskey.innerHTML='Password should be minimum 5 letter';
                return false;
        
            }
            else{
                userpasskey.innerHTML="";
                return true
            }
        }


        function validateRegPassword(){

   
            let Regpasskey=document.getElementById("Regpassword");
            let Regspasskey=document.getElementById("registerpassword-error");
        
            if(Regpasskey.value.trim().length == ''){
                Regspasskey.innerHTML="Password should not be blank";
                 return false; // e block false anelnkil exit from the function
            }
        
            else if(Regpasskey.value.length < 6 || Regpasskey.value.length > 20)
            {
                Regspasskey.innerHTML='Enter a Valid Password';
                return false;
        
            }
            else{
                Regspasskey.innerHTML="";
                return true
            }
        }


        function validaterepeatPassword(){

            let passkey = document.getElementById("Regpassword");
            let repPasskey=document.getElementById("repeatPassword")
            let repuserPasskey=document.getElementById("repeatPassword-error")
        
            if(passkey.value != repPasskey.value){
                repuserPasskey.innerHTML="Password is not matching";
                 return false; // e block false anelnkil exit from the function
            }
        
            else{
                repuserPasskey.innerHTML="";
                return true
            }
        }





        function validateEmail(){

            let regEx=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    
            let email = document.getElementById("useremail");
            let useremail=document.getElementById("email-error");
        
            if(email.value.trim().length == ''){
                useremail.innerHTML="Username should not be blank";
                 return false; // e block false anelnkil exit from the function
            }
            else if(!email.value.match(regEx))
            {
                useremail.innerHTML='enter valid mail';
                return false;
        
            }
            else{
                useremail.innerHTML="";
                return true
            }
        }