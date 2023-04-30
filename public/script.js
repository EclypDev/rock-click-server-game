const ws = new WebSocket('ws://localhost:3000');
const container = document.getElementById('game-info');
const imagenclick = document.getElementById('imagenclick');
const span = document.createElement('span');
const buttonclick = document.getElementById('clickbutton');

//VARIABLES
let exp = 0;
let puntos = 0;
let coins = 0;
let multiplicador = 1;

//STYLES
imagenclick.src = './assets/rock-1.png'
imagenclick.style.width = "100px"
imagenclick.style.width = "100px"

//EVENTOS
buttonclick.addEventListener('click', () => {
    puntos = puntos + multiplicador;
});


//APPENDS
const expSpan = document.getElementById('exp');
const puntosSpan = document.getElementById('puntos');
const coinsSpan = document.getElementById('coins');
const multiplicadorSpan = document.getElementById('multiplicador');


setInterval(() => {
    expSpan.textContent = `Exp: ${exp}`;
    puntosSpan.textContent = `Puntos: ${puntos}`;
    coinsSpan.textContent = `Coins: ${coins}`;
    multiplicadorSpan.textContent = `Multiplicador: ${multiplicador}`;
}, 20);