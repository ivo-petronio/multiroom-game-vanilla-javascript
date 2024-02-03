const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 500;
const CANVAS_HEIGHT = canvas.height = 500;

const player = new Player();

const keys = {
    w : {
        pressed: false
    },
    d : {
        pressed: false
    },
    a : {
        pressed: false
    }
}

function animate() {

    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    player.velocity.x = 0;
    if(keys.d.pressed) {
        player.velocity.x = 5;
    } else if(keys.a.pressed) {
        player.velocity.x = -5;
    }

    player.draw();
    player.update();
    requestAnimationFrame(animate);
}

animate();