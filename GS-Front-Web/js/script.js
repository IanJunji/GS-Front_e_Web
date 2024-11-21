const login_form = document.querySelector('#loginForm');
const corpo = document.querySelector('.corpo');





document.querySelector('#login').addEventListener('click', function () {
    login_form.style.display = 'block';
    corpo.classList.add('blur');
})

function submitLogin() {
    alert ('Login realizado!');
    login_form.style.display = 'none';
    corpo.classList.remove('blur');
}


