class Player extends Sprite{
    constructor({collisionBlocks = [], imageSrc, frameRate, animations}) {
        super({imageSrc, frameRate, animations})

        this.gravity = 1

        this.position = {
            x: 200,
            y: 200
        }

        this.sizes = {
            bottom: this.position.y + this.height
        }

        this.velocity = {
            x: 0,
            y: 0
        }

        this.collisionBlocks = collisionBlocks;
    }

    update() {
        /* This is the blue box
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height); */

        this.position.x += this.velocity.x;
        this.updateHitboxPosition();
        this.checkForHorizontalCollisions();
        
        //This is the hitbox
        /*
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fillRect(
            this.hitbox.position.x,
            this.hitbox.position.y,
            this.hitbox.width,
            this.hitbox.height
        );*/

        this.applyGravity();
        this.updateHitboxPosition();
        this.checkForVerticalCollisions();       
    }

    updateHitboxPosition() {
        this.hitbox = {
            position: {
                x: this.position.x + 56,
                y: this.position.y + 34
            },
            width: 50,
            height: 53
        }
    }

    switchSprite(name) {
        if (this.image === this.animations[name].image) return;
        this.currentFrame = 0;
        this.image = this.animations[name].image;
        this.frameRate = this.animations[name].frameRate;
        this.frameBuffer = this.animations[name].frameBuffer;
    }

    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            if (this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
                    
                    if (this.velocity.x > 0){
                        this.velocity.x = 0;
                        const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
                        this.position.x = collisionBlock.position.x - offset - 0.01
                        break;
                    } 
                    if (this.velocity.x < 0){
                        this.velocity.x = 0;
                        const offset = this.hitbox.position.x - this.position.x;
                        this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01;
                        break;
                    }
            }
        }
    }

    applyGravity() {
        this.velocity.y += this.gravity;
        this.position.y += this.velocity.y;
        this.sizes.bottom = this.position.y + this.height;
    }

    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            if (this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
                this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
                this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height) {
                    
                    if (this.velocity.y < 0) {
                        this.velocity.y = 0;
                        const offset = this.hitbox.position.y - this.position.y
                        this.position.y = 
                            collisionBlock.position.y + collisionBlock.height - offset + 0.01;
                        break;
                    }

                    if (this.velocity.y > 0) {
                        this.velocity.y = 0;
                        const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
                        this.position.y = collisionBlock.position.y - offset - 0.01
                        break;
                    }

            }
        }
    }
}