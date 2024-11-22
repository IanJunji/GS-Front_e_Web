const login_form = document.querySelector('#loginForm');
const register_form = document.querySelector('#registerForm')
const corpo = document.querySelector('.corpo');


document.querySelector('#login').addEventListener('click', function () {
    login_form.style.display = 'block';
    corpo.classList.add('blur');
})
document.querySelector('#register').addEventListener('click', function () {
    register_form.style.display = 'block';
    corpo.classList.add('blur');
})
document.querySelector('#criarConta').addEventListener('click', function () {
    login_form.style.display = 'block';
    corpo.classList.add('blur');
})


function submitRegister(){
    const userRegister = document.getElementById('userRegister').value;
    const email = document.getElementById('email').value;
    const passRegister = document.getElementById('passRegister').value;

    if (!userRegister || !email || !passRegister) {
        alert('Preencha todos os campos!');
    }
    else{
        alert(`Cadastro concluido!
            Usurário: ${userRegister}
            Email: ${email}
            Senha: ${passRegister}
        `);
        window.location.href = "assets/login.html"; 
    }
}

function submitLogin(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username !== "admin" || password !== "admin"){
        alert("Usuário ou senha incorretos.");
    }
    else {
        alert ('Login efetuado com sucesso!');
        window.location.href = "assets/login.html";  
    }
}

const images = [
    'assets/images/carousel/feedback1.png',
    'assets/images/carousel/feedback2.png',
    'assets/images/carousel/feedback3.png'
];

let Index = 0;

function nextImage() {
    Index = (Index + 1) % images.length;
    document.getElementById('carousel-img').src = images[Index];
}

function prevImage() {
    Index = (Index - 1 + images.length) % images.length;
    document.getElementById('carousel-img').src = images[Index];
}

