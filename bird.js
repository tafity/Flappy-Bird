class Bird {
    constructor() {
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this._config = new Config()
        this._animationFrames = this._config.animationFrames
        this._birdCoordinats = this._config.birdCoordinats
        this._frames = this._config.frames
        this._bird = this._config.animationFrames[this._frames]
        this._draw = new CanvasDrawing();
        this._ctx = this._draw.ctx
        this.gameState = {
            current: 0,
            getReady: 0,
            game: 1, 
            over: 2
        }
    }

    update(){ 
        this.period = this.gameState.current == this.gameState.getReady ? 10 : 5
        this._frames += this._frames % this.period == 0 ? 1 : 0
        this._frames = this._frames % this._animationFrames.length
    }

    drawImage() {
        this._ctx.drawImage(this._sprite, this._bird.sX, this._bird.sY, this._birdCoordinats.w, this._birdCoordinats.h, this._birdCoordinats.x - this._birdCoordinats.w/2, this._birdCoordinats.y - this._birdCoordinats.h/2, this._birdCoordinats.w, this._birdCoordinats.h)  
    }
    flap() {
    }
}