class Game {
    constructor() {
        this._config = new Config()
        this._canvas = document.getElementById('canvas')
        this._frames = this._config.frames
        this._sprite = new Image(606, 428)
        this._sprite.src = 'spritesheet/sprite.png'
        this._draw = new CanvasDrawing()
        this._bird = new Bird()
        this._messages = new Messages()
        this._obstacles = new Obstacles()
        /*this._gameState = this._config.gameState
        this._currentState = this._gameState.current
        this._getReadyState = this._gameState.getReady
        this._game = this._gameState.game
        this._gameOver = this._gameState.over*/

        this.gameState = {
            current: 0,
            getReady: 0,
            game: 1, 
            over: 2
        }
    }

    update() {
        //стадии игры
        this._canvas.addEventListener ('click', (e) => {
            switch (this.gameState.current) {
                case this.gameState.getReady:
                    this.gameState.current = this.gameState.game;
                    console.log(this.gameState.current)
                    break;
                case this.gameState.game:
                    this._bird.flap();
                    break;
                case this.gameState.over:
                    this.gameState.current = this.gameState.getReady;
                    break;
            }
        })
        /*this._canvas.addEventListener('click', function(evt){
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
        })*/
    

    }

    reset() {
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
        this._bird.update();
        this._frames++
        requestAnimationFrame(this.start.bind(this));
    }
    start(){
        this.loop();
    }
}