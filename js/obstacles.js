const ufo = new Image();
ufo.src = 'img/ufo_sprite_sheet.png';
const plane = new Image();
plane.src = 'img/plane_sprite_sheet.png';
const heli = new Image();
heli.src = 'img/helicopter_sprite_sheet.png';
const greenPlane = new Image();
greenPlane.src = 'img/green_plane_sprite_sheet.png';


export class Obstacle {
    constructor(game, ogWidth, ogHeight, w, h, maxFrame, img, speed, animationSpeed) {
        this.ogWidth = ogWidth;
        this.ogHeight = ogHeight;
        this.width = w;
        this.height = h;
        this.x = game.canvas.width;
        this.y = (Math.random() * (game.canvas.height - this.height));
        this.game = game;
        this.frameNo = 0;
        this.maxFrame = maxFrame;
        this.img = img;
        this.speed = speed;
        this.animationSpeed = animationSpeed;
    }
    update() {
        if (this.game.frame % this.animationSpeed == 0) {
            this.frameNo++;
        }
        if (this.frameNo === this.maxFrame) {
            this.frameNo = 0;
        }

    }

    draw(ctx) {
        //this.game.ctx.fillStyle = 'grey';
        //this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.game.ctx.drawImage(this.img, this.ogWidth * this.frameNo, 0, this.ogWidth, this.ogHeight, this.x, this.y, this.width, this.height);
    }
}

const obstacles = [
    {
        ogWidth: 250,
        ogHeight: 200,
        width: 250,
        height: 200,
        maxFrame: 3,
        img : heli,
        speed : 6,
        animSpeed: 3
    },
    {
        ogWidth: 250,
        ogHeight: 75,
        width: 250,
        height: 75,
        maxFrame: 3,
        img : ufo,
        speed : 3,
        animSpeed: 5
    },
    {
        ogWidth: 250,
        ogHeight: 200,
        width: 250,
        height: 200,
        maxFrame: 3,
        img : plane,
        speed : 5,
        animSpeed: 3
    },
    {
        ogWidth: 250,
        ogHeight: 100,
        width: 250,
        height: 100,
        maxFrame: 3,
        img : greenPlane,
        speed :4,
        animSpeed: 3
    },

]



export function handleObstacles(game) {
    if (game.frame % 100 == 0) {
        let rand = Math.floor(Math.random() * 4);
        let obst = new Obstacle(
            game, 
            obstacles[rand].ogWidth, 
            obstacles[rand].ogHeight, 
            obstacles[rand].width, 
            obstacles[rand].height, 
            obstacles[rand].maxFrame, 
            obstacles[rand].img, 
            obstacles[rand].speed,
            obstacles[rand].animSpeed
            );
        game.obstacles.unshift(obst);
    }
    for (let i = 0; i < game.obstacles.length; i++) {
        game.obstacles[i].x -= game.obstacles[i].speed * game.speed;
        game.obstacles[i].draw();
        game.obstacles[i].update();
        if (game.obstacles[i].x + game.obstacles[i].width < 0) {
            game.obstacles.splice(i, 1);
        }
    }
}