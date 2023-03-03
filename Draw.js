class Draw {
    constructor () {
       
    }
    
    drawImage(sprite, sX, sY, w, h, x, y){}
    clear(){}
}

class CanvasDrawing extends Draw {
    constructor () {
        super()
        this._config = new Config()
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d')
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this.canvas.width = 320
        this.canvas.height = 480

        // информация по заднему фону
        this._background = this._config.background
        this._ground = this._config.ground
    }
    drawImage(sprite, sX, sY, w, h, x, y){
    //отриасовка заднего фона канваса
    this.ctx.fillStyle = '#70c5ce'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    super.drawImage(sprite, sX, sY, w, h, x, y )
    this.ctx.drawImage(this._sprite, this._background.sX, this._background.sY, this._background.w, this._background.h, this._background.x, this._background.y, this._background.w, this._background.h );
    this.ctx.drawImage(this._sprite, this._background.sX, this._background.sY, this._background.w, this._background.h, this._background.x + this._background.w, this._background.y, this._background.w, this._background.h);

    //отрисовка земли
    this.ctx.drawImage(this._sprite, this._ground.sX, this._ground.sY, this._ground.w, this._ground.h, this._ground.x, this._ground.y, this._ground.w, this._ground.h);
    this.ctx.drawImage(this._sprite, this._ground.sX, this._ground.sY, this._ground.w, this._ground.h, this._ground.x + this._ground.w, this._ground.y, this._ground.w, this._ground.h);
}
}

