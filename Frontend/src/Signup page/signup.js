const signupForm = document.getElementById('signup');


function registerUser(event){
    event.preventDefault();
    console.log(event.target.firstname);
}

signupForm.addEventListener('submit', registerUser)