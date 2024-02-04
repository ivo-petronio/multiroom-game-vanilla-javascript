class Player extends Sprite{
    constructor({collisionBlocks = [], imageSrc}) {
        super({imageSrc})

        this.gravity = 1

        this.position = {
            x: 300,
            y: 300
        }

        this.sizes = {
            bottom: this.position.y + this.height
        }

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.collisionBlocks = collisionBlocks;
    }

    update() {
        ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        this.position.x += this.velocity.x;
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.checkForVerticalCollisions();       
    }

    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];

            if (this.position.x + this.width >= collisionBlock.position.x &&
                this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height) {
                    
                    if (this.velocity.x > 1){
                        this.velocity.x = 0;
                        this.position.x = collisionBlock.position.x - this.width - 0.01;
                        break;
                    } 
                    if (this.velocity.x < -1){
                        this.velocity.x = 0;
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01;
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

            if (this.position.x + this.width >= collisionBlock.position.x &&
                this.position.x <= collisionBlock.position.x + collisionBlock.width &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height) {
                    
                    if (this.velocity.y > 0) {
                        this.velocity.y = 0;
                        this.position.y = collisionBlock.position.y - this.height - 0.01;
                        break;
                    }
                    if (this.velocity.y < 0) {
                        this.velocity.y = 0;
                        this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01;
                        break;
                    }
            }
        }
    }
}