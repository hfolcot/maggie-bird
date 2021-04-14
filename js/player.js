export default class Player {
    constructor(game) {
        this.x = game.canvas.width / 10,
            this.y = game.canvas.height / 2,
            this.vy = 0,
            this.weight = 1,
            this.width = game.canvas.width / 20,
            this.height = this.width
        this.game = game
    }
    update() {
        if (this.game.elevate == true) {
            this.fly();
        } else {
            this.fall();
        }
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    fly() {
        if (this.y > 0) {
            this.vy = 3;
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