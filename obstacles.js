class Obstacles {
    constructor () {
        this._config = new Config()
        this.frames = this._config.frames
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this._canvas = this.canvas = document.getElementById('canvas')
        this.obstacles = this._config.obstacles
        this.topPipe = this._config.obstacles.topPipe
        this.bottomPipe = this._config.obstacles.bottomPipe
        this.position = this.obstacles.position
        this.maxYposition = this._config.obstacles.maxYPos
        this.topYposition = this.position.y 
        this.bottomYposition = this.position.y + this.obstacles.h + this.obstacles.gap
        this._draw = new CanvasDrawing()
        this._ctx = this._draw.ctx
        this.gameState = this._config.gameState
    }

    drawImage() { 
        for (let i = 0; i < this.position.length; i++) {
            this.p = this.position[i]
            this.topYposition = this.p.y 
            this.bottomYposition = this.p.y + this.obstacles.h + this.obstacles.gap
             //верхнее препятствие
              this._ctx.drawImage(this._sprite, this.topPipe.sX, this.topPipe.sY, this.obstacles.w, this.obstacles.h, this.p.x, this.topYposition, this.obstacles.w, this.obstacles.h)
             // нижнее препятствие
              this._ctx.drawImage(this._sprite, this.bottomPipe.sX, this.bottomPipe.sY, this.obstacles.w, this.obstacles.h, this.p.x, this.bottomYposition, this.obstacles.w, this.obstacles.h)
        }
    }

    /*stages() {
        this._canvas.addEventListener('click', (e) => {
            switch (this.gameState.current) {
              case this.gameState.getReady:
                this.gameState.current = this.gameState.game;
                break;
              case this.gameState.game:
                break;
              case this.gameState.over:
                this.gameState.current = this.gameState.getReady;
                break;
            }
          })
    }*/

    update() {
        if (this.gameState.current != this.gameState.getReady) return;
        
        if (this.frames % 100 == 0) {
            this.position.push({
                x: this._canvas.width,
                y: this.maxYposition * (Math.random() + 1)
            })
        }
        for (let i = 0; i < this.position.length; i++) {
            this.p = this.position[i]
            this.p -= this.obstacles.dx
        }
    }
}