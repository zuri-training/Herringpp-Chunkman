const signupForm = document.getElementById('signup');


function registerUser(event){
    event.preventDefault();
    let fullname = event.target.fullname.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let confirmPassword = event.target.cpassword.value;

    let userObj ={
        fullname,
        email,
        password,
        confirmPassword
    };
    
    fetchAPI(userObj, 'users/signup', 'POST')
}

signupForm.addEventListener('submit', registerUser)