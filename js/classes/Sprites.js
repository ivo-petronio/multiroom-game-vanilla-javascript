class Sprite {
    constructor({
        position, 
        imageSrc, 
        frameRate = 1, 
        animations, 
        frameBuffer = 2, 
        loop, 
        autoplay = true
    }) {
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
        this.currentFrame = 0;
        this.elapsedFrames = 0;
        this.frameBuffer = frameBuffer;
        this.animations = animations;
        this.loop = loop;
        this.autoplay = autoplay
        

        if (this.animations) {
            for (let key in this.animations) {
                const image = new Image();
                image.src = this.animations[key].imageSrc;
                this.animations[key].image = image;
            }
        }
    }

    play() {
        this.autoplay = true;
    }

    draw() {
        if (!this.loaded) return;
        const cropbox = {
            position: {
                x: this.width * this.currentFrame,
                y: 0
            },
            width: this.width,
            height: this.height
        };
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
        );
        this.updateFramesOfSpriteImage();
    }

    updateFramesOfSpriteImage() {
        if (!this.autoplay) return;
        this.elapsedFrames++;
        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate - 1) this.currentFrame++;
            else if(this.loop) this.currentFrame = 0;
        }
    }

}