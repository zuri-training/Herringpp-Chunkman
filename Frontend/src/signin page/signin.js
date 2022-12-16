const signinForm = document.getElementById('signin');

// if (!localStorage.getItem('token')) {
//     window.location.href = "../signin page/signin.html";
// }

function signinUser(event){
    event.preventDefault();
    let email = event.target.email.value;
    let password = event.target.password.value;

    if(!fullname || !email || !password ) {
        alert('All fields required')
        return;
    }

    let userObj ={
        email,
        password
    };
    
    fetchAPI(userObj, 'sign-in', 'POST').then(data => {
        if(data.status){
            window.location.href = "../Dashboard/dashboard.html"
        } else {
            alert(data.message);
        }
    });
}

signinForm.addEventListener('submit', signinUser)