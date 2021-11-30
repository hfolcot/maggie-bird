import Player from "/maggie-bird/js/player.js";
import Input from "/maggie-bird/js/input.js";
import { handleObstacles } from "/maggie-bird/js/obstacles.js";
import { Background, handleBackgrounds } from "/maggie-bird/js/backgrounds.js";

const GAMESTATUS = {
    RUNNING: 0,
    PAUSED: 1,
    GAMEOVER: 2,
    START: 3
}

//Background images
const skyBackgroundImg = new Image();
skyBackgroundImg.src = 'img/bg/background_sky.jpg';
const treesBackgroundImg = new Image();
treesBackgroundImg.src = 'img/bg/background_trees.png';
const fartreesBackgroundImg = new Image();
fartreesBackgroundImg.src = 'img/bg/far_trees.png';
const mountainsBackgroundImg = new Image();
mountainsBackgroundImg.src = 'img/bg/background_mountains.png';
const treesForegroundImg = new Image();
treesForegroundImg.src = 'img/bg/foreground_trees.png';

export default class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(this);
        this.input = new Input(this);
        this.elevate = false;
        this.status = GAMESTATUS.RUNNING;
        this.obstacles = [];
        this.speed = 1;
        this.frame = 0;
        this.backgrounds = [
            new Background(skyBackgroundImg, 0.4, 1600, 600, canvas), 
            new Background(mountainsBackgroundImg, 0.5, 1600, 600, canvas),
            new Background(fartreesBackgroundImg, 0.6, 1600, 600, canvas),
            new Background(treesBackgroundImg, 0.7, 1600, 800, canvas),
            new Background(treesForegroundImg, 0.8, 1600, 800, canvas)
        ]
    }

    update() {
        if (this.status == GAMESTATUS.RUNNING) {
            this.player.update();
            handleBackgrounds(this);
            handleObstacles(this);
            this.frame++;
            if (this.frame % 100 == 0) {
                this.speed += 0.1;
            }
        }
        if (this.status == GAMESTATUS.START) {

        }
    }

    draw(ctx) {
        this.player.draw(ctx)
    }
}