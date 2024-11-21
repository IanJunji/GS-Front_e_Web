const login_form = document.querySelector('#loginForm');
const corpo = document.querySelector('.corpo');





document.querySelector('#login').addEventListener('click', function () {
    login_form.style.display = 'block';
    corpo.classList.add('blur');
})


function submitLogin(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username !== "admin" || password !== "admin"){
        alert("Usuário ou senha incorretos.");
    }
    else {
        alert ('Login efetuado com sucesso!');
        window.location.href = "login.html";
        
    }
}

