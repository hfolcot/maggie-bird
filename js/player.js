const playerImg = new Image();
playerImg.src = 'img/maggie_sprite_sheet.png';

export default class Player {
    constructor(game) {
        this.x = game.canvas.width / 10;
        this.y = game.canvas.height / 2;
        this.vy = 0;
        this.ogWidth = 250;
        this.ogHeight = 200;
        this.weight = 1;
        this.width = this.ogWidth/2;
        this.height = this.ogHeight/2;
        this.game = game;
        this.frameNo = 0;
    }
    update() {
        if (this.game.elevate == true) {
            this.fly();
        } else {
            this.fall();
        }
        
        if(this.game.frame % 5 == 0){
            this.frameNo++;
        }
        if(this.frameNo === 7){
            this.frameNo = 0;
        }
    }

    draw(ctx) {
        //ctx.fillStyle = 'black';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        this.game.ctx.drawImage(playerImg, this.ogWidth * this.frameNo, 0, this.ogWidth, this.ogHeight,  this.x, this.y, this.width , this.height);
    }

    fly() {
        if (this.y > 0) {
            this.vy = this.game.canvas.height / 100;
            this.y -= this.vy;
        } else {
            this.vy = 0;
        }
    }
    fall() {
        if (this.y < this.game.canvas.height * 0.9 - this.height) {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;

        }
    }
}