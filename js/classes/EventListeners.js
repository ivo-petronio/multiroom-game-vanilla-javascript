window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'w':
            if(player.velocity.y === 0) {
                player.velocity.y = -25;
            }
            break;
        case 'd':
            keys.d.pressed = true;
            break;
        case 'a':
            keys.a.pressed = true;
            break;
    }
});

window.addEventListener("keyup", e => {
    switch(e.key) {
        case 'w':
            keys.w.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            //player.switchSprite("idleRight");
            break;
        case 'a':
            keys.a.pressed = false;
            //player.switchSprite("idleLeft");
            break;
    }
});