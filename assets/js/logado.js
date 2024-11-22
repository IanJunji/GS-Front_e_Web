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
    'images/carousel/feedback1.png',
    'images/carousel/feedback2.png',
    'images/carousel/feedback3.png'
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