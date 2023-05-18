const marioImg =  new Image();            // colado do arquivo game.js
marioImg.src = './img/mario_sprite.png';  // colado do arquivo game.js

const mario = {
    x: 100,
    y: 0,
    img: marioImg,
    sprite: {
        width: 97,
        height: 143,
        line: 0, 
        column: 0,
    },
    wait: function() {
        ctx.drawImage(
            this.img,                                   // Imagem
            0,                                          // Linha do Sprite
            this.sprite.height * this.sprite.line,      // Coluna do Sprite
            this.sprite.width,                          // Largura do Sprite
            this.sprite.height,                         // Altura do Sprite
            this.x,                                     // Posição horizontal
            450 - this.y,                               // Posição vertical
            this.sprite.width,                          // Largura
            this.sprite.height                          // Altura -- Altura em relação
        );
    },
}