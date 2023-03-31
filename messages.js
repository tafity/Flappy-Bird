class Messages {
    constructor(){
        this._draw = new CanvasDrawing()
        this._canvas = document.getElementById('canvas');
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this._config = new Config()
        this._bird = new Bird()
        this.ctx = this._draw.ctx
        this._getReadyMessage = this._config.getReadyMessage
        this._gameOverMessage = this._config.gameOverMessage
        this._draw = new CanvasDrawing()
        this._canvas = document.getElementById('canvas')
        this.gameState = this._config.gameState
    }
    update() {
        this._canvas.addEventListener ('click', (e) => {
            switch (this.gameState.current) {
                case this.gameState.getReady:
                    this.gameState.current = this.gameState.game;
                    break;
                case this.gameState.game:
                    this._bird.flap();
                    break;
                case this.gameState.over:
                    this.gameState.current = this.gameState.getReady;
                    break;
            }
        })
    }
    drawImage() {
        //стартовое сообщение
        if (this.gameState.current == this.gameState.getReady) {
            this.ctx.drawImage(this._sprite, this._getReadyMessage.sX, this._getReadyMessage.sY, this._getReadyMessage.w, this._getReadyMessage.h, this._getReadyMessage.x, this._getReadyMessage.y, this._getReadyMessage.w, this._getReadyMessage.h)
        }
        if (this.gameState.current == this.gameState.over){
        //конец игры сообщение
            this.ctx.drawImage(this._sprite, this._gameOverMessage.sX, this._gameOverMessage.sY, this._gameOverMessage.w, this._gameOverMessage.h, this._gameOverMessage.x, this._gameOverMessage.y, this._gameOverMessage.w, this._gameOverMessage.h)
        }
    }
}