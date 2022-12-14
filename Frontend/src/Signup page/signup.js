const signupForm = document.getElementById('signup');


function registerUser(event){
    event.preventDefault();
    let fullname = event.target.fullname.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let confirmPassword = event.target.cpassword.value;

    if(!fullname && !email && !password ) {
        alert('All fields required')
        return;
    }

    let userObj ={
        fullname,
        email,
        password,
        confirmPassword
    };
    
    fetchAPI(userObj, 'sign-up', 'POST').then(data => {
        if(data.status){
            window.location.href = "../signin page/signin.html"
        } else {
            alert(data.message);
        }
    });
}

signupForm.addEventListener('submit', registerUser)