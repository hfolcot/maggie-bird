import Player from "/maggie-bird/js/player.js";
import Input from "/maggie-bird/js/input.js";

const GAMESTATUS = {
    RUNNING : 0,
    PAUSED : 1,
    GAMEOVER : 2,
    START : 3
}

export default class Game {
    constructor(canvas) {
        this.canvas = canvas,
        this.player = new Player(this),
        this.input = new Input(this),
        this.elevate = false,
        this.status = GAMESTATUS.RUNNING
    }

    update() {
        if(this.status == GAMESTATUS.RUNNING) {
            this.player.update();
        }
        if(this.status == GAMESTATUS.START){
            
        }
    }

    draw(ctx) {
        this.player.draw(ctx)
    }
}