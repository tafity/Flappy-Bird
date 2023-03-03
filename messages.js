class Messages {
    constructor(){
        this._draw = new CanvasDrawing()
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this._config = new Config()
        this.ctx = this._draw.ctx
        this._getReadyMessage = this._config.getReadyMessage
        this._gameOverMessage = this._config.gameOverMessage
        this._currentState = this._config.gameState.current
        this._getReadyState = this._config.gameState.getReady
        this._gameOver = this._config.gameState.over
        
    }

    drawImage() {
        //стартовое сообщение
        if (this._currentState == this._getReadyState) {
            this.ctx.drawImage(this._sprite, this._getReadyMessage.sX, this._getReadyMessage.sY, this._getReadyMessage.w, this._getReadyMessage.h, this._getReadyMessage.x, this._getReadyMessage.y, this._getReadyMessage.w, this._getReadyMessage.h)
        }
        if (this._currentState == this._gameOver){
        // конец игры сообщение
        this.ctx.drawImage(this._sprite, this._gameOverMessage.sX, this._gameOverMessage.sY, this._gameOverMessage.w, this._gameOverMessage.h, this._gameOverMessage.x, this._gameOverMessage.y, this._gameOverMessage.w, this._gameOverMessage.h)
        }
    }
}