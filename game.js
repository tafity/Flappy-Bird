class Game {
    constructor() {
        this._config = new Config();
        this._frames = this._config.frames
        this._draw = new CanvasDrawing();
        this._bird = new Bird();
        this._messages = new Messages();
        this._obstacles = new Obstacles();
    }

    update() {
        this._messages.update();
        this._bird.update();
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
        this.update();
        this.draw();
        this._frames++
        requestAnimationFrame(this.start.bind(this));
    }
    start(){
        this.loop();
    }
}