class Sprite {
    constructor({position, imageSrc}) {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        this.loaded = false // determine the image was not loaded at this point.
        this.image.onload = () => { // check if the image was alread loaded and setup "true" to the variable loaded.
            this.loaded = true
        }
    }

    draw() {
        if (!this.loaded) return
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }

}