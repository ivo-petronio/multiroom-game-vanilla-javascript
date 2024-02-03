class Player {
    constructor() {

        this.width = 70
        this.height = 70
        this.gravity = 1

        this.position = {
            x: 0,
            y: 0
        }

        this.sizes = {
            bottom: this.position.y + this.height
        }

        this.velocity = {
            x: 0,
            y: 0,
        }
    }

    draw() {
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.sizes.bottom = this.position.y + this.width;
        if((this.sizes.bottom + this.velocity.y) < CANVAS_HEIGHT) {
            this.velocity.y += this.gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}