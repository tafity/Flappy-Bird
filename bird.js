class Bird {
    constructor() {
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this._config = new Config()
        this._animationFrames = this._config.animationFrames
        this._birdCoordinats = this._config.birdCoordinats
        this.frames = this._config.frames
        this._bird = this._config.animationFrames[this._config.frames]
        this._draw = new CanvasDrawing();
        this.ctx = this._draw.ctx
    }

    update(){}

    drawImage() {
        this.ctx.drawImage(this._sprite, this._bird.sX, this._bird.sY, this._birdCoordinats.w, this._birdCoordinats.h, this._birdCoordinats.h, this._birdCoordinats.x - this._birdCoordinats.w/2, this._birdCoordinats.y - this._birdCoordinats.h/2, this._birdCoordinats.w, this._birdCoordinats.h)  
    }

}