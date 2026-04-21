// Get the elements
const loginCard = document.querySelector('.login-card');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const eyeOpened = document.getElementById('eye-opened');
const eyeClosed = document.getElementById('eye-closed');
const loginBtn = document.getElementById('login-btn');
const loginGood = document.querySelector('.successful-login');
const userName = document.getElementById('user-name')

// Add event listener to toggle visibility
eyeOpened.addEventListener('click', togglePasswordVisibility);
eyeClosed.addEventListener('click', togglePasswordVisibility);

function togglePasswordVisibility() {
    // Toggle the 'hidden' class on both icons
    eyeOpened.classList.toggle('hidden');
    eyeClosed.classList.toggle('hidden');

    // Toggle the input type between 'password' and 'text'
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}


// preventing the auto loading by the form
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
})


// Login button


async function userLogin(userEmail, userPass) {
    await axios.post('https://reqres.in/api/login', {
        "email": userEmail,
        "password": userPass
    })
    .then(response => {
        if(response.status){
            loginCard.classList.add('hidden');
            loginGood.classList.remove('hidden');
            userName.innerText = emailInput.value;

            // حل ترميز
            // window.location = 'success-login.html'
        }
    })
    .catch(error => {
        alert(error.response.data.error)
    });

}

loginBtn.addEventListener('click', () => {
    let userEmail = document.getElementById('email').value
    let userPass = document.getElementById('password').value

    userLogin(userEmail, userPass)
})

console.log('its done')
