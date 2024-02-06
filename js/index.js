const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 1024;
const CANVAS_HEIGHT = canvas.height = 576;


let parsedCollsions;
let collisionBlocks;
let background;
let doors;

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
            frameBuffer: 12,
            loop: false,
            imageSrc: './assets/sprites/img/king/enterDoor.png',
            onComplete: () => {
                console.log("Está um puta escuro aqui dentro!");
                gsap.to(overlay, {
                    opacity: 1
                })
            }
        }
    }
})

let level = 1;
let levels = {
    1: {
        init: () => {
            parsedCollisions = collisionLevel1.parse2D();
            collisionBlocks = parsedCollisions.createObjectsFrom2D();
    
            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc : "./assets/sprites/img/backgroundLevel1.png"
            }),
    
            doors = [
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
        }
    }
    }





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

const overlay = {
    opacity: 0
}

function animate() {
    requestAnimationFrame(animate);
    background.draw();
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw();
    })
    doors.forEach(door => {
        door.draw();
    })

    player.handleInput(keys);
    player.draw();
    player.update();

    ctx.save();
    ctx.globalAlpha = overlay.opacity;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.restore();
}

levels[level].init();
animate();