window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'w':
            for (let i = 0; i < doors.length; i++) {
                const door = doors[i];
                if (player.hitbox.position.x + player.hitbox.width <= 
                        door.position.x + door.width &&
                    player.hitbox.position.x >= door.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= 
                        door.position.y &&
                    player.hitbox.position.y <= 
                        door.position.y + door.height) {
                            door.autoplay = true;
                            return;
                }
            }
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