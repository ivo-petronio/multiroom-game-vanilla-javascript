const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 1024;
const CANVAS_HEIGHT = canvas.height = 576;


const parsedCollisions = collisionLevel1.parse2D();
//LEVEL 1 SCENARY COLLISIONS
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const player = new Player({
    collisionBlocks
})

const background = new Sprite({

    position: {
        x: 0,
        y: 0
    },
    imageSrc : "./assets/sprites/img/backgroundLevel1.png"
});



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

    background.draw();
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw();
    })
    player.draw();
    player.update();
    requestAnimationFrame(animate);
}

animate();