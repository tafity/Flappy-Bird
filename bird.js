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
        this._gameState = this._config.gameState
        this._currentState = this._gameState.current
        this._getReadyState = this._gameState.getReady
        this._game = this._gameState.game
        this._gameOver = this._gameState.over
    }

    update(){
        this.period = this._currentState == this._getReadyState ? 10:5
        this._frames += this._frames % this.period == 0 ? 1 : 0
        this._frames = this._frames % this._animationFrames.length
    }

    drawImage() {
        this._ctx.drawImage(this._sprite, this._bird.sX, this._bird.sY, this._birdCoordinats.w, this._birdCoordinats.h, this._birdCoordinats.x - this._birdCoordinats.w/2, this._birdCoordinats.y - this._birdCoordinats.h/2, this._birdCoordinats.w, this._birdCoordinats.h)  
    }
    flap() {
        this.period = this._currentState == this._getReadyState ? 10:5
        this.frames += frames%this.period == 0 ? 1 : 0
        this.frames = this.frames%this._animationFrames.length
    }
}