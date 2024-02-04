class Sprite {
    constructor({position, imageSrc, frameRate = 1}) {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        this.loaded = false // determine the image was not loaded at this point.
        this.image.onload = () => { // check if the image was alread loaded and setup "true" to the variable loaded.
            this.loaded = true;
            this.width = this.image.width / this.frameRate;
            this.height = this.image.height;
        }
        this.frameRate = frameRate;
    }

    draw() {
        if (!this.loaded) return;
        const cropbox = {
            position: {
                x: 0,
                y: 0
            },
            width: this.width,
            height: this.height
        }
        ctx.drawImage (
            this.image,
            cropbox.position.x,
            cropbox.position.y,
            cropbox.width,
            cropbox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        )
    }

}