class Obstacles {
    constructor () {
        this._config = new Config()
        this.frames = this._config.frames
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this.obstacles = this._config.obstacles
        this.topPipe = this._config.topPipe
        this.bottomPipe = this._config.bottomPipe
        this.p = this.obstacles.position
        this.topYposition = this.p.y 
        this.bottomYposition = this.p.y + this.obstacles.h + this.obstacles.gap
        this._draw = new CanvasDrawing()
        this._ctx = this._draw.ctx
    }

    drawImage() {
        //верхнее препятствие 
        this._ctx.drawImage(this._sprite, this.topPipe.sX, this.topPipe.sY, this.obstacles.w, this.obstacles.h, this.p.x, this.topYposition, this.obstacles.w, this.obstacles.h)
    }
}