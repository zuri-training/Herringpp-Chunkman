const signupForm = document.getElementById('signup');


function registerUser(event){
    event.preventDefault();
    let fullname = document.getElementById('fullname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(!fullname || !email || !password ) {
        alert('All fields required')
        return;
    }

    let userObj ={
        fullName: fullname,
        email: email,
        password: password
    };
    
    fetchAPI(userObj, 'sign-up', 'POST').then(data => {
        console.log(data);
        if(data.message === 'User created'){
            setTimeout(() => {
                window.location.href = "../Signin/signin.html"
            }, 1500)
        }
    });
}

signupForm.addEventListener('submit', registerUser)