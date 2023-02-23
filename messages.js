class Messages {
    constructor(){
        this._draw = new CanvasDrawing()
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this._config = new Config()
        this.ctx = this._draw.ctx
        this._getReadyMessage = this._config.getReadyMessage
    }

    drawImage() {
        this.ctx.drawImage(this._sprite, this._getReadyMessage.sX, this._getReadyMessage.sY, this._getReadyMessage.w, this._getReadyMessage.h, this._getReadyMessage.x, this._getReadyMessage.y)
    }
}