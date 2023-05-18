const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const marioImg =  new Image();
marioImg.src = './img/mario_sprite.png';

function draw() {
    ctx.drawImage(marioImg, 0,0);
}

window.onload = function() {
    draw();
}

function draw() {
ctx.drawImage(
    marioImg,   // Imagem a ser carregada
    97,         // px da esquerda da imagem a ser cortada
    143,        // px da parte superior da imagem a ser cortada
    97,         // px do sprite que desejo exibir na horizontal
    143,        // px do sprite que desejo exibir na vertical 
    0,          // distância da borda esquerda do canvas
    450,        // distância da borda superior do canvas
    97,         // largura total da imagem cortada
    143,        // altura total da imagem cortada
);}