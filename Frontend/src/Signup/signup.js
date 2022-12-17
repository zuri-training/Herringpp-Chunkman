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
        fullname,
        email,
        password,
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