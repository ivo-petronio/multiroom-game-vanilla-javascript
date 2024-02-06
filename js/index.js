const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 1024;
const CANVAS_HEIGHT = canvas.height = 576;


const parsedCollisions = collisionLevel1.parse2D();
//LEVEL 1 SCENARY COLLISIONS
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const player = new Player({
    collisionBlocks,
    imageSrc: './assets/sprites/img/king/idle.png',
    frameRate: 11,
    animations: {
        idleRight: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './assets/sprites/img/king/idle.png',
        },
        idleLeft: {
            frameRate: 11,
            frameBuffer: 2,
            loop: true,
            imageSrc: './assets/sprites/img/king/idleLeft.png',
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './assets/sprites/img/king/runRight.png',
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './assets/sprites/img/king/runLeft.png',
        },
        enterDoor: {
            frameRate: 8,
            frameBuffer: 4,
            loop: false,
            imageSrc: './assets/sprites/img/king/enterDoor.png'
        }
    }
})

const background = new Sprite({

    position: {
        x: 0,
        y: 0
    },
    imageSrc : "./assets/sprites/img/backgroundLevel1.png"
});

const doors = [
    new Sprite({
        position: {
            x: 767,
            y: 272
        },
        imageSrc: "./assets/sprites/img/doorOpen.png",
        frameRate: 5,
        frameBuffer: 10,
        loop: false,
        autoplay: false
    })
]



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

    if (player.preventInput) return;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    player.velocity.x = 0;
    if(keys.d.pressed) {
        player.lastDirection = 'right';
        player.switchSprite('runRight');
        player.velocity.x = 5;;
    } else if(keys.a.pressed) {
        player.lastDirection = 'left';
        player.switchSprite('runLeft');
        player.velocity.x = -5;
    } else {
        if(player.lastDirection === 'left') player.switchSprite("idleLeft");
        else if(player.lastDirection === 'right') player.switchSprite("idleRight");
    }

    background.draw();
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw();
    })
    doors.forEach(door => {
        door.draw();
    })
    player.draw();
    player.update();
    requestAnimationFrame(animate);
}

animate();