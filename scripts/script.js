const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

document.addEventListener("DOMContentLoaded", function() {
    var velocidadePipe = 2500;

    var nivel = window.location.search;
    nivel = nivel.replace('?', '');

    if (nivel === 'normal') {
        velocidadePipe = 2000;
    } else if (nivel === 'dificil') {
        velocidadePipe = 1500;
    } else if (nivel === 'super') {
        velocidadePipe = 1000;
    }
    var pipe = document.querySelector('.pipe');

    pipe.classList.remove('normal', 'dificil', 'super');

    pipe.classList.add(nivel);
});

function iniciarJogo() {
    var nivel = document.getElementById('nivel').value
    if (nivel === '') {
        alert ('Por favor escolha um nivel de dificuldade!')
        return false
    } window.location.href = 'game.html?' + nivel
}

if (window.location.href.indexOf("game.html") > -1) {
var tempo = 15
var cronometro = setInterval(function() {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        window.location.href = "vitoria.html"; 
    } else {
    document.getElementById('cronometro').innerHTML = tempo }
},600) }

const jump = () => {
    mario.classList.add('jump');
    setTimeout(
        () => {mario.classList.remove('jump');},500)
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <= 75 && pipePosition > 0 && marioPosition < 150) {
        pipe.style.animation = 'none';
        pipe.style.left = pipePosition + 'px';
        
        mario.style.animation = 'none';
        mario.style.bottom = marioPosition + 'px';
        
        mario.src = "imagens/game-over.png";
        mario.style.width = '45px';
        mario.style.marginLeft = '40px';
        
        clearInterval(loop)
        setTimeout(function() {
            window.location.href = "gameover.html"; 
        }, 2000);
    }
}       ,10);

document.addEventListener ('keydown', jump);