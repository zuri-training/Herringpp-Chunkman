const signinForm = document.getElementById('signin');



// if (!localStorage.getItem('token')) {
//     window.location.href = "../signin page/signin.html";
// }

function signinUser(event){
    event.preventDefault();
    let email = document.getElementById('emailAU').value;
    let password = document.getElementById('passwordAU').value;

    // console.log(email, password);

    if(!email || !password ) {
        alert('All fields required')
        return;
    }

    let userObj ={
        email,
        password
    };
    
    fetchAPI(userObj, 'sign-in', 'POST').then((data) => {
        console.log(data);
    })
}

signinForm.addEventListener('submit', signinUser)