class Game {
    constructor() {
        this._config = new Config();
        this._frames = this._config.frames
        this._draw = new CanvasDrawing();
        this._bird = new Bird();
        this._messages = new Messages();
        this._obstacles = new Obstacles();
        //this._ground = new Ground();
    }

    update() {
        this._messages.update();
        this._bird.stages();
        this._bird.update();
        this._bird.move();
        this._obstacles.update();
        this._obstacles.stages()
    }

    reset() {
        
    }
    draw() {
        this._draw.drawImage();
        this._obstacles.drawImage();
        this._bird.drawImage();
        this._messages.drawImage();
        
    }
    loop() {
        this.update();
        this.draw();
        this._frames++
        requestAnimationFrame(this.start.bind(this));
    }
    start(){
        this.loop();
    }
}