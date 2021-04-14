export default class Input {
    constructor(game) {
        document.addEventListener('mousedown', e => {
            game.elevate = true;
        })
        document.addEventListener('mouseup', e => {
            game.elevate = false;
        })
    }
}