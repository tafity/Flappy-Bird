class Game {
    constructor() {
        this._config = new Config()
        this._canvas = document.getElementById('canvas')
        this._frames = this._config.frames
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this._draw = new CanvasDrawing()
        this._bird = new Bird();
        this._messages = new Messages()
        this._obstacles = new Obstacles()
        this._gameState = this._config.gameState
        this._currentState = this._gameState.current
        this._getReadyState = this._gameState.getReady
        this._game = this._gameState.game
        this._gameOver = this._gameState.over
    }

    update() {
        //стадии игры
        this._canvas.addEventListener('click', function(e){
            switch (this._currentState) {
                case this._getReadyState: 
                this._currentState = this._game;
                    break;
                case this._game:
                    this._bird.flap();
                    break;
                case this._gameOver:
                    this._currentState = this._getReadyState;
                    break;
            }
        })
    

    }

    reset() {
        this._bird({
            x:  this._config.birdCoordinats.x,
            y:  this._config.birdCoordinats.y,
            w:  this._config.birdCoordinats.w,
            h:  this._config.birdCoordinats.h,
            frames:  this._config.frames,
            sprite: this._sprite
        })
    }
    draw() {
        this._draw.drawImage();
        this._bird.drawImage();
        this._messages.drawImage();
        this._obstacles.drawImage();
    }
    loop() {
        this.draw();
        this.update();
        this._frames++
        requestAnimationFrame(this.start.bind(this));
    }
    start(){
        this.loop();
    }
}