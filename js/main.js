import Game from '/maggie-bird/js/game.js';

const canvas = document.getElementById('maggie');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const game = new Game(canvas);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
}

animate();
